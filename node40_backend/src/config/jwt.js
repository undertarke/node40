import jwt from 'jsonwebtoken';


// tạo token
export const createToken = (data) => {
    // 5 - 10' => refresh token
    // object
    return jwt.sign(data, "BI_MAT", { expiresIn: "5s" })
}

// kiểm tra token
// 3 lỗi => hết hạn, sai khóa bảo mật, sai định dạng token

export const checkToken = (token) => jwt.verify(token, "BI_MAT", error => error)



export const createTokenRef = (data) => {

    return jwt.sign(data, "BI_MAT_REFRESH", { expiresIn: "60d" })
}
export const checkTokenRef = (token) => jwt.verify(token, "BI_MAT_REFRESH", error => error)


// giải mã token
export const decodeToken = (token) => {
    return jwt.decode(token);
}


export const middleToken = (req, res, next) => {

    let { token } = req.headers;

    let error = checkToken(token);
    if (error == null) {
        next()
    } else {

        if (error.name == "TokenExpiredError")
            res.status(401).send("TokenExpiredError")

        else
            res.status(401).send("Không có quyền")
    }

}