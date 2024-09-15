import { HTTPException } from 'hono/http-exception';

export const errorMiddleware = (err, c) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }

  const data = {
    status: 500,
    message: 'Something went wrong',
    data: err.message,
  };

  return c.json(data, 500);
};
