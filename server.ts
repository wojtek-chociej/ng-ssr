import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, basename, join, resolve } from 'node:path';
import bootstrap from './src/main.server';
import { ISRHandler } from '@rx-angular/isr/server';
import { APP_BASE_HREF } from '@angular/common';
import { LOCALE_ID } from '@angular/core';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));

  const lang = basename(serverDistFolder);
  const langPath = `/${lang}/`;

  const browserDistFolder = resolve(serverDistFolder, `../../browser/${lang}`);
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine({
    enablePerformanceProfiler: true,
    providers:[
      {provide:APP_BASE_HREF, useValue: langPath},
      { provide: LOCALE_ID, useValue: lang },
    ]
  });

  const isr = new ISRHandler({
    indexHtml,
    invalidateSecretToken: 'MY_TOKEN', // replace with env secret key ex. process.env.REVALIDATE_SECRET_TOKEN
    enableLogging: true,
    serverDistFolder,
    browserDistFolder,
    bootstrap,
    commonEngine,
  });

  server.use(express.json());
  server.post(
    '/api/invalidate',
    async (req, res) => await isr.invalidate(req, res)
  );

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get(
    '*.*',
    express.static(browserDistFolder, {
      maxAge: '1y',
    })
  );

  server.get(
    '*',
    // Serve page if it exists in cache
    async (req, res, next) => await isr.serveFromCache(req, res, next),
    // Server side render the page and add to cache if needed
    async (req, res, next) => await isr.render(req, res, next)
  );


  return server;
}

// function run(): void {
//   const port = process.env['PORT'] || 4000;
//
//   // Start up the Node server
//   const server = app();
//   server.listen(port, () => {
//     console.log(`Node Express server listening on http://localhost:${port}`);
//   });
// }
//
// run();
