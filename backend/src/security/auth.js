import passport from "passport";
import {Strategy as JwtStrategy} from "passport-jwt"
import { ExtractJwt } from "passport-jwt";
// import User from "../models/User";
import jwt from "jsonwebtoken";
// import app from "../app";

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET

// export const auth1 = (User) => {

//     passport.use(new JwtStrategy(opts, function (jwt_payload, done){
//         User.findOne({_id: jwt_payload._id}, (err, user) => {
//             if(err){
//                 return done(err, false);
//             }else if (user) {
//                 return done(null, user);
//             }else{
//                 return done(null, false);
//             }
//         })
//     }))

//     // passport.serializeUser(function (user, done) {
//     //     done(null, user._id)
//     // });

//     // passport.deserializeUser( function (id, done) {
//     //     User.findById(id, (err, user) => {
//     //         if(err){
//     //             return done(err);
//     //         }
//     //         done(null, user)
//     //     })
//     // })

//     // app.use(passport.initialize());
    
// }

export const getToken = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET, {expiresIn: 600000})
}

export const verifyUser = (next) => {
    // console.log("verifyer")
    passport.authenticate('jwt', {session: false})
    // next()
}
