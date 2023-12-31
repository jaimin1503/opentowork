import express from "express";
import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { createSecretToken } from "../SectetTocken.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (
      !req.body.username ||
      !req.body.email ||
      !req.body.password ||
      !req.body.first_name ||
      !req.body.last_name
    ) {
      return res.status(400).send({
        message: "please fill all the required details",
      });
    }
    const hash = await bcrypt.hash(req.body.password, 10);
    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password: hash,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      profile_picture: req.body.profile_picture,
      description: req.body.description,
      skills: req.body.skills,
      location: req.body.location,
      hourly_rate: req.body.hourly_rate,
    };

    const user = await User.create(newUser);
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    return res.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).json({
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    if (!req.body.username) {
      return res.status(400).send({
        message: "Please provide a username for login.",
      });
    }

    if (!req.body.password) {
      return res.status(400).send({
        message: "Please provide a password for login.",
      });
    }

    const { username, password } = req.body;

    // Check if the user exists based on username or email
    const user = await User.findOne({ $or: [{ username }] });

    if (!user) {
      return res.status(404).send({
        message: "User not found. Please check your username or email.",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).send({
        message: "Invalid Username or password. Please try again.",
      });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    return res.status(200).send({
      message: "Login successful",
      user: user,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.get("/logout", (req, res) => {
  res.send("Logout Successfully");
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(201).json({
      count: user.length,
      data: user,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.username ||
      !req.body.email ||
      !req.body.first_name ||
      !req.body.last_name ||
      !req.body.description ||
      !req.body.location ||
      !req.body.skills ||
      !req.body.hourly_rate
    ) {
      return res.status(400).send({
        message: "Please fill all the required details",
      });
    }

    const { id } = req.params;
    const existingUser = await User.findById(id);

    if (!existingUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    // Hash password if updated
    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashedPassword;
    }

    // Update profile picture only if a new URL is provided
    if (req.body.profile_picture) {
      existingUser.profile_picture = req.body.profile_picture;
    }

    // Update other details
    existingUser.username = req.body.username;
    existingUser.email = req.body.email;
    existingUser.first_name = req.body.first_name;
    existingUser.last_name = req.body.last_name;
    existingUser.description = req.body.description;
    existingUser.location = req.body.location;
    existingUser.skills = req.body.skills;
    existingUser.hourly_rate = req.body.hourly_rate;

    await existingUser.save();

    return res.status(200).send({ message: "User Updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await User.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "User Not Found" });
    }

    return res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
