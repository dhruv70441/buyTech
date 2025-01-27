import { configDotenv } from "dotenv";
import express, { json } from "express";
import connectDB from "./dbConnection/db.js";
import userAuth from "./Routes/userAuth.js";

configDotenv();
connectDB()
const app = express();

//middlewares
app.use(json())

app.use("/api/v1/auth", userAuth)

app.listen(process.env.PORT || 5000, () => {
    console.log(`server is running on port ${process.env.PORT}`);
    
})