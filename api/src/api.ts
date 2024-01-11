import express from "express";
const app = express();
const PORT = 3001;

// importing database
import { connectMongoDB } from "./models/db";

// initiating connection
connectMongoDB();

// importing routes
import todoRoute from "./routes/todo";

// using routes
app.use("/", todoRoute);

app.listen(PORT, () => {
  console.log("Server Hitting...");
});
