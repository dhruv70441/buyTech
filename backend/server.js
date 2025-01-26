import { configDotenv } from "dotenv";
import express, { json } from "express";
import connectDB from "./dbConnection/db.js";
import mongoose from "mongoose";
import Product from "./models/product.model.js";

configDotenv();
connectDB()
const app = express();

//middlewares
app.use(json())

app.listen(process.env.PORT || 5000, () => {
    console.log(`server is running on port ${process.env.PORT}`);
    
})