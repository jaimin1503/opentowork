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
    index: true, // Add indexing for better query performance
  },
  budget: {
    type: Number,
    required: true,
    min: 0, // Add minimum value constraint
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
    default: Date.now, // Add a default date, if needed
  },
  location: {
    type: String,
    required: true,
    default: "India",
  },
});

export const Post = mongoose.model("Post", postSchema);
