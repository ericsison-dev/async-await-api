import express, { Request, Response } from "express";
import { schema } from "../db/mongodb";

const router = express.Router();

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

router.get("/:id", async (req, res) => {
  try {
    const user = await schema.User.findById(req.params.id);

    if (!user) {
      res.status(404).json({ message: "User not found!" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const user = await schema.User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const user = await schema.User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    await schema.User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted!" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
});

export default router;
