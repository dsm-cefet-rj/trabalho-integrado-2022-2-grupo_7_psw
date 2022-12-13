import express from "express";
import UserController from "../controllers/userController.js";
import passport from "passport";

const router = express.Router();

router
  .get("/user", UserController.getAllUser)
  .get("/user/search", UserController.getByEmail)
  .get("/user/:id", UserController.getById)
  .post("/user", UserController.createUser)
  .put("/user/:id", UserController.updateUser)
  .delete("/user/:id", UserController.deleteUser)
  .post(
    "/login",
    passport.authenticate("local", {
      failureRedirect: "/login-failure",
      successRedirect: "login-success",
    }),
    UserController.loginUser
  );

export default router;
