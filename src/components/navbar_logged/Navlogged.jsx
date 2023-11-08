import logo from "./assets/586273b931349e0568ad89df.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import profile from "./assets/profile.svg";

export default function Navlogged(props) {
  return (
    <div>
      <div className="gradient_home navbar flex justify-between">
        <div className="left_navbar w-[20%]">
          <ul className=" list-none flex text-white justify-around py-2 items-center">
            <li className=" cursor-pointer logo w-8 h-8">
              <img src={logo} alt="logo" />
            </li>
            <li className="mr-4 group relative cursor-pointer">
              Services
              <ul className="absolute hidden rounded-lg w-36 group-hover:block bg-gray-100 py-2 px-8 space-y-1">
                <Link to="/AllPosts">
                  <li className=" text-sm py-1">Browse Jobs</li>
                </Link>
                <Link to={props.myjobs}>
                  <li className=" text-sm py-1">My Jobs</li>
                </Link>
              </ul>
            </li>
            <li className=" cursor-pointer">Talent</li>
          </ul>
        </div>
        <div className="right_navbar w-[40%]">
          <ul className="flex justify-around list-none  items-center py-2 ">
            <li className=" flex items-center">
              {" "}
              <input
                className="gradient_home relative rounded-full border-2 border-purple-900 text-white p-1 pl-5 pr-8 "
                placeholder="Search"
                type="text"
              />
            </li>
            <li className=" cursor-pointer">
              <NotificationsIcon className=" text-white" />
            </li>
            <li className=" cursor-pointer">
              <FaHeart className=" text-white" />
            </li>
            <li className=" cursor-pointer">
              <img
                className="w-8 h-8 object-cover rounded-full"
                src={!props.profilepic ? profile : props.profilepic}
                alt="profilepic"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
