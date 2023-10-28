import DevIT from "./components/D_IT/DevIT";
import Home from "./components/home/Home";
import Welcome from "./components/welcome/Welcome";
import { Routes, Route } from "react-router-dom";
import Design from "./components/design/Design";
import Client from "./components/client/Client";
import FreeLancer from "./components/freelancer/FreeLancer";
import NewPost from "./components/NewPost/NewPost";
import AllPosts from "./components/allposts/AllPosts";
import Chip from "./components/chip/Chip";
// import Spinner from "./components/Spinner";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/DevIT" element={<DevIT />}></Route>
        <Route path="/Design" element={<Design />}></Route>
        <Route path="/NewPost" element={<NewPost />}></Route>
        <Route path="/Client" element={<Client />}></Route>
        <Route path="/FreeLancer" element={<FreeLancer />}></Route>
        <Route path="/AllPosts" element={<AllPosts />}></Route>
      </Routes>
      <Chip />
    </div>
  );
}

export default App;
