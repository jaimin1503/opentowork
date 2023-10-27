import express from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from "mongoose";
import postsRoute from "./routes/postsRoute.js";
import usersRoute from "./routes/usersRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/posts", postsRoute);
app.use("/users", usersRoute);

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
