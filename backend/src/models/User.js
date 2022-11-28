import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String },
    nacionalidade: { type: String },
  },
  {
    versionKey: false, //versionamento de modelo, mas o ideal eh deixar default true.
  }
);

const users = mongoose.model("users", userSchema);

export default users;
