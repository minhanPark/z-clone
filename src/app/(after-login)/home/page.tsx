import style from "./home.module.css";
import Tab from "@/app/(after-login)/home/_component/Tab";
import TabProvider from "@/app/(after-login)/home/_component/TabProvider";
import PostForm from "@/app/(after-login)/home/_component/PostForm";
import Post from "@/app/(after-login)/_component/Post";

export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
