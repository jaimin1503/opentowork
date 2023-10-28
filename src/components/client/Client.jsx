import "../../index.css";
import { Link } from "react-router-dom";
import work_post from "./assets/pngwing.com-9.png";
import Navlogged from "../navbar_logged/Navlogged";

export default function Client() {
  return (
    <>
      <Navlogged />
      <div className=" min-h-screen">
        <div className="welcome flex justify-around items-center mt-10">
          <div className="welcome_text flex items-center flex-col mt-10">
            <h1
              className=" text-7xl font-bold"
              style={{ fontFamily: `'Dosis', 'sans-serif'` }}
            >
              Welcome, User
            </h1>
            <h1
              className=" text-7xl font-bold"
              style={{ fontFamily: `'Dosis', 'sans-serif'` }}
            >
              Post your first job
            </h1>
          </div>
          <div className="image w-[30vw] py-5">
            <img className=" w-[100%]" src={work_post} alt="" />
          </div>
        </div>
        <div className="button">
          <Link to="/NewPost">
            <button className=" bg-purple-600">Post New Job</button>
          </Link>
        </div>
      </div>
    </>
  );
}
