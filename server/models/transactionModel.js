import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    userId:{type:String, reqired:true},
    plan:{type:String, reqired:true},
    amount:{type:Number, reqired:true},
    credits:{type:Number,reqired:true},
    payment:{type:Boolean, default:false},
    date:{type:Number},
})

const transactionModel = mongoose.models.transaction || mongoose.model("transaction", transactionSchema)

export default transactionModel;
