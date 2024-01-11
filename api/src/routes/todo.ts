import express from "express";
const router = express.Router();

// importing database
import { TodoModel, UserModel } from "../models/db";

// creating route
router.get("/all", async (req, res) => {
  const listOfProblems = await TodoModel.find();
  res.json(listOfProblems);
});

router.post("/addtodo", async (req, res) => {
  const email = "barath@icloud.com";
  const alreadyExists = await UserModel.find({ email });
  const { title, description } = req.body;
  if (alreadyExists) {
    const newTodo = {
      title: title,
      description: description,
      status: false,
    };

    UserModel.findOne({ email }, (err: any, data: any) => {
      if (err) throw err;
      data.todo.push(newTodo);
      data.save();
    });
    // alreadyExists.todo.push(newTodo);
    // await alreadyExists.save();
  }
  res.send("onula");
});

export default router;
