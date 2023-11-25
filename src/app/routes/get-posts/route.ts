import getPayloadClient from "@/payload/payloadClient";
import { revalidateTag } from "next/cache";

export async function GET() {
  const payload = await getPayloadClient();

  const posts = await payload.find({
    collection: "posts",
    draft: true,
  });

  revalidateTag("posts");

  return Response.json(posts);
}
