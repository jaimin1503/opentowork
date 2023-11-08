import AllPosts from "./AllPosts";
import ClientPost from "./ClientPost";
import EditPost from "./EditPost";
import NewPost from "./NewPost";
import { Routes, Route } from "react-router-dom";

export default function Post() {
  return (
    <div>
      <Routes>
        <Route path="/Client/:id/NewPost" element={<NewPost />}></Route>
        <Route path="/post/:id" element={<EditPost />}></Route>
        <Route path="/Client/:id/posts" element={<ClientPost />}></Route>
        <Route path="/AllPosts" element={<AllPosts />}></Route>
      </Routes>
    </div>
  );
}
