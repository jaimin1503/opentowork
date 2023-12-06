import { Client } from "../models/client.js";
import jwt from "jsonwebtoken"; // Change from 'pkg' to 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config();

export const clientVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    // Use 'jwt.verify' directly
    if (err) {
      return res.json({ status: false });
    } else {
      const client = await Client.findById(data.id);
      if (client) return res.json({ status: true, client });
      else return res.json({ status: false });
    }
  });
};
