import { AfterChangeHook } from "payload/dist/collections/config/types";

export const regenerateStaticPage: AfterChangeHook<any> = async ({
  req: { payload },
  doc,
}) => {
  let path = `/${doc.slug}`;
  const router =
    process.env.NODE_ENV === "production"
      ? process.env.VERCEL_URL ?? process.env.PAYLOAD_PUBLIC_CMS_URL
      : "http://localhost:3000";

  if (path === "/home" || path.endsWith("undefined")) {
    path = "/";
  }

  try {
    const res = await fetch(`${router}/routes/revalidate?path=${path}`);
    if (res.ok) {
      payload.logger.info(`Now regenerating path '${path}'`);
    } else {
      payload.logger.info(`Error regenerating path '${path}'`);
      // https://vercel-next-payload.vercel.app/
    }
  } catch (err) {
    payload.logger.info(`Error hitting regeneration route for '${path}'`);
  }
};
