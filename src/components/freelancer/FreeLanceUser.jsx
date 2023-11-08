import FreeLancer from "./FreeLancer";
import EditProfile from "./EditProfile";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { Routes, Route } from "react-router-dom";

export default function FreeLanceUser() {
  return (
    <div>
      <Routes>
        <Route path="/FreeLancer/:id" element={<FreeLancer />}></Route>
        <Route path="/FreeLancer/edit/:id" element={<EditProfile />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Login" element={<LogIn />}></Route>
      </Routes>
    </div>
  );
}
