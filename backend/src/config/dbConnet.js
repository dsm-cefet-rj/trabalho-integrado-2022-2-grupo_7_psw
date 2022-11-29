import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL);
// "mongodb+srv://grupo7:grupo777@cluster0.czeowxy.mongodb.net/drpper-node"

let db = mongoose.connection;

export default db;
