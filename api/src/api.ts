import express from "express";
const app = express();
app.use(express.json());
const PORT = 3001;

// importing database
import { connectMongoDB } from "./models/db";

// initiating connection
connectMongoDB();

// importing routes
import todoRoute from "./routes/todo";
import authRoute from "./routes/auth";

// using routes
app.use("/", todoRoute);
app.use("/", authRoute);

app.listen(PORT, () => {
  console.log("Server Hitting...");
});
