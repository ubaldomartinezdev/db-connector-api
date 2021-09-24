import { Client } from "pg";

const { DB_USER, DB_HOST, DB_NAME, DB_PASS, NODE_ENV } = process.env;

const isLocalEnvironment = NODE_ENV === "local";

const sslOptions = {
  rejectUnauthorized: false,
};

export const db = new Client({
  port: 5432,
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASS,

  // Needed for Heroku
  // We might need to remove it when  use AWS
  ssl: isLocalEnvironment ? false : sslOptions,
});
