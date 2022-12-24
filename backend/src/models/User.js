import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String },
  username: { type: String },
  email: { type: String },
  password: { type: String },
  level: { type: Number },
  bio: { type: String },
  pictureUrl: { type: String },
  friends: [{
    username: {type: String},
    pictureUrl: {type: String}
  }],
});

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("users", userSchema);

export default User;
