import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import path from "path";
import { buildConfig } from "payload/config";
import { Cities, Event, Media, Places, Type } from "./collections";
import { Config } from "./globals/configs";

export default buildConfig({
  db: mongooseAdapter({
    url: process.env.MONGODB_URI!,
    connectOptions: {},
  }),
  editor: slateEditor({}),
  collections: [Event, Media, Cities, Type, Places],

  globals: [Config],
  admin: {
    bundler: webpackBundler(),
  },
  upload: {
    
    limits: {
      fileSize: 5000000, // 5MB, written in bytes
    },
  },
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
});
