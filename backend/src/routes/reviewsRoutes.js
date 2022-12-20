import express from "express";
import passport from "passport";
import ReviewsController from "../controllers/reviewsController.js";

const router = express.Router();

router
  .get("/getfavorite", ReviewsController.getFavorite)
  .get("/getreview", ReviewsController.getAllReviews)
  .get("/getsinglereview/:id", ReviewsController.getById)
  .post("/review/new", passport.authenticate('jwt', {session: false}), ReviewsController.createReview)
  .put("/review/update/:id", ReviewsController.updateReview)
  .delete("/review/:id", ReviewsController.deleteReview)

export default router;


