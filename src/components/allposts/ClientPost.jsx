import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Spinner";
import { FaMapMarker } from "react-icons/fa";
import Navlogged from "../navbar_logged/Navlogged";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ClientPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/clients/${id}/posts`)
      .then((res) => {
        setPosts(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);
  return (
    <div>
      <Navlogged />
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {posts.map((post) => {
            return (
              <div key={post._id}>
                <div className=" cursor-pointer max-w-[60vw] min-h-[35vh] border-2 rounded-xl border-purple-300 m-auto mt-5 hover:bg-purple-50">
                  <div className="row1_post flex justify-between">
                    <div className=" p-5 text-xl font-bold tracking-wider">
                      -{post.title}
                    </div>
                    <div>
                      <Link to={`/post/${post._id}`}>
                        <div className="edit_profile border-[2px] rounded-full border-[#9333ea] cursor-pointer m-5">
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
                              stroke="#9333ea"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                              stroke="#9333ea"
                              strokeWidth="2"
                            />
                            <path
                              d="M18.4332 13.8485C18.7685 13.4851 18.9362 13.3035 19.1143 13.1975C19.5442 12.9418 20.0736 12.9339 20.5107 13.1765C20.6918 13.2771 20.8646 13.4537 21.2103 13.8067C21.5559 14.1598 21.7287 14.3364 21.8272 14.5214C22.0647 14.9679 22.0569 15.5087 21.8066 15.9478C21.7029 16.1298 21.5251 16.3011 21.1694 16.6437L16.9378 20.7194C16.2638 21.3686 15.9268 21.6932 15.5056 21.8577C15.0845 22.0222 14.6214 22.0101 13.6954 21.9859L13.5694 21.9826C13.2875 21.9752 13.1466 21.9715 13.0646 21.8785C12.9827 21.7855 12.9939 21.6419 13.0162 21.3548L13.0284 21.1988C13.0914 20.3906 13.1228 19.9865 13.2807 19.6232C13.4385 19.2599 13.7107 18.965 14.2552 18.375L18.4332 13.8485Z"
                              stroke="#9333ea"
                              strokeWidth="2"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className=" p-3">{post.description}</div>
                  <div className="m-3 flex">
                    {post.skillsRequired.map((skill) => {
                      return (
                        <div key={skill} className="mx-2">
                          <div className="px-5 py-1 border-2 rounded-full border-purple-200 bg-purple-100 max-w-32 flex justify-center items-center text-sm">
                            {skill}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="p-3">
                    <div className="budget">
                      Est. Budget Rs. {post.budget}
                      <p className="deadline text-xs text-gray-400">
                        -posted on {post.deadline.substring(0, 10)}
                      </p>
                    </div>
                  </div>
                  <div className="p-3 flex items-center">
                    <FaMapMarker size={14} color="red" />
                    <p className="px-1">{post.location}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
