import express from "express";
import { Post } from "../models/post.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(201).json({
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.status(201).json({
      count: post.length,
      data: post,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.description ||
      !req.body.category ||
      !req.body.budget ||
      !req.body.skillsRequired ||
      !req.body.deadline
    ) {
      return res.status(400).send({
        message: "please fill all the required details",
      });
    }
    const { id } = req.params;

    const result = await Post.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Post Not Found" });
    }

    return res.status(200).send({ message: "Post Updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Post.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Post Not Found" });
    }

    return res.status(200).send({ message: "Post deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
