const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');


// Create a User using: POST "/api/auth/". Doesn't require Auth
router.post('/',[
	body('email','Enter a valid email').isEmail(),
	body('password','Enter a strong password').isLength({min:6})
], (req, res)=>{ 
    const formData = req.body;

  // Perform server-side validation here
  if (!isValid(formData)) {
    // If validation fails, send an error response
    res.status(400).json({ error: 'Validation failed' });
  } else {
    // If validation is successful, process the data and send a success response
    // Example: Save data to a database
    res.status(200).json({ message: 'Form data is valid' });
  }
} )

module.exports = router