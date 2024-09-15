import { Hono } from 'hono';
import { handle } from 'hono/aws-lambda';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';

import { errorMiddleware } from './middleware/errorHandler.js';
import { notFound } from './middleware/notFoundHandler.js';
import { connectionDB } from './middleware/connection.js';

import routes from './routes/index.js';
const { bookRouter, userRouter } = routes;

function setupServer() {
  const app = new Hono();

  app.use(cors());
  app.use(logger());
  app.use(prettyJSON());
  app.use(connectionDB);

  app.route('/', bookRouter);
  app.route('/', userRouter);

  app.use(errorMiddleware);

  return app;
}

const server = setupServer();
export const handler = handle(server);
