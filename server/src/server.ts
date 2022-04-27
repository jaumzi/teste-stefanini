import express from 'express';
import fs from 'fs';
import path from 'path';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import helmet from 'helmet';
// import compression from 'compression';
// import createEmotionServer from '@emotion/server/types/create-instance';
import { errorHandle } from './middlewares/ErrorHandle';
import 'express-async-errors';
import createEmotionCache from './shared/createEmotionCache';
import createEmotionServer from '@emotion/server/create-instance';
import { generateDomString, renderFullPage } from './shared/renderSSR';
import { isProduction } from './config/constants/Constants';

const app = express();
const port = process.env.PORT || 5000;

// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors())
// app.use(helmet());
// app.use(compression()); //Compress all routes

// app.use('^/$', (req, res, next) => {

//   fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
//       if (err) {
//           console.log(err);
//           return res.status(500).send("Some error occurred")
//       }
//       return res.send(data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`))
//   })
// });

if (isProduction) {
  app.use('/', express.static(path.resolve(__dirname, "..", "build_web")));

  // This is fired every time the server-side receives a request.
  app.use('^/$', (req, res) => {
    const cache = createEmotionCache();
    const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);

    // Render the component to a string.
    const html = generateDomString(cache);

    // Grab the CSS from emotion
    const emotionChunks = extractCriticalToChunks(html);
    const emotionCss = constructStyleTagsFromChunks(emotionChunks);

    // Send the rendered page back to the client.
    res.send(renderFullPage(html, emotionCss));
  });
}

// app.use(express.json()); // altera padrão de dados

// app.use(ROUTES);

app.use(errorHandle); // trata erros da aplicação

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
