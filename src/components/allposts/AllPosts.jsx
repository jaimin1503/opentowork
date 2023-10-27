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
                <h1>${post.title}</h1>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
