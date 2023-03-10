import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
        },
        walletAdrress:{
            type:String,
        },
        role:{
            type:Boolean,
            default:false
        }

    },
    { timestamps:true }
);
let Users= mongoose.models.users || mongoose.model("users",userSchema);

export default Users;