import express from 'express';

const ROUTES = express.Router();

ROUTES.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
});

ROUTES.post('/posts', (request, response) => {
  return response.status(200).json({ message: 'New post' })
});

export default ROUTES;
