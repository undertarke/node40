import Video from "../models/video.js"

import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { responseData } from "../config/Response.js";
import bcrypt from 'bcrypt';
import { createToken } from "../config/jwt.js";

const model = initModels(sequelize)

const signUp = async (req, res) => {

    try {
        let { fullName, email, password } = req.body;

        let checkEmail = await model.users.findOne({
            where: {
                email: email
            }
        })

        if (checkEmail) // kiểm tra email trùng
        {
            // thông báo email tồn tại
            responseData(res, "Email đã tồn tại", 400, "");

            return;
        }

        // yarn add bcrypt
        let newData = {
            full_name: fullName,
            email: email,
            pass_word: bcrypt.hashSync(password, 10),
            role: "USER"
        }

        // INSERT INTO users VALUES (......)
        await model.users.create(newData);

        responseData(res, "Đăng ký thành công", 200, "");

    } catch (error) {

        responseData(res, "Lỗi hệ thống", 500, "");

    }

}

const login = async (req, res) => {

    // try {


        let { email, password } = req.body;

        let checkEmail = await model.users.findOne({
            where: {
                email: email
            }
        })

        if (checkEmail) // kiểm tra email trùng
        {
            // check pass
            // if (checkEmail.pass_word == password) {
            if (bcrypt.compareSync(password, checkEmail.pass_word)) {

                let token = createToken({ userId: checkEmail.dataValues.user_id });
                responseData(res, "Login thành công", 200, token);
                return;
            }

            responseData(res, "Mật khẩu không đúng", 400, "");
            return;
        }

        responseData(res, "Email không đúng", 400, "");

    // } catch (error) {

    //     responseData(res, "Lỗi hệ thống", 500, "");

    // }
}
// yarn add jsonwebtoken
const loginFacebook = async (req, res) => {

    try {
        let { fullName, email, faceAppId } = req.body;

        let checkUser = await model.users.findOne({
            where: {
                face_app_id: faceAppId
            }
        })
        let token = "";
        if (checkUser) // kiểm tra email trùng
        {

            token = createToken({ userId: checkUser.dataValues.user_id });

        } else {
            // yarn add bcrypt
            let newData = {
                full_name: fullName,
                email: email,
                face_app_id: faceAppId,
                pass_word: "",
                role: "USER"
            }

            // INSERT INTO users VALUES (......)
            let data = await model.users.create(newData);

            token = createToken({ userId: data.dataValues.user_id });
        }

        responseData(res, "Login thành công", 200, token);


    } catch (error) {

        responseData(res, "Lỗi hệ thống", 500, "");

    }

}

export {
    signUp,
    login,
    loginFacebook
}