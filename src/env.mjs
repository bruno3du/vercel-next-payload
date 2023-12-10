import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    MONGODB_URI: z.string().min(1),
    PAYLOAD_CONFIG_PATH: z.string().min(1),
    PAYLOAD_SECRET: z.string().min(1),
    PAYLOAD_PUBLIC_CMS_URL: z.string().min(1),
    S3_ACCESS_KEY_ID: z.string().min(1),
    S3_SECRET_ACCESS_KEY: z.string().min(1),
    S3_BUCKET: z.string().min(1),
    S3_REGION: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID: z.string(),
    NEXT_PUBLIC_S3_ENDPOINT: z.string().min(1),
  },
  onValidationError: (error) => {
    console.log(
      "❌ Invalid environment variables:",
      error.flatten().fieldErrors
    );
  },
  onInvalidAccess: (variable) => {
    console.log(variable, "onInvalidAccess in env.mds");
  },
  runtimeEnv: {
    MONGODB_URI: process.env.MONGODB_URI,
    PAYLOAD_CONFIG_PATH: process.env.PAYLOAD_CONFIG_PATH,
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    PAYLOAD_PUBLIC_CMS_URL: process.env.PAYLOAD_PUBLIC_CMS_URL,
    NEXT_PUBLIC_S3_ENDPOINT: process.env.NEXT_PUBLIC_S3_ENDPOINT,
    S3_ACCESS_KEY_ID: process.env.S3_ACCESS_KEY_ID,
    S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY,
    S3_BUCKET: process.env.S3_BUCKET,
    NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID:
      process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID,
    S3_REGION: process.env.S3_REGION,
  },
});
