// src/RegistrationForm.js
import React, { useState } from "react";
import './style.css'

function RegistrationForm() {
  // Define state variables for form fields
  const [formData, setFormData] = useState({
    // Define initial values for your form fields here
    username: '',
    password: '',
    email: '',
    // ...other form fields
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the form data to the server for validation
    const response = await fetch('http://localhost:3000/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("registration success")
    } else {
      console.log(response)
    }
  };


  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
      <input
  type="text"
  name="username"
  value={formData.username}
  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
/>

<input
  type="password"
  name="password"
  value={formData.password}
  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
/>

<input
  type="email"
  name="email"
  value={formData.email}
  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
/>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
