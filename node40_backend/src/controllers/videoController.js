import Video from "../models/video.js"

import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { responseData } from "../config/Response.js";

const model = initModels(sequelize)

// Event Loop
// localhost:8080/video/get-video
const getVideo = async (req, res) => {

    // SELECT * FROM video WHERE video_id = 2

    // SELECT * FROM video WHERE video LIKE '%a%'

    // [{} , {} , {} , {}]
    // {}
    let data = await model.video.findAll({
        include: ["video_type", "user"]
    });

    // let data = await Video.findByPk(2);

    responseData(res, "Thành công", 200, data)

}

const getVideoType = async (req, res) => {

    let data = await model.video_type.findAll()
    responseData(res, "Thành công", 200, data)


}

const getVideoByType = async (req, res) => {
    let { typeId } = req.params;

    let data = await model.video.findAll({
        where: {
            type_id: typeId
        }
    })
    responseData(res, "Thành công", 200, data)


}

const searchVideo = (req, res) => {

    res.send("hello world MVC !")

}

const getVideoPage = async (req, res) => {

    let { page } = req.params;
    let pageSize = 3
    let index = (page - 1) * pageSize;

    // SELECT * FROM video LIMIT index , pageSize
    let data = await model.video.findAll({
        offset: index,
        limit: pageSize
    });

    let dataCount = await model.video.count();

    responseData(res, "Thành công", 200, { data, pagination: Math.ceil(dataCount / pageSize) })

}


const getVideoById = async (req, res) => {

    let { videoId } = req.params;

    // SELECT * FROM video LIMIT index , pageSize
    let data = await model.video.findByPk(videoId, { include: ["user"] });


    responseData(res, "Thành công", 200, data)

}


export {
    getVideo,
    searchVideo,
    getVideoType,
    getVideoByType,
    getVideoPage,
    getVideoById
}