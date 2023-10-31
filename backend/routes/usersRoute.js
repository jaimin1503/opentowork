import express from "express";
import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import passport from "passport";
import LocalStrategy from "passport-local";

const router = express.Router();

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username })
      .exec()
      .then((user) => {
        if (!user) {
          return done(null, false, { message: "User not found" });
        }

        if (!bcrypt.compareSync(password, user.password)) {
          return done(null, false, { message: "Incorrect password" });
        }

        return done(null, user);
      })
      .catch((err) => {
        // Handle the error
        return done(err);
      });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

router.post("/", async (req, res) => {
  try {
    if (
      !req.body.username ||
      !req.body.email ||
      !req.body.password ||
      !req.body.first_name ||
      !req.body.last_name
    ) {
      return res.status(400).send({
        message: "please fill all the required details",
      });
    }
    const hash = await bcrypt.hash(req.body.password, 10);
    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password: hash,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      description: req.body.description,
      skills: req.body.skills,
      location: req.body.location,
      hourly_rate: req.body.hourly_rate,
    };
    const user = await User.create(newUser);
    return res.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/users/login",
  })
);

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).json({
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(201).json({
      count: user.length,
      data: user,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.username ||
      !req.body.email ||
      !req.body.password ||
      !req.body.first_name ||
      !req.body.last_name
    ) {
      return res.status(400).send({
        message: "please fill all the required details",
      });
    }
    const { id } = req.params;

    const result = await User.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "User Not Found" });
    }

    return res.status(200).send({ message: "User Updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await User.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "User Not Found" });
    }

    return res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
