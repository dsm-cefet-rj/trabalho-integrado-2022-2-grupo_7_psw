import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  id: { type: String },
  text_review: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  rating: { type: Number },
  date: { type: String },
  game_id: { type: Number },
  favorite: { type: Boolean },
});

const reviews = mongoose.model("reviews", newsSchema);

export default reviews;
