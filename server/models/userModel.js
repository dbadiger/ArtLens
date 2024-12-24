import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, reqired:true},
    email:{type:String, unique:true, reqired:true},
    password:{type:String, reqired:true},
    creditBalance:{type:Number,default:5},
})

const userModel = mongoose.models.user || mongoose.model("user", userSchema)

export default userModel;
