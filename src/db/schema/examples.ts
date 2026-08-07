import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

// Placeholder table so Drizzle Kit has something to generate a migration from.
// Replace this with your real tables. Keep each domain's tables (and their
// relations) together in a file like this, then re-export from ./index.ts.
export const examples = pgTable("examples", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
