"use client";

import { Post } from "@/payload-types";
import { useEffect, useState } from "react";

export default function ListPost() {
  const [posts, setPosts] = useState<{ docs: Post[] }>();

  useEffect(() => {
    fetch("/routes/get-posts", {
      next: {
        tags: ["posts"],
      },
      cache: "no-cache",
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
