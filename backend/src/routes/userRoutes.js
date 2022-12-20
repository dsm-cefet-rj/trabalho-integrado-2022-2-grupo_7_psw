import express from "express";
import UserController from "../controllers/userController.js";
import passport from "passport";
import { getToken } from "../security/auth.js";

const router = express.Router();

router
  .get("/user", UserController.getAllUser)
  .get("/user/search", UserController.getByEmail)
  .get("/user/:id", UserController.getById)
  .get("/findusername/:username", UserController.getByUsername)
  .post("/user", UserController.createUser)
  .put(
    "/user/:id",
    passport.authenticate("jwt", { session: false }),
    UserController.updateUser
  )
  .delete(
    "/user/:id",
    passport.authenticate("jwt", { session: false }),
    UserController.deleteUser
  )
  .post(
    "/login",
    passport.authenticate("local", { session: false }),
    (req, res) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: true,
        token: getToken({
          _id: req.user._id,
          level: req.user.level,
          username: req.user.username,
          email: req.user.email,
          bio: req.user.bio,
          pictureUrl: req.user.pictureUrl,
        }),
        status: "You are successfully logged in",
      });
    }
  );

export default router;
