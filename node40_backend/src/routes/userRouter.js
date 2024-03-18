
import express from 'express'
import { login, loginFacebook, signUp } from '../controllers/userController.js';

const userRouter = express.Router()

userRouter.post("/signup",signUp)

userRouter.post("/login",login)


userRouter.post("/login-facebook",loginFacebook)

export default userRouter;
