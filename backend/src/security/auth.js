import passport from "passport";
import {Strategy as JwtStrategy} from "passport-jwt"
import { ExtractJwt } from "passport-jwt";
// import User from "../models/User";
import jwt from "jsonwebtoken";
// import app from "../app";

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET

export const getToken = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET, {expiresIn: 60*60})
}

export const verifyUser = (next) => {
    // console.log("verifyer")
    passport.authenticate('jwt', {session: false})
    // next()
}
