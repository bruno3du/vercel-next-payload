import getPayloadClient from "@/payload/payloadClient";

export async function GET() {
  const payload = await getPayloadClient();

  const posts = await payload.find({
    collection: "posts",
    draft: true,
  });

  return Response.json(posts);
}
