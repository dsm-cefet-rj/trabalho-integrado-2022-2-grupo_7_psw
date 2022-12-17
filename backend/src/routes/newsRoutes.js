import express from "express";
import passport from "passport";
import NewsController from "../controllers/newsController.js";

const router = express.Router();

//fazer rotas sempre da mais especifica pra menos especifica para evitar conflitos.
router  
  .get("/news/search", NewsController.getNewsByUser) //mais especifica
  .get("/news/:id", NewsController.getById) //menos especifica
  .get("/news", NewsController.getAllNews)
  .post("/news", passport.authenticate('jwt', {session: false}), NewsController.createNew)
  .put("/news/:id", passport.authenticate('jwt', {session: false}), NewsController.updateNews)
  .delete("/news/:id", passport.authenticate('jwt', {session: false}), NewsController.deleteNews);

export default router;
