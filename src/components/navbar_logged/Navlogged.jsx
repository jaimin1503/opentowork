import logo from "./assets/586273b931349e0568ad89df.png";
// import profile from "./assets/account_circle_FILL0_wght400_GRAD0_opsz24.png";
import saved from "./assets/favorite_FILL0_wght400_GRAD0_opsz24.png";
import notification from "./assets/notifications_FILL0_wght400_GRAD0_opsz24.png";

export default function Navlogged(props) {
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
            <li className=" cursor-pointer">
              <img
                className="w-8 h-8 object-cover rounded-full"
                src={props.profilepic}
                alt="profilepic"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
