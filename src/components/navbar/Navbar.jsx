import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "./586273b931349e0568ad89df.png";

export default function Navbar() {
  const navigat = useNavigate();
  const signuphandler = () => {
    navigat("/welcome");
  };
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    setVisible(!visible);
  };
  return (
    <>
      {!visible ? (
        <Link to="/" className="">
          <img
            className=" absolute m-2 h-[35px] w-[35px]"
            src={logo}
            alt="sdfg"
          />
        </Link>
      ) : (
        ""
      )}
      <div onClick={handleClick} className="burger" id="burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div
        className={`navbar ${isOpen ? "h_nav_resp" : ""} flex justify-between`}
      >
        <div className="left_side text-xl w-[60%] sm:w-[50%] lg:w-[45%]">
          <ul
            className={`ula ${
              !visible ? "v_nav_resp" : ""
            } flex justify-between`}
          >
            <Link to="/" className=" p-2 ml-5">
              <img className="logo h-[35px] w-[35px]" src={logo} alt="sdfg" />
            </Link>
            <Link
              to="/DevIT"
              className=" li text-purple-200 hover:text-purple-500"
            >
              Development & IT
            </Link>
            <Link
              to="/Design"
              className=" li text-purple-200 hover:text-purple-500"
            >
              Design & Creation
            </Link>
          </ul>
        </div>
        <div
          className={`right_side ${
            !visible ? "v_nav_resp" : ""
          } flex items-center mr-5`}
        >
          <div className="log_in text-xl">
            <li className=" text-purple-200 group cursor-pointer list-none px-5 hover:text-purple-500">
              log in
              <ul className=" absolute hidden rounded-lg group-hover:block bg-purple-800 py-2 px-8 space-y-1">
                <Link to="/Login">
                  <li className=" text-sm py-1 text-white">FreeLancer</li>
                </Link>
                <Link to="/ClientLog">
                  <li className=" text-sm py-1 text-white">Client</li>
                </Link>
              </ul>
            </li>
          </div>
          <div className="up">
            <button
              className=" py-2 px-5 rounded-full bg-purple-600 text-white hover:bg-purple-700 hover:text-purple-100"
              onClick={signuphandler}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
