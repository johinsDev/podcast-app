/**
 * Configuration of the server middlewares.
 */

import bodyParser from 'body-parser';

export default app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};