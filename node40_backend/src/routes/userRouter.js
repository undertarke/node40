
import express from 'express'
import { login, loginFacebook, resetToken, signUp } from '../controllers/userController.js';

const userRouter = express.Router()

userRouter.post("/signup", signUp)

userRouter.post("/login", login)


userRouter.post("/login-facebook", loginFacebook)


userRouter.post("/reset-token", resetToken)
import nodemailer from 'nodemailer'
// yarn add nodemailer
// rxkf sagc dbyh pstb

userRouter.get("/send-mail", (req, res) => {
    let configMail = nodemailer.createTransport({
        service: "gmail",
        auth: {
            
            user: "sangrom2003@gmail.com",
            pass: "rxkfsagcdbyhpstb"
        }
    })

    configMail.sendMail(
        {
            from: "sangrom2003@gmail.com",
            to: "khaitruong2112@gmail.com",
            subject: "Bán lô đất Bình Chánh",
            text: "4tr/m2 => 2204 mét cần ßán"
        }
        , (err, info) => {
            console.log(err)
            console.log(info)
            
        })

})

// sequelize ORM
// prisma ORM & Graphql

export default userRouter;
