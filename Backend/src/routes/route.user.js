import { Router } from "express";
import { registerUser,sendResetPasswordEmail, loginUser , logoutUser , sendOK, verifyOTP, resetPassword } from "../controllers/user.controller.js";
import { verifyAuthToken } from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.route("/register").post(registerUser)
userRouter.route("/resetpassword").post(sendResetPasswordEmail)
userRouter.route("/verifyotp").post(verifyOTP)
userRouter.route('/login').post(loginUser)
userRouter.route('/verifyauth').post(verifyAuthToken,sendOK)
userRouter.route('/updatepassword').post(resetPassword)

// secured routes
userRouter.route('/logout').post(verifyAuthToken,logoutUser)

export {userRouter}