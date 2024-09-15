// import dotenv from 'dotenv';
// dotenv.config();
import { env as honoEnv } from 'hono/adapter';

export function env(name, defaultValue) {
  const variables = honoEnv();

  const value = variables[name];

  if (value) return value;

  if (defaultValue) return defaultValue;

  throw new Error(`Missing: process.env['${name}'].`);
}
