import { initMongoConnection } from '../db/initMongoConnection.js';

export const connectionDB = async (c, next) => {
  await initMongoConnection();
  await next();
};
