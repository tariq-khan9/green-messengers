import mongoose from "mongoose";

const connectMongoDB = () => {
    try{
        mongoose.connect(process.env.DATABASE_URL, {
            serverSelectionTimeoutMS: 10000
        })
        
    }catch(e){
        console.log("SERVER ERROR  ", e)
    }
}

export default connectMongoDB