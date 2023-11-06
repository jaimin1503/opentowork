import mongoose, { Schema } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const clientSchema = mongoose.Schema({
  first_name: {
    type: "string",
    required: true,
  },
  last_name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    unique: true,
    required: true,
  },
  CompanyName: {
    type: "string",
  },
  password: {
    type: "string",
    required: true,
  },
  profile_picture: {
    type: "string",
    default:
      "https://res.cloudinary.com/dtuuyvimi/image/upload/v1698836702/OpenToWork/tqlskn97ccqwvglon5ah.jpg",
  },
  about: {
    type: "string",
    default: "",
  },
  location: {
    type: "string",
    default: "India",
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

clientSchema.plugin(passportLocalMongoose);

export const Client = mongoose.model("Client", clientSchema);
