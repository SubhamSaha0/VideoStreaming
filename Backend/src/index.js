import dotenv from "dotenv";
import conncetDB from "./config/db.js";
import {app} from './app.js'

dotenv.config();

conncetDB()
.then(()=> {
    app.listen(process.env.PORT, ()=>{
        console.log(`App is running on port ${process.env.PORT}`);
        
    })
})
.catch((error)=>{
    console.log("DB Connection error:", error);
})