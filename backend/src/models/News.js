import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  id: { type: String },
  url: { type: String}, //url de imagem
  title: {type: String},
  subtitle: {type: String},
  contents: {type: mongoose.Schema.Types.Mixed}, //entra qualquer objeto
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users"},
  time: { type: Number}
});

const news = mongoose.model("news", newsSchema);

export default news;
