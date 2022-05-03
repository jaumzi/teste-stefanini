import express from 'express';
import { getAll } from '../controllers/ContaLegadoController';

const ROUTES = express.Router();

const API_PATH_V1 = '/api/v1';

ROUTES.get(`${API_PATH_V1}/`, (req, res) => {
  res.status(200).json("Hello World")
});

ROUTES.get(`${API_PATH_V1}/conta-legado/get-all`, getAll);

export default ROUTES;
