import { configDotenv } from "dotenv";
import express, { json } from "express";
import connectDB from "./dbConnection/db.js";
import userAuth from "./Routes/userAuth.js";
import productRoutes from "./Routes/product.js"
import cors from "cors";


configDotenv();
connectDB()
const app = express();

//middlewares
app.use(cors())
app.use(json())


app.use("/api/v1/auth", userAuth)
app.use("/api/v1/product",productRoutes)

app.listen(process.env.PORT || 5000, () => {
    console.log(`server is running on port ${process.env.PORT}`);
    
})