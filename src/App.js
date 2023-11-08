import DevIT from "./components/D_IT/DevIT";
import Home from "./components/home/Home";
import Welcome from "./components/welcome/Welcome";
import { Routes, Route } from "react-router-dom";
import Design from "./components/design/Design";
import { Client, ClientLog, ClientSign } from "./components/client";
import { AllPosts, ClientPost, EditPost, NewPost } from "./components/allposts";
import {
  FreeLancer,
  EditProfile,
  LogIn,
  SignUp,
} from "./components/freelancer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/DevIT" element={<DevIT />}></Route>
        <Route path="/Design" element={<Design />}></Route>
        <Route path="/Client/:id/NewPost" element={<NewPost />}></Route>
        <Route path="/FreeLancer/:id" element={<FreeLancer />}></Route>
        <Route path="/FreeLancer/edit/:id" element={<EditProfile />}></Route>
        <Route path="/AllPosts" element={<AllPosts />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Login" element={<LogIn />}></Route>
        <Route path="/Clientsign" element={<ClientSign />}></Route>
        <Route path="/Clientlog" element={<ClientLog />}></Route>
        <Route path="/Client/:id" element={<Client />}></Route>
        <Route path="/Client/:id/posts" element={<ClientPost />}></Route>
        <Route path="/post/:id" element={<EditPost />}></Route>
      </Routes>
    </div>
  );
}

export default App;
