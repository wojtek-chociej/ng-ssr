import {app as serverPL} from './server/pl/server.mjs';
import {app as serverEn} from './server/en-US/server.mjs';

const express = require("express");

function run() {
  const port = process.env.PORT || 4000;
  const server = express();
  server.use('/pl', serverPL());
  server.use('/en-US', serverEn());
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
