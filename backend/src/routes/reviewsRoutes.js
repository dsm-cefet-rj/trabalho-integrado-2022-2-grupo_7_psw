import express from "express";
import passport from "passport";
import ReviewsController from "../controllers/reviewsController.js";

const router = express.Router();

router
  .get("/getfavorite/:id", ReviewsController.getFavorite)
  .get("/getreview/:gameId/:userId", ReviewsController.getByGameIdAndUserId)
  .get("/getreviewbyuser/:id", ReviewsController.getByUser)
  .get("/getreview", ReviewsController.getAllReviews)
  .get("/getsinglereview/:id", ReviewsController.getById)
  .post(
    "/review/new",
    passport.authenticate("jwt", { session: false }),
    ReviewsController.createReview
  )
  .put("/review/update/:id/:userid", ReviewsController.updateReview)
  .delete("/review/:id/:userid", ReviewsController.deleteReview);

export default router;
