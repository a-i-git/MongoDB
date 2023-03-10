import mongoose from "mongoose";

const ConnectDB=async()=>{
    if(mongoose.connections[0].readyState){
        console.log("Already Connected");
    }

    mongoose.connect(process.env.MONGODB_URL,{},(err)=>{
        if(err) throw err;
        console.log("Connected to MongoDB");
    });
};

export default ConnectDB
