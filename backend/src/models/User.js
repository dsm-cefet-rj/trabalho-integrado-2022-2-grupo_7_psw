import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String },
    email: { type: String },
    password: { type: String },
    level: { type: Number },
    
  }
);

const users = mongoose.model("users", userSchema);

export default users;
