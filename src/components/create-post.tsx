"use client";

import { useForm } from "react-hook-form";

export default function CreatePost() {
  const { handleSubmit, register } = useForm({});

  const onSubmit = async (data: any) => {
    await fetch("/routes/create-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      next: {
        tags: ["posts"],
      },
    });
  };

  return (
    <div>
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" {...register("title")} />
        </div>

        <div>
          <label htmlFor="body">Body</label>
          <textarea id="body" {...register("body")} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
