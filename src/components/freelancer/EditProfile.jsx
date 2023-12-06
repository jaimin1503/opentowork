import React, { useState, useMemo, useEffect } from "react";
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
import { useParams } from "react-router-dom";
import NavUser from "../navbar_user/NavUser";

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

export default function EditProfile() {
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

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const [image, setImage] = useState(null);
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    if (id) {
      // Proceed with the request
      axios
        .get(`http://localhost:5555/users/${id}`, { withCredentials: true })
        .then((res) => {
          setUser(res.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      // console.log(id);
      console.error("Invalid or missing username");
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
      .put(`http://localhost:5555/users/${id}`, {
        ...formData,
        location: locationValue,
        skills: personName,
        description: formData.description,
        hourly_rate: formData.hourly_rate,
        profile_picture: url,
      })
      .then(() => {
        setLoading(false);
        navigate(`/FreeLancer/${id}`);
      })
      .catch((error) => {
        setLoading(false);
        alert("Error occured");
        console.log(error);
      });
  };

  return (
    <div>
      <NavUser />
      {loading ? <Spinner /> : ""}
      <div className="w-full max-w-md mx-auto my-5">
        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className=" mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              placeholder={user.username}
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
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
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
            />
          </div>

          <div className=" mb-4">
            <label>Hourly Rate</label>
            <input
              type="number"
              name="hourly_rate"
              value={formData.hourly_rate}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <button
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
