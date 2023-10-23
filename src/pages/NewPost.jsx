import axios from 'axios';
import React, { useState,useEffect } from 'react';

function PostForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    budget: '',
    skillsRequired: [],
    deadline: '',
    location: '',
    isRemote: false,
  });
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
	axios
		.get('http://localhost:5555/posts')
		.then((res)=>{
			setPosts(res.data.data);
		})
		.catch((error)=>{
			console.log(error)
		})
  },[])
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  const handleSkillsChange = (event) => {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: [...formData[name], value],
    });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here or pass the form data to a parent component
    // for further processing, like making an API request to create the post.
  }

  return (
    <div>
      <h2>Create a New Job Post</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Budget:
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Skills Required:
          <select
            name="skillsRequired"
            multiple
            value={formData.skillsRequired}
            onChange={handleSkillsChange}
            required
          >
            <option value="Skill1">Skill1</option>
            <option value="Skill2">Skill2</option>
            <option value="Skill3">Skill3</option>
            {/* Add more skill options as needed */}
          </select>
        </label>
        <br />

        <label>
          Deadline:
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Remote:
          <input
            type="checkbox"
            name="isRemote"
            checked={formData.isRemote}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default PostForm;
