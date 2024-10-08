import {
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("status", [
  "open",
  "void",
  "paid",
  "uncollectible",
]);

export const Invoices = pgTable("invoices", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  description: text("description"),
  value: integer("value").notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
  status: statusEnum("status").notNull().default("open"),
});
