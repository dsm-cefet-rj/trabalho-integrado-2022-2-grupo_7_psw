import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  id: { type: String },
  text_review: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users", require: true},
  rating: { type: Number },
  date: { type: String },
  game_id: { type: Number },
  favorite: { type: Boolean },
  status: { type: String },
  username: { type: String },
  profilePicture: { type: String },
});

const reviews = mongoose.model("reviews", newsSchema);

export default reviews;
