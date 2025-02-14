import { configDotenv } from "dotenv";
import express, { json } from "express";
import connectDB from "./dbConnection/db.js";
import userAuth from "./Routes/userAuth.js";
import productRoutes from "./Routes/product.js"
import categoryRoutes from "./Routes/category.js"
import cors from "cors";


configDotenv();
connectDB()
const app = express();

//middlewares
// CORS configuration
const corsOptions = {
    origin: ['http://localhost:5173', 'https://buytech.netlify.app'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};
app.use(cors(corsOptions));
app.use(json())


app.use("/api/v1/auth", userAuth)
app.use("/api/v1/product",productRoutes)
app.use("/api/v1/category",categoryRoutes)

app.listen(process.env.PORT || 5000, () => {
    console.log(`server is running on port ${process.env.PORT}`);
    
})