import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  description: { type: String },
  games: { type: [Number] },
});

const gameLists = mongoose.model("gameLists", newsSchema);

export default gameLists;
