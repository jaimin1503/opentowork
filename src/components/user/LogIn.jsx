import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../Spinner";

export default function LogIn() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState(""); // State to store error messages
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    setLoading(true);
    if (id) {
      // Proceed with the request
      axios
        .get(`http://localhost:5555/users/${id}`)
        .then((res) => {
          setUser(res.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      console.error("Invalid or missing user username");
      setLoading(false);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    axios
      .post("http://localhost:5555/users/login", formData) // Use POST for sending login data
      .then(() => {
        navigate(`/FreeLancer/${user._id}`);
      })
      .catch((error) => {
        if (error.response && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError("An error occurred during login.");
        }
        console.log(error);
      });
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex justify-center items-center h-screen">
          <form className="w-64" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="w-full border rounded py-2 px-3"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full border rounded py-2 px-3"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
