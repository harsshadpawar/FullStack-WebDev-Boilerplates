import mongoose from "mongoose";
import dotenv from "dotenv";
import { error } from "console";
dotenv.config();

//export a function that connects to db

const db = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connected to mongodb");
    })
    .catch((error) => {
      console.log("Error connecting to mongodb ", error);
    });
};

export default db;
