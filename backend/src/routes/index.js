import express from "express";
import news from "./newsRoutes.js";
import users from "./userRoutes.js";
import reviews from "./reviewsRoutes.js";
import api from "./apiRoutes.js";
import gamelists from "./gameListRoutes.js";
import passport from "passport";
import User from "../models/User.js";
// import { auth1, verifyUser } from "../security/auth.js";

// const auth =  (req, res, next) => {
//   console.log(req.user)
//   if(!req.user) {
//     var err = new Error("You are not authenticated!");
//     err.status = 403;
//     next(err)
//   }else{
//     next();
//   }
// }
// const verifyUser = (next) => {
//   // console.log("verifyer")
  
// }


const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ title: "You probably did the logout thing..." });
  });
  
  app.use(express.json(), users, api, gamelists, reviews);
  // auth1(User)
  // app.use(verifyUser)
  // app.use(passport.authenticate('jwt', {session: false}))
  app.use(news);
};

export default routes;
