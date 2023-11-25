import ListPost from "@/components/list-post";
import styles from "./page.module.css";
import CreatePost from "@/components/create-post";
import getPayloadClient from "@/payload/payloadClient";

export default async function Home() {
  return (
    <main className={styles.main}>
      <ListPost />
      <CreatePost />
    </main>
  );
}
