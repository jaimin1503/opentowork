import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import Spinner from "../Spinner";
import { useParams } from "react-router-dom";
import Navlogged from "../navbar_logged/Navlogged";

export default function EditClientProfile() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    CompanyName: "",
    email: "",
    password: "",
    about: "",
  });

  const [location, setLocation] = useState(null);
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (selectedOption) => {
    setLocation(selectedOption);
  };

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const [image, setImage] = useState(null);
  const [client, setClient] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    if (id) {
      axios
        .get(`http://localhost:5555/clients/${id}`, { withCredentials: true })
        .then((res) => {
          const clientData = res.data.data;
          setClient(clientData);
          setFormData({
            first_name: clientData.first_name,
            last_name: clientData.last_name,
            email: clientData.email,
            CompanyName: clientData.CompanyName,
            profile_picture: clientData.profile_picture,
            about: clientData.about,
            location: clientData.location,
          });
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      // console.log(id);
      console.error("Invalid or missing email");
      setLoading(false);
    }
  }, [id]);

  const [url, setUrl] = useState("");

  const handleImageUpload = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "h5veomwh");
    data.append("cloud_name", "dtuuyvimi");

    fetch("http://api.cloudinary.com/v1_1/dtuuyvimi/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
        console.log(data.url);
      })
      .catch((error) => {
        console.log(error);
      });
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
      .put(`http://localhost:5555/clients/${client._id}`, {
        ...formData,
        location: locationValue,
        about: formData.about,
        profile_picture: url,
      })
      .then(() => {
        setLoading(false);
        navigate(`/Client/${id}`);
      })
      .catch((error) => {
        setLoading(false);
        alert("Error occured");
        console.log(error);
      });
  };

  return (
    <div className=" ">
      <Navlogged />
      <div className=" h-full w-full flex justify-center items-center py-10">
        {loading ? <Spinner /> : ""}
        <div className=" flex justify-center items-center pt-5 bg-purple-100 sm:w-[90vw] lg:w-[50vw] border-2 rounded-xl border-purple-600 overflow-hidden">
          <div className="w-full max-w-md mx-auto my-5">
            <div className=" flex justify-center items-center">
              <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
            </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className=" mb-4">
                <label>First Name</label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className=" mb-4">
                <label>Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className=" mb-4">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className=" mb-4">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
                <label>Company name</label>
                <input
                  name="CompanyName"
                  value={formData.CompanyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className=" mb-4">
                <label>About your Organization</label>
                <textarea
                  name="about"
                  value={formData.about}
                  rows={5}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className="mb-4 mt-4">
                <label htmlFor="">Location</label>
                <Select
                  options={options}
                  value={location}
                  onChange={changeHandler}
                  required
                />
              </div>

              <div className=" flex justify-center items-center">
                <button
                  className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-urple-700 hover:text-purple-100 focus:outline-none focus:ring focus:border-purple-300"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
