import express from "express"
import {registerUser,loginUser, userCredit, paymentRazorpay, verifyRazorpay } from "../controllers/userController.js"
import userAuth from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.get("/credit",userAuth, userCredit)
userRouter.post("/pay-razor",userAuth, paymentRazorpay)
userRouter.post("/verify-razorpay",userAuth, verifyRazorpay)

export default userRouter;

//localhost:4000/api/user/register
//localhost:4000/api/user/login
//localhost:4000/api/user/credit