import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const conncetDB = async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("DB connected");
    } catch (error) {
        console.error("CoonectDB falied", error);
        process.exit(1)
    }
}

export default conncetDB