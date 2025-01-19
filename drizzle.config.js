/** @type { import("drizzle-kit").Config} */
export default ({
  schema: './configs/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:EYMW6pmHUq2N@ep-tight-sun-a8rm3a42.eastus2.azure.neon.tech/neondb?sslmode=require',
  },
});