import React, { useState, useEffect } from "react";
import "./client.css";
import { useParams } from "react-router-dom";
import Navlogged from "../navbar_logged/Navlogged";
import default_pic from "../../assets/default_profile_picture.jpg";
import Spinner from "../Spinner";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Client() {
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    if (id) {
      // Proceed with the request
      axios
        .get(`http://localhost:5555/clients/${id}`)
        .then((res) => {
          setClient(res.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      console.error("Invalid or missing user email");
      setLoading(false);
    }
  }, [id]);

  const newpostpath = `/Client/${client._id}/NewPost`;

  return (
    <div className="  w-screen h-screen">
      <Navlogged myjobs={`/Client/${client._id}/posts`} />
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="border-2 border-purple-300 rounded-xl w-[70vw] h-[80vh] m-auto mt-10">
            <div className="profile_row1 flex justify-between p-5 border-b-2 border-purple-300">
              <div className="left_profile flex justify-center items-center">
                <div className="profile_pic">
                  <img
                    className="w-32 h-32 object-cover rounded-full m-10"
                    src={
                      !client.profile_picture
                        ? default_pic
                        : client.profile_picture
                    }
                    alt="Profile_pic"
                  />
                </div>
                <div className="profile_info">
                  <h1 className=" text-3xl font-bold py-2">
                    {client.first_name}
                  </h1>
                  <h2 className=" text-xl py-2">
                    -{client.location}
                  </h2>
                </div>
              </div>
              <div>
                <div className="edit_profile border-[2px] rounded-full border-[#D8B4FE] cursor-pointer">
                  <Link to={`/Client/edit/${client._id}`}>
                    <svg
                      className="m-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C8.12805 13.9629 11.2057 13.6118 14 14.4281"
                        stroke="#d6bcfa"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                        stroke="#d6bcfa"
                        strokeWidth="2"
                      />
                      <path
                        d="M18.4332 13.8485C18.7685 13.4851 18.9362 13.3035 19.1143 13.1975C19.5442 12.9418 20.0736 12.9339 20.5107 13.1765C20.6918 13.2771 20.8646 13.4537 21.2103 13.8067C21.5559 14.1598 21.7287 14.3364 21.8272 14.5214C22.0647 14.9679 22.0569 15.5087 21.8066 15.9478C21.7029 16.1298 21.5251 16.3011 21.1694 16.6437L16.9378 20.7194C16.2638 21.3686 15.9268 21.6932 15.5056 21.8577C15.0845 22.0222 14.6214 22.0101 13.6954 21.9859L13.5694 21.9826C13.2875 21.9752 13.1466 21.9715 13.0646 21.8785C12.9827 21.7855 12.9939 21.6419 13.0162 21.3548L13.0284 21.1988C13.0914 20.3906 13.1228 19.9865 13.2807 19.6232C13.4385 19.2599 13.7107 18.965 14.2552 18.375L18.4332 13.8485Z"
                        stroke="#d6bcfa"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="profile_row2">
              <h1 className="text-4xl font-bold p-10">
                {client.CompanyName}
              </h1>
              <h2 className=" max-w-[70%] px-10 text-justify">
                {client.about}
              </h2>
            </div>
            <div className="button_post flex justify-center text-sm items-center my-10 ">
              <Link to={newpostpath}>
                <button
                  className=" text-white py-2 px-5 bg-purple-500 rounded-full hover:scale-105 hover:bg-purple-600"
                  style={{ transition: "0.3s" }}
                >
                  Post new job
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
