
// const connect = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1234",
//     port: "3306",
//     database: "dbyoutube"
// })

// yarn add sequelize

import { Sequelize } from "sequelize";
import config from "../config/config.js";


const sequelize = new Sequelize(
    config.database,
    config.user,
    config.pass,
    {
        host: config.database.host,
        port: config.port,
        dialect: config.dialect
    }
);

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