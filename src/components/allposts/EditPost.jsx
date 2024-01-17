import React, { useState, useMemo, useEffect } from "react";
import "../Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../Spinner";
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
import Navlogged from "../navbar_logged/Navlogged";

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

function EditPost() {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    if (id) {
      // Proceed with the request
      axios
        .get(`https://opnetowork.onrender.com/posts/${id}`)
        .then((res) => {
          const postData = res.data.data;
          setPost(postData);
          setFormData({
            title: postData.title,
            description: postData.description,
            category: postData.category,
            budget: postData.budget,
            deadline: postData.deadline,
          });
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      console.error("Please fill all the required details");
      setLoading(false);
    }
  }, [id]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    budget: "",
    deadline: "",
  });
  const [location, setLocation] = useState(null);
  const options = useMemo(() => countryList().getData(), []);

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const changeHandler = (selectedOption) => {
    setLocation(selectedOption);
  };

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFormSubmit = (event) => {
    const locationValue = location ? location.label : "";
    event.preventDefault();
    setLoading(true);
    axios
      .put(`http://localhost:5555/posts/${post._id}`, {
        ...formData,
        location: locationValue,
        skillsRequired: personName,
      })
      .then(() => {
        setLoading(false);
        navigate("/AllPosts");
      })
      .catch((error) => {
        setLoading(false);
        alert("Arror occured");
        console.log(error);
      });
  };

  return (
    <div className="gradient_home">
      <Navlogged />
      <div className=" h-full w-full flex justify-center items-center py-10">
        {loading ? <Spinner /> : ""}
        <div className=" flex justify-center items-center pt-5 bg-purple-100 sm:w-[90vw] lg:w-[50vw] border-2 rounded-xl border-purple-600">
          <div className="w-full max-w-md mx-auto my-5">
            <div className=" flex justify-center items-center">
              <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-bold">Title:</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-purple-300 rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold">Description:</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  className="w-full border border-purple-300 rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold">Category:</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-purple-300 rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold">Budget:</label>
                <input
                  type="number"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-purple-300 rounded px-3 py-2"
                />
              </div>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-chip-label">Skills</InputLabel>
                <Select1
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={personName}
                  onChange={handleChange}
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

              <div className="mb-4">
                <label className="block text-sm font-bold pt-4">
                  Deadline:
                </label>
                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-purple-300 rounded px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="">Location:</label>
                <Select
                  options={options}
                  value={location}
                  onChange={changeHandler}
                />
              </div>

              <div className=" flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-purple-600 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-700 hover:text-purple-100"
                >
                  Update Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
