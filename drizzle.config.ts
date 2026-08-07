import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

// Drizzle Kit runs this config outside the app, so load env vars here too.
dotenv.config({ path: "env" });

export default defineConfig({
  schema: "./src/db/schema",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});
