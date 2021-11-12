// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

export default function randomNumber(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);

  res.json({ number: Math.floor(Math.random() * 10) });
}
