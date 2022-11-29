import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  id: { type: String },
  url: { type: String, required: true },
  title: {type: String, required: true},
  subtitle: {type: String},
  contents: {text: [{type: String}],
            images: [{type: String}],
            videos: [{type: String}]},
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  time: { type: Number, required: true}
});

const news = mongoose.model("news", newsSchema);

export default news;
