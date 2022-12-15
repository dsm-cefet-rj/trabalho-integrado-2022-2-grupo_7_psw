import { createRequire } from "module";
const require = createRequire(import.meta.url);

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./src/models/User')

export const authenticate = () => {
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeuser());
    passport.deserializeUser(User.deserializeUser());

}

// export default authenticate;
