import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  imageUrl: varchar("imageUrl").notNull(),
  credits: integer("credits").default(2),
});

export const AigeneratedImage = pgTable("aigeneratedImage", {
  id: serial("id").primaryKey(),
  roomType: varchar("roomType").notNull(),
  designType: varchar("designType").notNull(),
  orgImg: varchar("originalImg").notNull(),
  aiImg: varchar("aiImg").notNull(),
  userEmail: varchar("userEmail"),
});
