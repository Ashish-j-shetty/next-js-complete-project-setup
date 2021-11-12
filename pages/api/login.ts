import { NextApiResponse, NextApiRequest } from "next";
import jwt from "jsonwebtoken";

const KEY = "samplekey";

export default function login(req: NextApiRequest, res: NextApiResponse) {
  if (!req.body) {
    res.statusCode = 404;
    res.end("Error");
    return;
  }

  const { username, password } = req.body;

  res.json({
    token: jwt.sign(
      {
        username,
        admin: username === "admin" && password === "password",
      },
      KEY
    ),
  });
}
