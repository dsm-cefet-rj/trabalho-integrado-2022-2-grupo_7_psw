import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  editora: { type: String, required: true },
  numeroPaginas: { type: Number, required: true },
});

const news = mongoose.model("news", newsSchema);

export default news;
