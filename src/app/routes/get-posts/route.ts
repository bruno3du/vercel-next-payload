import getPayloadClient from "@/payload/payloadClient";
import { NextRequest } from "next/server";

export async function GET() {
  const payload = await getPayloadClient();

  const posts = await payload.find({
    collection: "posts",
    draft: true,
  });

  return Response.json(posts);
}
