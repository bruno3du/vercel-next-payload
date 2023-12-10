import { env } from "@/env.mjs";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import path from "path";
import { buildConfig } from "payload/config";
import { Cities, Event, Media, Places, Type } from "./collections";
import { Config } from "./globals/configs";

import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import { slugKey } from "./constants/slugKey";

const adapter = s3Adapter({
  config: {
    endpoint: env.NEXT_PUBLIC_S3_ENDPOINT,
    region: env.S3_REGION,
    logger: console,
    credentials: {
      accessKeyId: env.S3_ACCESS_KEY_ID,
      secretAccessKey: env.S3_ACCESS_KEY_ID,
    },
  },
  bucket: env.S3_BUCKET,
});

export default buildConfig({
  db: mongooseAdapter({
    url: env.MONGODB_URI,
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
  plugins: [
    cloudStorage({
      collections: {
        [slugKey.MEDIA]: {
          adapter,
          generateFileURL: (file) => {
            return `https://${env.S3_BUCKET}.s3.${env.S3_REGION}.amazonaws.com/${file.filename}`;
          },
        },
      },
    }),
  ],
});
