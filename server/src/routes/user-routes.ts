import express from 'express';

const ROUTES = express.Router();

ROUTES.get('/user', (request, response) => {
  return response.json({ message: 'User route' })
});

export default ROUTES;
