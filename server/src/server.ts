import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { errorHandle } from './middlewares/ErrorHandle';
import ROUTES from './routes';
import 'express-async-errors';

const server = express();
const port = process.env.PORT || 5000;

server.use(bodyParser.json({ limit: '50mb' }));
server.use(bodyParser.urlencoded({ extended: true }));

server.use(cors())
server.use(helmet());
server.use(compression()); //Compress all routes

server.use(express.json()); // altera padrão de dados

server.use(ROUTES);

server.use(errorHandle); // trata erros da aplicação

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
