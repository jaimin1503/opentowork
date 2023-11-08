import DevIT from "./components/D_IT/DevIT";
import Home from "./components/home/Home";
import Welcome from "./components/welcome/Welcome";
import { Routes, Route } from "react-router-dom";
import Design from "./components/design/Design";
import Post from "./components/allposts/Post";
import FreeLanceUser from "./components/freelancer/FreeLanceUser";
import ClientUser from "./components/client/ClientUser";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/DevIT" element={<DevIT />}></Route>
        <Route path="/Design" element={<Design />}></Route>
      </Routes>
      <Post />
      <FreeLanceUser />
      <ClientUser />
    </div>
  );
}

export default App;
