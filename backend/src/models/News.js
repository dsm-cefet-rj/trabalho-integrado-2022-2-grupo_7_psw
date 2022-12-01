import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  id: { type: String },
  url: { type: String, required: true },
  title: {type: String, required: true},
  subtitle: {type: String},
  contents: {type: mongoose.Schema.Types.Mixed}, //entra qualquer objeto
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  time: { type: Number, required: true}
});

const news = mongoose.model("news", newsSchema);

export default news;
