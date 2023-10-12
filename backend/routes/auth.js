const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');


// Create a User using: POST "/api/auth/". Doesn't require Auth
router.post('/',[
	body('email','Enter a valid email').isEmail(),
	body('password','Enter a strong password').isLength({min:6})
], (req, res)=>{ 
    const result = validationResult(req);
  if (result.isEmpty()) {
    return res.send(`Hello, ${req.body.username}!`);
}
res.send({ errors: result.array() });
User.create({
	username: req.body.username,
	email: req.body.email,
	password: req.body.password
}).then(user => res.json(user))
} )

module.exports = router