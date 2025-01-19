import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';

if (!process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL) {
  throw new Error("Database URL is not set in the environment variables.");
}

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL);

if (!sql || typeof sql.query !== 'function') {
  console.error("Failed to initialize the neon client or the client does not have a query method.");
}

const db = drizzle({ client: sql });

export { db };
