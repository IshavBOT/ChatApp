import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const connectToMongoose = async ()=>{
    try{
        mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Connected to MONGODB")
    }
    catch(error){
        console.log("Error connecting to MONGO DB"+error.message)
    }
} 

export default connectToMongoose