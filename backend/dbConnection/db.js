import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const url = `${process.env.MONGO_URL}/${process.env.DB_NAME}`        
        const conn = await mongoose.connect(url)
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(`Error: ${error.message}`);    
        process.exit(1)    
    }
}

export default connectDB;