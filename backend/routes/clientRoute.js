import express from "express";
import { Client } from "../models/client.js";
import bcrypt from "bcrypt";
import { createSecretToken } from "../SectetTocken.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (
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
    const newClient = {
      CompanyName: req.body.CompanyName,
      email: req.body.email,
      password: hash,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      profile_picture: req.body.profile_picture,
      about: req.body.about,
      location: req.body.location,
    };

    const client = await Client.create(newClient);
    const token = createSecretToken(client._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    return res.status(201).send(client);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const clients = await Client.find({});
    res.status(201).json({
      count: clients.length,
      data: clients,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    if (!req.body.email) {
      return res.status(400).send({
        message: "Please provide an email for login.",
      });
    }

    if (!req.body.password) {
      return res.status(400).send({
        message: "Please provide a password for login.",
      });
    }

    const { email, password } = req.body;

    // Check if the user exists based on username or email
    const client = await Client.findOne({ $or: [{ email }] });

    if (!client) {
      return res.status(404).send({
        message: "User not found. Please check your email.",
      });
    }

    const passwordMatch = await bcrypt.compare(password, client.password);

    if (!passwordMatch) {
      return res.status(401).send({
        message: "Invalid email or password. Please try again.",
      });
    }
    const token = createSecretToken(client._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    return res.status(200).send({
      message: "Login successful",
      client: client,
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
    const client = await Client.findById(id);
    res.status(201).json({
      count: client.length,
      data: client,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.email ||
      !req.body.password ||
      !req.body.first_name ||
      !req.body.last_name
    ) {
      return res.status(400).send({
        message: "please fill all the required details",
      });
    }
    const { id } = req.params;

    const result = await Client.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "User Not Found" });
    }

    return res.status(200).send({ message: "User Updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Client.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "User Not Found" });
    }

    return res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id/posts", async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findById(id).populate("posts");
    res.status(201).json({
      count: client.posts.length,
      data: client.posts,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
