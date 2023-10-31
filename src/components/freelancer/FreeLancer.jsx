import React, { useState, useEffect } from "react";
import "../../index.css";
import { useParams } from "react-router-dom";
import Navlogged from "../navbar_logged/Navlogged";
import default_pic from "./assets/default_profile_picture.jpg";
import Spinner from "../Spinner";
import axios from "axios";

export default function FreeLancer() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/users/${id}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Navlogged />
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="border-2 border-purple-300 rounded-xl w-[70vw] h-[80vh] m-auto mt-10">
            <div className="profile_row1 flex items-center border-b-2 border-purple-300">
              <div className="profile_pic">
                <img
                  className="w-32 h-32 object-cover rounded-full m-10"
                  src={default_pic}
                  alt="Profile_pic"
                />
              </div>
              <div className="profile_info">
                <h1 className=" text-3xl font-bold py-2">{user.username}</h1>
                <h2 className=" text-xl text-gray-500 py-2">
                  -{user.location}
                </h2>
              </div>
            </div>
            <div className="profile_row2">
              <h1 className="text-3xl p-10">Medical Student</h1>
              <h2 className="px-10 text-justify text-gray-500">
                {user.description}
              </h2>
              <h2 className="p-10 font-bold"> &#8377;{user.hourly_rate}/hr</h2>
            </div>
            {/* <div className="mx-8 flex">
              {user.skills.map((skill) => {
                return (
                  <div key={skill} className="mx-2">
                    <div className="px-5 py-1 border-2 rounded-full border-purple-200 bg-purple-100 max-w-32 flex justify-center items-center text-sm">
                      {skill}
                    </div>
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
