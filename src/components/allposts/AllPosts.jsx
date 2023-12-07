import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Spinner";
import { FaMapMarker } from "react-icons/fa";
import "../../config";
// import NavUser from "../navbar_user/NavUser";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/posts?page=${page}`)
      .then((res) => {
        const newPosts = res.data.data;
        if (newPosts.length === 0) {
          setHasMore(false); // No more posts to load
        } else {
          setPosts(res.data.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [page]);

  const loadMorePosts = () => {
    if (hasMore) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      {/* <NavUser /> */}
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
          <div className="button_loadmore flex justify-center items-center my-3">
            <button
              className=" py-2 px-5 bg-purple-500 rounded-full hover:bg-purple-600"
              onClick={loadMorePosts}
              disabled={!hasMore}
            >
              {hasMore ? "Next Page" : "No More Posts"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
