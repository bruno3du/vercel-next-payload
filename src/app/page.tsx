import ListPost from "@/components/list-post";
import styles from "./page.module.css";
import CreatePost from "@/components/create-post";

export default async function Home() {
  return (
    <main className={styles.main}>
      <ListPost />
      <CreatePost />
    </main>
  );
}
