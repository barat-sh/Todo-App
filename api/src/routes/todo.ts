import express from "express";
const router = express.Router();

// importing database
import { TodoModel } from "../models/db";

// creating routes
router.get("/", await(req, res) => {
  const listOfTodo = await TodoModel.find();
  res.send(listOfTodo);
});

router.post("/addtodo", await(req,res)=>{
  const {title, description} = req.body;
  const todo = {
    title: title,
    description: description,
    required: false
  }
})



export default router;
