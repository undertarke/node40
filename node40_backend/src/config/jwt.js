import jwt from 'jsonwebtoken';


// tạo token
export const createToken = (data) => {
    // 5 - 10' => refresh token
    // object
    return jwt.sign(data, "BI_MAT", { expiresIn: "5d" })
}

// kiểm tra token
// 3 lỗi => hết hạn, sai khóa bảo mật, sai định dạng token

export const checkToken = (token) => jwt.verify(token, "BI_MAT", error => error)


// giải mã token
export const decodeToken = (token) => {
    return jwt.decode(token);
}


export const middleToken = (req, res, next) => {

    let { token } = req.headers;

    if (checkToken(token) == null) {
        next()
    } else {

        res.status(401).send("Không có quyền")
    }

}