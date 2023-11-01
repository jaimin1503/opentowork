import logo from "./assets/586273b931349e0568ad89df.png";
import profile from "./assets/account_circle_FILL0_wght400_GRAD0_opsz24.png";
import saved from "./assets/favorite_FILL0_wght400_GRAD0_opsz24.png";
import notification from "./assets/notifications_FILL0_wght400_GRAD0_opsz24.png";
import { Link } from "react-router-dom";

export default function Navlogged() {
  return (
    <div>
      <div className="navbar flex justify-between">
        <div className="left_navbar w-[20%]">
          <ul className=" list-none flex justify-around py-2 items-center">
            <li className=" cursor-pointer logo w-8 h-8">
              <img src={logo} alt="logo" />
            </li>
            <li className=" cursor-pointer">Jobs</li>
            <li className=" cursor-pointer">Talent</li>
          </ul>
        </div>
        <div className="right_navbar w-[40%]">
          <ul className="flex justify-around list-none  items-center py-2 ">
            <li className=" flex items-center">
              {" "}
              {/* <img className=" absolute z-10" src={search} alt="" /> */}
              <input
                className=" relative rounded-full border-2 p-1 pl-5 pr-8 "
                placeholder="Search"
                type="text"
              />
            </li>
            <li className=" cursor-pointer">
              <img src={notification} alt="" />
            </li>
            <li className=" cursor-pointer">
              <img src={saved} alt="" />
            </li>
            <Link to={`/FreeLancer/654220e2daa7b9a2b512aa58`}>
              <li className=" cursor-pointer">
                <img src={profile} alt="" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
