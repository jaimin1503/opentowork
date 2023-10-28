import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Spinner";
import { FaMapMarker } from "react-icons/fa";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/posts")
      .then((res) => {
        setPosts(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {posts.map((post) => {
            return (
              <div key={post._id}>
                <div className=" cursor-pointer max-w-[60vw] min-h-[35vh] border-2 rounded-xl border-purple-300 m-auto mt-5 hover:bg-purple-50">
                  <div className=" p-5 text-xl font-bold tracking-wider">
                    -{post.title}
                  </div>
                  <div className=" p-3">{post.description}</div>
                  <div className="m-3 flex">
                    {post.skillsRequired.map((skill) => {
                      return (
                        <div className="mx-2">
                          <div className="px-5 border-2 rounded-full border-purple-200 bg-purple-100 w-24 flex justify-center items-center">
                            {skill}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="p-3">
                    <div className="budget">
                      Rs. {post.budget}
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
