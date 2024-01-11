import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});

export const TodoModel = mongoose.model("TodoModel", todoSchema);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  todo: [],
});

export const UserModel = mongoose.model("UserModel", userSchema);

export const connectMongoDB = async () => {
  const url =
    "mongodb+srv://barath0121:nFuAeH5md3xWuqNt@cluster0.a8ppubw.mongodb.net/TodoModel?retryWrites=true&w=majority";
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB...");
  } catch (error) {
    console.error("Error while connection to connectMongoDB: ", error);
  }
};
