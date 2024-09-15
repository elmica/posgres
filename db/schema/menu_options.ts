import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const menu_options = pgTable('menu_options', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
});
