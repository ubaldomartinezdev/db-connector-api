import { Client } from "pg";

const { DB_USER, DB_HOST, DB_NAME, DB_PASS } = process.env;

export const db = new Client({
  port: 5432,
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASS,

  // Needed for Heroku
  // We might need to remove it when we use AWS
  ssl: {
    rejectUnauthorized: false,
  },
});
