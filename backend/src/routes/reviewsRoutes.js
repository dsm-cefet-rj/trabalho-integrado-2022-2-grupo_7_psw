import express from "express";
import ReviewsController from "../controllers/reviewsController.js";

const router = express.Router();

router
  .get("/getreview", ReviewsController.getAllReviews)
  .get("/getsinglereview/:id", ReviewsController.getById)
  .post("/review/new", ReviewsController.createReview)
  .put("/review/update/:id", ReviewsController.updateReview)
  .delete("/review/:id", ReviewsController.deleteReview);

export default router;
