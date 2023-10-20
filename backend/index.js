import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import User from "./models/user.js";
const passport = require("passport");
const localStrategy = require("passport-local");

const app = express();

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Hello");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`App is listning on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
