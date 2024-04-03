## Angular SSR SSG oraz ISR

Server Side Rendering - renderowanie po stronie serwera

Static Site Generation - generowanie statycznych plików

Incremental Static Regeneration - cache oraz prerenderowanie 'w locie' wybranych stron

### Gałęzie

Na konkretnych gałęziach znajdziesz rozwiązania wybranych tematów

- `i18n` - Wielojęzyczność oraz SSR z SSG
- `i18n-isr` - Wielojęzyczność oraz SSR z ISR
- `isr` - SSR z ISR
- `without-isr` - samo SSR z SSG


### Uruchomienie

`npm run build`

`npm run serve:ssr:ng-ssr` - nodeJS

`http-server dist/ng-ssr/browser` - Serwer statycznych plików (SSG)

W konsoli wyświetli się na jakim porcie i na jakim url działa strona. Ważne, by wejść na podstrony `/pl` lub `/en-US`.
