import React, { useState, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import "./client.css";

export default function ClientSign() {
  const [formData, setFormData] = useState({
    CompanyName: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const [location, setLocation] = useState(null);
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (selectedOption) => {
    setLocation(selectedOption);
  };

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const [url, setUrl] = useState("");

  const handleImageUpload = async () => {
    try {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "h5veomwh");
      data.append("cloud_name", "dtuuyvimi");

      const response = await fetch(
        "http://api.cloudinary.com/v1_1/dtuuyvimi/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      if (!response.ok) {
        throw new Error(`Image upload failed with status: ${response.status}`);
      }

      const responseData = await response.json();
      setUrl(responseData.url);
      console.log(responseData.url);
    } catch (error) {
      console.error("Error while uploading image:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    const locationValue = location ? location.label : "";
    e.preventDefault();
    setLoading(true);
    axios
      .post(
        "http://localhost:5555/clients",
        {
          ...formData,
          location: locationValue,
          about: formData.about,
          profile_picture: url,
        },
        { withCredentials: true }
      )

      .then(() => {
        setLoading(false);
        navigate("/Clientlog");
      })
      .catch((error) => {
        setLoading(false);
        alert("Arror occured");
        console.log(error);
      });
  };
  const mystyle = {
    fontFamily: `Lobster`,
  };

  return (
    <div className=" ">
      <h1 className="text-4xl text-white font-extralight p-4" style={mystyle}>
        OpenToWork
      </h1>
      <div className=" h-[100vh] w-[100vw] flex justify-center items-center">
        {/* <Navlogged /> */}
        {loading ? <Spinner /> : ""}
        <div className=" flex justify-center items-center pt-5 bg-purple-100 sm:w-[90vw] lg:w-[50vw] border-2 rounded-xl border-purple-600">
          <div className="w-full max-w-md mx-auto my-5">
            <div className=" flex justify-center items-center">
              <h2 className="text-2xl font-bold mb-4 ">
                Sign up to hire talent
              </h2>
            </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className=" mb-4">
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  required
                  placeholder="First name"
                  className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className=" mb-4">
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  placeholder="Last name"
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className=" mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Work Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className=" mb-4">
                <input
                  type="password"
                  name="password"
                  placeholder="Password (8 or more Characters)"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className=" mb-4">
                <input
                  type="text"
                  name="CompanyName"
                  placeholder="Organization name"
                  value={formData.CompanyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className=" mb-4">
                <label>Profile Picture</label>

                <input
                  name="profile_picture"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <button
                  className=" bg-gray-200 border-2 px-1 py-1 rounded-full"
                  onClick={handleImageUpload}
                >
                  Upload Image
                </button>
              </div>

              <div className=" mb-4">
                <label>About your Organization</label>
                <textarea
                  name="about"
                  value={formData.about}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className="mb-4 mt-4">
                <Select
                  options={options}
                  value={location}
                  onChange={changeHandler}
                  required
                  className="border-purple-300 border rounded-md"
                />
              </div>

              <button
                className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:border-blue-300 ml-[40%]"
                type="submit"
              >
                Sign Up
              </button>
            </form>
            <div className=" flex justify-center items-center">
              <p className="well-mt-5">
                Already have an account?{" "}
                <Link className="wel-text-purple-600" to="/Clientlog">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
