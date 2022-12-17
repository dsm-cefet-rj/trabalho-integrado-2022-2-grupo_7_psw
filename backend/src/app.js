import express from "express";
import db from "./config/dbConnet.js";
import routes from "./routes/index.js";
import cors from "cors";
import encrypt from "./security/encrypt.mjs";
import UserController from "./controllers/userController.js";
import {Strategy as JwtStrategy} from "passport-jwt"
import { ExtractJwt } from "passport-jwt";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import crypto from "crypto";
import { Strategy as LocalStrategy } from "passport-local";
import users from "./models/User.js";
import MongoStore from "connect-mongo";
import User from "./models/User.js";

db.on("error", console.log.bind(console, "Erro de conexao"));
db.once("open", () => {
  console.log("Conexao com banco feita com sucesso");
});

const app = express();
app.use(express.json());
app.use(cors());


// passport.use(
  //   new LocalStrategy(function (username, password, cb) {
//     User
//       .findOne({ username: username })
//       .then((user) => {
//         // console.log("USER = " + user)
//         if (!user) {
//           return cb(null, false);
//         }

//         // Function defined at bottom of app.js
//         /*  const isValid = validPassword(password, user.hash, user.salt); */

//         if (true) {
//           return cb(null, user);
//         } 
//       })
//       .catch((err) => {
//         cb(err);
//       });
//   })
// );

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser())
// passport.serializeUser(function (user, cb) {
//   // console.log(user._id)
//   cb(null, user._id);
// });

// passport.deserializeUser(function (id, cb) {
//   users.findById(id, function (err, user) {
//     // console.log(user)
//     if (err) {
//       return cb(err);
//     }
//     cb(null, user);
//   });
// });

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET
console.log(opts)
passport.use(new JwtStrategy(opts, function (jwt_payload, done){
  console.log("jwt payload:" + jwt_payload);
  User.findOne({_id: jwt_payload._id}, (err, user) => {
      console.log("findoOne: " + user)
      if(err){
          return done(err, false);
      }else if (user) {
          return done(null, user);
      }else{
          return done(null, false);
      }
  })
}))




// app.use(
//   session({
//     //secret: process.env.SECRET,
//     secret: "some secret",
//     resave: false,
//     saveUninitialized: true,
//     store: MongoStore.create({
//       mongoUrl: process.env.MONGO_URL,
//     }),
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 24, // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
//     },
//   })
// );

app.use(passport.initialize());
// app.use(passport.session());

// app.use((req, res, next) => {
//   // console.log(req.user);
//   // console.log(req.session);
//   next();
// });

routes(app);


app.use(express.json());

export default app;
