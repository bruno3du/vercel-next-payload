import path from "path";
import { buildConfig } from "payload/config";
import { Post } from "./collections/posts";
import { Config } from "./globals/configs";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { slateEditor } from "@payloadcms/richtext-slate";

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

// or

// or

export default buildConfig({
  db: postgresAdapter({
    migrationDir: path.resolve(__dirname, "./migrations"),
    pool: {
      connectionString: process.env.DATABASE_URI_URL + "?sslmode=require",
    },
  }),
  editor: slateEditor({}),
  collections: [Post],
  globals: [Config],

  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
});
