//File that makes connection with DB
import mongoose from "mongoose"

const ConnectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected", conn.connection.host);

    }catch(err){
        console.error("Error", err.message);
        process.exit(1) //Code 1: failure, Code 0: success 
    }
}

export default ConnectDB