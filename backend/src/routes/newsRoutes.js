import express from "express";
import passport from "passport";
import NewsController from "../controllers/newsController.js";
import passportCuston from 'passport-custom'

// const customStrategy = passportCuston.Strategy;

const router = express.Router();
// passport.use('level-admin', new customStrategy(
//   function(req, next) {
//     let token = req.headers.authorization.replace('Bearer ',''); 
//     if(jwtDecode(token).level == 1){
//       next()
//     }else{
//       next(null, false)
//     }
//   }
// ))

// passport.use('level-creator', new customStrategy(
//   function(req, next) {
//     let token = req.headers.authorization.replace('Bearer ',''); 
//     if(jwtDecode(token).level == 2 || jwtDecode(token).level == 1){
//       next()
//     }else{
//       next(err)
//     }
//   }
// ))

// passport.use('level-creator', new customStrategy(
//   function(req, next) {
//     let token = req.headers.authorization.replace('Bearer ',''); 
//     if(jwtDecode(token).level == 3 || jwtDecode(token).level == 1){
//       next()
//     }else{
//       next(null, false)
//     }
//   }
// ))



//fazer rotas sempre da mais especifica pra menos especifica para evitar conflitos.
router  
  .get("/news/search", NewsController.getNewsByUser) //mais especifica
  .get("/news/:id", NewsController.getById) //menos especifica
  .get("/news", NewsController.getAllNews)
  .post("/news", passport.authenticate('jwt', {session: false}), NewsController.createNew)
  .put("/news/:id", passport.authenticate('jwt', {session: false}), NewsController.updateNews)
  .delete("/news/:id", passport.authenticate('jwt', {session: false}), NewsController.deleteNews);

export default router;
