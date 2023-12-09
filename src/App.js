import DevIT from "./components/D_IT/DevIT";
import Home from "./components/home/Home";
import Welcome from "./components/welcome/Welcome";
import { Routes, Route } from "react-router-dom";
import Design from "./components/design/Design";
import {
  Client,
  ClientLog,
  ClientSign,
  EditClientProfile,
} from "./components/client";
import ProtectedRoute from "./components/ProtectedRoute";
import {
  AllPosts,
  ClientPost,
  EditPost,
  NewPost,
  DeletePost,
} from "./components/allposts";
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
        <Route
          path="/Client/:id/NewPost"
          element={<ProtectedRoute Component={NewPost} />}
        ></Route>
        <Route
          path="/FreeLancer/:id"
          element={<ProtectedRoute Component={FreeLancer} />}
        ></Route>
        <Route
          path="/Client/edit/:id"
          element={<ProtectedRoute Component={EditClientProfile} />}
        ></Route>
        <Route
          path="/FreeLancer/edit/:id"
          element={<ProtectedRoute Component={EditProfile} />}
        ></Route>
        <Route
          path="/AllPosts"
          element={<ProtectedRoute Component={AllPosts} />}
        ></Route>
        {/* <ProtectedRoute path="/AllPosts" element={<AllPosts />} /> */}
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Login" element={<LogIn />}></Route>
        <Route path="/Clientsign" element={<ClientSign />}></Route>
        <Route path="/Clientlog" element={<ClientLog />}></Route>
        <Route
          path="/Client/:id"
          element={<ProtectedRoute Component={Client} />}
        ></Route>
        <Route
          path="/Client/:id/posts"
          element={<ProtectedRoute Component={ClientPost} />}
        ></Route>
        <Route
          path="/post/:id"
          element={<ProtectedRoute Component={EditPost} />}
        ></Route>
        <Route
          path="/deletepost/:id"
          element={<ProtectedRoute Component={DeletePost} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
