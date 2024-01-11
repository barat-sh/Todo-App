import express from "express";
const router = express.Router();

// importing database
import { TodoModel, UserModel } from "../models/db";

// creating router
router.get("/data", async (req, res) => {
  const listofusers = await UserModel.find();
  res.send(listofusers);
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const user = {
    name: name,
    email: email,
    password: password,
  };
  const newuser = new UserModel(user);
  await newuser.save();
  res.send(user);
});

export default router;
