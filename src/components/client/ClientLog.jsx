import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ClientLog() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // State to store error messages
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    axios
      .post("https://opnetowork.onrender.com/clients/login", formData, {
        withCredentials: true,
      }) // Use POST for sending login data
      .then((response) => {
        const client = response.data.client;
        navigate(`/Client/${client._id}`);
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
  const mystyle = {
    fontFamily: `Lobster`,
  };

  return (
    <div className="gradient_home">
      <h1 className="text-4xl text-white font-extralight p-4" style={mystyle}>
        OpenToWork
      </h1>
      <div className=" flex justify-center items-center w-screen h-screen">
        <div className=" pt-10 bg-purple-100 sm:w-[90vw] lg:w-[50vw] lg:h-[50vh] border-2 rounded-xl border-purple-600">
          <div className="flex justify-center items-center">
            <form className="w-64" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-semibold mb-4">Login</h2>
              {error && <div className="text-red-500 mb-4">{error}</div>}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full border rounded py-2 px-3 border-purple-300"
                  type="email"
                  name="email"
                  autoComplete="current-email"
                  value={formData.email}
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
                  className="w-full border rounded py-2 px-3 border-purple-300"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="text-center">
                <button
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
          <div className=" flex justify-center items-center">
            <p className="well-mt-5">
              Dont have an Opentowork account?{" "}
              <Link className="wel-text-purple-600" to="/Clientsign">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
