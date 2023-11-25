import ListPost from "@/components/list-post";
import styles from "./page.module.css";
import CreatePost from "@/components/create-post";
import getPayloadClient from "@/payload/payloadClient";

export default async function Home() {
  const getPosts = await getPayloadClient();

  const posts = await getPosts.find({
    collection: "posts",
  });

  return (
    <main className={styles.main}>
      {posts.docs.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <p>{post.updatedAt}</p>
          <p>{post.createdAt}</p>
        </div>
      ))}
      {/* <ListPost /> */}
      <CreatePost />
    </main>
  );
}
