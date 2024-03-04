// dùng khởi tạo server BE

// B1: tạo file package.json => yarn init => enter
// B2: chuyển qua module => update package.json => "type":"module"

// B3: yarn add express

//B4: Setup server 
import express from 'express'



const app = express()
// chèn middleware cấu hình lại body thành json
app.use(express.json())

//
// yarn add cors
import cors from 'cors'
app.use(cors())

// khởi tạo server với port quy định
app.listen(8080)
// localhost:8080
// ctrl + C => tắt server

// yarn add nodemon => tự động reset server
// ctrl + J



// localhost:8080/demo   =>   GET
// tham số: rest params VD: (...rest) => {}
app.get("/demo/:id2/:hoTen2", (req, res) => {

    // params:
    //   + query string: localhost:8080/demo ? id=123 & hoTen=abc & ...
    let { id, hoTen } = req.query
    //   + query params: localhost:8080/demo/123/abc
    let { id2, hoTen2 } = req.params


    // body
    // truyền dữ liệu qua json
    let { ma, name, email, phone } = req.body

    res.status(200).send({ ma, name, email, phone }) // gửi tất cả định dạng dữ liệu trừ number
})

// kết nối CSDL

// SELECT * FROM => truy vấn
// yarn add mysql2

import mysql from 'mysql2'

const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    port: "3306",
    database: "dbyoutube"
})


// ORM sequelize findAll, prisma => findMany 
// .create()

app.get("/get-video", (req, res) => {
    connect.query("SELECT * FROM video", (err, result) => {
        res.send(result)
    })
})