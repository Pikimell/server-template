import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { errorMiddleware } from "./middleware/errorHandler.js";

import routes from "./routes/index.js";
const {} = routes;

function setupServer() {
  const app = new Hono();

  app.use(cors());
  app.use(logger());
  app.use(prettyJSON());

  app.use(errorMiddleware);

  return app;
}

const server = setupServer();
export const handler = handle(server);
