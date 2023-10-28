import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Spinner";

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
                <div className=" w-[60vw] h-[35vh] border-2 rounded-xl border-purple-300 m-auto mt-5">
                  <div className=" p-5 text-xl font-bold tracking-wider">
                    -{post.title}
                  </div>
                  <div className=" p-5">{post.description}</div>
                  <div className="m-5 flex">
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
                  <div className="p-5">
                    <div className="bodget">Rs. {post.budget}</div>
                    <div className="deadline"></div>
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
