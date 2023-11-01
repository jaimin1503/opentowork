import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: "string",
    unique: true,
    required: true,
  },
  email: {
    type: "string",
    unique: true,
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  first_name: {
    type: "string",
    required: true,
  },
  last_name: {
    type: "string",
    required: true,
  },
  // profile_picture: [
  //   {
  //     url: String,
  //     fileName: String,
  //   },
  // ],
  description: {
    type: "string",
    default: "",
  },
  skills: [
    {
      type: String,
      required: true,
    },
  ],
  location: {
    type: "string",
    default: "India",
  },
  hourly_rate: {
    type: "number",
    default: 0,
  },
});

userSchema.plugin(passportLocalMongoose);

export const User = mongoose.model("User", userSchema);
