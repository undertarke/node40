
// const connect = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1234",
//     port: "3306",
//     database: "dbyoutube"
// })

// yarn add sequelize

import { Sequelize } from "sequelize";


const sequelize = new Sequelize('db_youtube', 'root', '1234', {
    host: "localhost",
    port: "3306",
    dialect: "mysql"
});

export default sequelize

// dùng để test kết nối vào db
// try {
//     sequelize.authenticate()
//     console.log("OK")
// } catch (error) {
//     console.log(error)

// }
// node src/models/connect.js

// yarn add sequelize-auto