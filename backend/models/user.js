import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: "string",
    unique: true,
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
  profile_picture: {
    type: "string",
    default:
      "https://res.cloudinary.com/dtuuyvimi/image/upload/v1698836702/OpenToWork/tqlskn97ccqwvglon5ah.jpg",
  },
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
