"use client";

import { Post } from "@/payload-types";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";

export default function ListPost() {
  const [posts, setPosts] = useState<{ docs: Post[] }>();

  useEffect(() => {
    fetch("/routes/get-posts", {
      cache: "no-cache",
      next: {
        tags: ["posts"],
        revalidate: 10,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setPosts(data);
      });
  }, []);

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
