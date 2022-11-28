import express from "express";
import ApiController from "../controllers/apiController.js";

const router = express.Router();

router
  .get("/api/date/:id", ApiController.getDate)
  .get("/api/creator/:id", ApiController.getCreator)
  .get("/api/general/:id", ApiController.getGeneral)
  .get("/api/cover/:id", ApiController.getCover)
  .get("/api/capa/:id", ApiController.getCapa)
  .get("/api/screenshot/:id", ApiController.getScreenshot)
  .get("/api/list/:id", ApiController.getList)
  .get("/api/query/:name/:id", ApiController.getQuery)
  .get("/api/count/:name", ApiController.getCount);

export default router;
