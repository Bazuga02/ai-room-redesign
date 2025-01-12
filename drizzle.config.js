import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:7AQNdOqKHJb0@ep-cool-night-a5bpz80m.us-east-2.aws.neon.tech/ai-room-redesign?sslmode=require',
  },
});
