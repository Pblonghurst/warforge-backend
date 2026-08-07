import { Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import * as schema from "./schema/index.ts";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error(
    "DATABASE_URL is not set. Add it to your `env` file (see .env.example)."
  );
}

// Neon serverless WebSocket driver — a persistent connection pool with full
// transaction support, a good fit for a long-running server.
const pool = new Pool({ connectionString: databaseUrl });

export const db = drizzle({ client: pool, schema });

export { schema };
