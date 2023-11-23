import getPayloadClient from "@/payload/payloadClient";

export async function POST(req: Request) {
  const data = await req.json();
  const payload = await getPayloadClient();

  const posts = await payload.create({
    collection: "posts",
    data: {
      body: data.body,
      title: data.title,
    },
  });

  return Response.json(posts);
}
