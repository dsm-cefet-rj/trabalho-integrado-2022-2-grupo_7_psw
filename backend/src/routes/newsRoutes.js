import express from "express";
import NewsController from "../controllers/newsController.js";

const router = express.Router();

//fazer rotas sempre da mais especifica pra menos especifica para evitar conflitos.
router
  .get("/news", NewsController.getAllNews)
  .get("/news/search", NewsController.getNewsByUser) //mais especifica
  .get("/news/:id", NewsController.getById) //menos especifica
  .post("/news", NewsController.createNew)
  .put("/news/:id", NewsController.updateNews)
  .delete("/news/:id", NewsController.deleteNews);

export default router;
