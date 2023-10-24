import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  skillsRequired: [
    {
      type: String,
      required: true,
    },
  ],
  createdDate: {
    type: Date,
    default: Date.now,
  },
  deadline: {
    type: Date,
    required: true,
  },
});

export const Post = mongoose.model("Post", postSchema);
