import React, { useState, useMemo } from "react";
import "../Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

function NewPost() {
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
      .post("http://localhost:5555/posts", {
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
    <div>
      <Navlogged />
      {loading ? <Spinner /> : ""}
      <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-16">
        <h2 className="text-2xl font-bold mb-4">Create a New Job Post</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold">Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              className="w-full border rounded px-3 py-2"
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
              className="w-full border rounded px-3 py-2"
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
              className="w-full border rounded px-3 py-2"
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

          <div className="mb-4">
            <label className="block text-sm font-bold pt-4">Deadline:</label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleInputChange}
              required
              className="w-full border rounded px-3 py-2"
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

          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewPost;
