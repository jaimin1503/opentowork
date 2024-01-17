import React, { useState, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select1 from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Graphic Design",
  "Adobe Photoshop",
  "Web Design",
  "HTML5",
  "CSS3",
  "Java Script",
  "Web Development",
  "Word Press",
  "Adobe Illustrator",
  "PHP",
  "React",
  "Node Js",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const [location, setLocation] = useState(null);
  const options = useMemo(() => countryList().getData(), []);

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

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
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleSubmit = (e) => {
    const locationValue = location ? location.label : "";
    e.preventDefault();
    setLoading(true);
    axios
      .post(
        "https://opnetowork.onrender.com/users",
        {
          ...formData,
          location: locationValue,
          skills: personName,
          description: formData.description,
          hourly_rate: formData.hourly_rate,
          profile_picture: url,
        },
        { withCredentials: true }
      )
      .then(() => {
        setLoading(false);
        navigate("/Login");
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
    <div className="gradient_home">
      <h1 className="text-4xl text-white font-extralight p-4" style={mystyle}>
        OpenToWork
      </h1>
      <div className=" h-[100%] w-[100%] flex justify-center items-center">
        {/* <Navlogged /> */}
        {loading ? <Spinner /> : ""}
        <div className="my-5 flex justify-center items-center pt-5 bg-purple-100 sm:w-[90vw] lg:w-[50vw] border-2 rounded-xl border-purple-600">
          <div className="w-full max-w-md mx-auto my-5">
            <div className=" flex justify-center items-center">
              <h2 className="text-2xl font-semibold mb-4">
                Sign up to find work you love
              </h2>
            </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className=" mb-4">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className=" mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className=" mb-4">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  minLength={8}
                  placeholder="Password (8 or more Characters"
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className=" mb-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className=" mb-4">
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                  value={formData.last_name}
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
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-chip-label">Skills</InputLabel>
                <Select1
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={personName}
                  required
                  onChange={handleChange2}
                  className=" border border-purple-300 rounded-md"
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select1>
              </FormControl>

              <div className="mb-4 mt-4">
                <label htmlFor="">Location</label>
                <Select
                  options={options}
                  value={location}
                  onChange={changeHandler}
                  required
                  className=" border border-purple-300 rounded-md"
                />
              </div>

              <div className=" mb-4">
                <input
                  type="number"
                  name="hourly_rate"
                  placeholder="Hourly rate"
                  value={formData.hourly_rate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className=" flex justify-center items-center">
                <button
                  className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-400"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className=" flex justify-center items-center">
              <p className="well-mt-5">
                Already have an account?{" "}
                <Link className="wel-text-purple-600" to="/Login">
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
