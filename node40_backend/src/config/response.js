
export const responseData = (res, message, code, data) => {

    res.json({
        message,
        code,
        data,
        date: new Date()
    })
}