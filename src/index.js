// require('dotenv').config()      ----> only with this the code can run 
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./.env'
})

connectDB()

.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGODB CONNECTION FAILED !!!", err);
})















/*
import { express } from "express";
const app = express()

(async()=>{
    try {
      await mongoose.connect(`${process.env.MONGO_UR}/${DB_NAME}`) 
       app.on("error", () => {
        console.log("error", error)
        throw error
       })

       app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
       })
    } catch (error) {
        console.error("error",error)
        throw err
    }
})()*/