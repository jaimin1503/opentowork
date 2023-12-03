import { Client } from "../models/client";
import { jwt } from "jsonwebtoken";

export function userVerification(req, res) {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const client = await Client.findById(data.id);
      if (client) return res.json({ status: true, client: client.first_name });
      else return res.json({ status: false });
    }
  });
}
