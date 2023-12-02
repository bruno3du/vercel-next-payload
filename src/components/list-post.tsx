import getPayloadClient from "@/payload/payloadClient";

export const revalidate = 10;

export default async function ListPost() {
  const client = await getPayloadClient();
  const posts = await client.find({ collection: "posts" });

  return (
    <div>
      {posts?.docs?.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
