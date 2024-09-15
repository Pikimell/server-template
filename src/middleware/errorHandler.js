import { HTTPException } from "hono/http-exception";

export const errorMiddleware = (err, c) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }
};
