import express from "express";
import news from "./newsRoutes.js";
import users from "./userRoutes.js";
import reviews from "./reviewsRoutes.js";
import api from "./apiRoutes.js";
import gamelists from "./gameListRoutes.js";
import passport from "passport";


const auth =  (req, res, next) => {
  console.log(req.user)
  if(!req.user) {
    var err = new Error("You are not authenticated!");
    err.status = 403;
    next(err)
  }else{
    next();
  }
}

const routes = (app) => {
  app.use(passport.initialize())
  app.use(passport.session())
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "teste de node" });
  });

  app.use(express.json(), news, users, api);
  app.use(reviews, gamelists);
  app.use(auth)
};

export default routes;
