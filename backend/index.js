import express from "express";
import session from "express-session";
import passport from "passport";
import { PORT, mongoURL } from "./config.js";
import mongoose from "mongoose";
import postsRoute from "./routes/postsRoute.js";
import usersRoute from "./routes/usersRoute.js";
import cors from "cors";
import LocalStrategy from "passport-local";
import { User } from "./models/user.js";

const app = express();
app.use(express.json());

app.use(cors());
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/posts", postsRoute);
app.use("/users", usersRoute);

app.get(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    // failureFlash: true,
  })
);

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("connected to database");
    app.listen(PORT, () => {
      console.log("listning on port 5555");
    });
  })
  .catch((error) => {
    console.log(error);
  });
