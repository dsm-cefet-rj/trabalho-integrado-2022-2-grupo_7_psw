import express from "express";
import gameListController from "../controllers/gameListController.js";

const router = express.Router();

router
  .get("/getreview", gameListController.getAllReviews)
  .get("/getsinglereview/:id", gameListController.getById)
  .post("/review/new", gameListController.createReview)
  .put("/review/update/:id", gameListController.updateReview)
  .delete("/review/:id", gameListController.deleteReview);

export default router;
