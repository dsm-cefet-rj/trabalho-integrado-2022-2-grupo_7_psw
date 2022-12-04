import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  id: { type: String },
  url: { type: String, require: true}, //url de imagem
  title: {type: String, require: true},
  subtitle: {type: String, require: true},
  contents: {type: mongoose.Schema.Types.Mixed, require: true}, //entra qualquer objeto
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users", require: true},
  time: { type: Number, require: true}
});

const news = mongoose.model("news", newsSchema);

export default news;
