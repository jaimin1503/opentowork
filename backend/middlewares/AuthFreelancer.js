import { User } from "../models/user.js";
import jwt from "jsonwebtoken"; // Change from 'pkg' to 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config();

export const userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    // Use 'jwt.verify' directly
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user) return res.json({ status: true, user });
      else return res.json({ status: false });
    }
  });
};
