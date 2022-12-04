import express from "express";
import gameListController from "../controllers/gameListController.js";

const router = express.Router();

router
  .get("/getlist", gameListController.getAllGameLists)
  .get("/getsinglelist/:id", gameListController.getById)
  .post("/list/new", gameListController.createGameList)
  .put("/list/update/:id", gameListController.updateGameList)
  .delete("/list/:id", gameListController.deleteGameList);

export default router;
