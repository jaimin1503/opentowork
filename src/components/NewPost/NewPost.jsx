import React, { useState, useMemo } from "react";
import "../Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import Select from "react-select";
import countryList from "react-select-country-list";

function NewPost() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    budget: "",
    skillsRequired: [],
    deadline: "",
    // location: "",
  });
  const [location, setLocation] = useState(null);
  const options = useMemo(() => countryList().getData(), []);

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
  const handleSkillsChange = (event) => {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: [...formData[name], value],
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
      })
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("Arror occured");
        console.log(error);
      });
  };

  return (
    <div>
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

          <div className="mb-4">
            <label className="block text-sm font-bold">Skills Required:</label>
            <select
              name="skillsRequired"
              multiple
              value={formData.skillsRequired}
              onChange={handleSkillsChange}
              required
              className="w-full border rounded px-3 py-2"
            >
              <option value="Skill1">Skill1</option>
              <option value="Skill2">Skill2</option>
              <option value="Skill3">Skill3</option>
              {/* Add more skill options as needed */}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold">Deadline:</label>
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
