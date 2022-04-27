// @ts-nocheck

import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { CacheProvider } from '@emotion/react';
// import App from '../../../web/src/index';
import App from 'web/src/index';

export function renderFullPage(html, css) {
  return `
    <!DOCTYPE html>
    <html lang="pt_br">
      <head>
        <title>My page</title>
        ${css}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </head>
      <body>
        <script async src="build_web/bundle.js"></script>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
}

export function generateDomString(cache) {
  return ReactDOMServer.renderToString(<CacheProvider value={cache}><App /></CacheProvider>);
}
