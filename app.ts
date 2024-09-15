import * as schema from './db/schema/menu_options';
import { drizzle } from 'drizzle-orm/postgres-js';
import client from "./db/connection";

const db = drizzle(client, { schema });

const result = await db.query.menu_options.findMany();

console.log(result)
