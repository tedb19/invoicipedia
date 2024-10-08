import { defineConfig } from "drizzle-kit";

import * as dotenv from "dotenv";

dotenv.config({
  path: "./.env.local",
});

if (!process.env.XATA_DATABASE_URL) {
  throw new Error("Please specify your XATA_DATABASE_URL");
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dbCredentials: {
    url: process.env.XATA_DATABASE_URL,
  },
});
