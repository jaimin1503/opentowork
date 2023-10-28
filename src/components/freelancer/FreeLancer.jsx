import "../../index.css";
import { Link } from "react-router-dom";
import work_post from "./assets/pngwing.com-9.png";
import Navlogged from "../navbar_logged/Navlogged";

export default function FreeLancer() {
  return (
    <div>
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
              className=" text-6xl font-extrabold"
              style={{
                fontFamily: `'Dosis', 'sans-serif'`,
              }}
            >
              Explore jobs that suits you
            </h1>
          </div>
          <div className="image w-[30vw] py-5">
            <img className=" w-[100%]" src={work_post} alt="" />
          </div>
        </div>
        <div className="button">
          <Link to="/AllPosts">
            <button className=" bg-purple-600">Explore Jobs</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
