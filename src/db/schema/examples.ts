import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const test = pgTable("test", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
});
