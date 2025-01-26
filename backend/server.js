import { configDotenv } from "dotenv";
import express from "express";
import connectDB from "./dbConnection/db.js";
import mongoose from "mongoose";

configDotenv();
connectDB()
const app = express();


app.listen(process.env.PORT || 5000, () => {
    console.log(`server is running on port ${process.env.PORT}`);
    
})