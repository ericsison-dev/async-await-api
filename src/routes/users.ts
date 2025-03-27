import express from "express";
import { schema } from "../mongodb";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await schema.User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await schema.User.find();
    res.status(200).json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
});

export default router;
