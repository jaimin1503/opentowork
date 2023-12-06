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
import clientRoute from "./routes/clientRoute.js";
import { Post } from "./models/post.js";
import { Client } from "./models/client.js";
import { clientVerification } from "./middlewares/AuthMiddleware.js";
import { userVerification } from "./middlewares/AuthFreelancer.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
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

app.post("/", clientVerification);
app.get("/", userVerification);

app.use("/posts", postsRoute);
app.use("/users", usersRoute);
app.use("/clients", clientRoute);

app.post("/clients/:id/posts", async (req, res) => {
  const { id } = req.params;
  try {
    const client = await Client.findById(id);
    if (!client) {
      return res.status(404).json({ error: "User not found." });
    }
    if (
      !req.body.title ||
      !req.body.description ||
      !req.body.category ||
      !req.body.budget ||
      !req.body.skillsRequired
      // !req.body.deadline
    ) {
      return res.status(400).send({
        message: "please fill all the required details",
      });
    }
    const newPost = {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      budget: req.body.budget,
      skillsRequired: req.body.skillsRequired,
      location: req.body.location,
      deadline: req.body.deadline,
      // status: req.body.status,
    };
    const post = await Post.create(newPost);
    client.posts.push(post);
    await post.save();
    await client.save();
    return res.status(201).send(post);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

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
