import express from "express";
import UserController from "../controllers/userController.js";
import passport from "passport";
import { getToken } from "../security/auth.js";


const router  = express.Router();

router
  .get("/user", passport.authenticate('jwt', {session: false}) ,UserController.getAllUser)
  .get("/user/search", UserController.getByEmail)
  .get("/user/:id", UserController.getById)
  .post("/user", UserController.createUser)
  .put("/user/:id", passport.authenticate('jwt', {session: false}), UserController.updateUser)
  .delete("/user/:id", UserController.deleteUser)
  .post("/login", passport.authenticate('local', {session: false}), (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      success: true,
      token: getToken({
        _id: req.user._id,
        level: req.user.level,
        username: req.user.username,
        email:req.user.email}),
      status: "You are successfully logged in"});
  });

export default router;
