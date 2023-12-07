import logo from "./assets/586273b931349e0568ad89df.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import profile from "./assets/profile.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

export default function Navlogged(props) {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      axios
        .post("http://localhost:5555/log", {}, { withCredentials: true })
        .then((res) => {
          setUser(res.data.user);
        })
        .catch((error) => {
          console.log(error);
        });

      // console.log(data.client.first_name);
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/");
  };
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
              <ul className="absolute hidden rounded-lg w-36 group-hover:block bg-purple-800 py-2 px-8 space-y-1">
                <Link to="/AllPosts">
                  <li className=" text-sm py-1 text-white">Browse Jobs</li>
                </Link>
                <Link to={props.myjobs}>
                  <li className=" text-sm py-1 text-white">My Jobs</li>
                </Link>
              </ul>
            </li>
            <li className=" cursor-pointer">Talent</li>
          </ul>
        </div>
        <div className="right_navbar w-1/5">
          <ul className="flex justify-around list-none  items-center py-2 ">
            <li className=" cursor-pointer">
              <NotificationsIcon className=" text-white" />
            </li>
            <li className=" cursor-pointer">
              <FaHeart className=" text-white" />
            </li>
            <li className="group cursor-pointer">
              {cookies.token ? (
                <img
                  className="w-8 h-8 object-cover rounded-full"
                  src={user.profile_picture ? user.profile_picture : profile}
                  alt="profilepic"
                />
              ) : (
                <img
                  className="w-8 h-8 object-cover rounded-full"
                  src={profile}
                  alt="profilepic"
                />
              )}
              <ul className="absolute hidden rounded-lg right-0 group-hover:block bg-purple-800 mr-10 py-2 px-8 space-y-1">
                <li onClick={Logout} className=" text-sm py-1 text-white">
                  Logout
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
