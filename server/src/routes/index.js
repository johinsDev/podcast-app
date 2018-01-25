/**
 * API Routes
 */

import { Router } from 'express';
import HTTPStatus from 'http-status';

const routes = new Router();

routes.get('/algo', (req, res) => {
  res.json('test')
});

routes.all('*', (req, res, next) =>
  next(new Error('Not Found!', HTTPStatus.NOT_FOUND, true)),
);

export default routes;