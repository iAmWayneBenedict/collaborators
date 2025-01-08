import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./user";

export const userMessages = pgTable("user_messages", {
	id: serial("id").primaryKey(),
	user_id: text("user_id")
		.references(() => users.id)
		.notNull(),
	message: text("message").notNull(),
	created_at: timestamp("created_at", { mode: "date" }).defaultNow(),
	updated_at: timestamp("updated_at", { mode: "date" }).defaultNow(),
});
