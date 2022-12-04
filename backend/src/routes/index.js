import express from "express";
import news from "./newsRoutes.js";
import users from "./userRoutes.js";
import reviews from "./reviewsRoutes.js";
import api from "./apiRoutes.js";
import gamelists from "./gameListRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "teste de node" });
  });

  app.use(express.json(), news, users, reviews, api, gamelists);
};

export default routes;
