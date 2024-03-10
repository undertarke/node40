import Video from "../models/video.js"

import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";

const model = initModels(sequelize)

// Event Loop
// localhost:8080/video/get-video
const getVideo = async (req, res) => {

    // SELECT * FROM video WHERE video_id = 2

    // SELECT * FROM video WHERE video LIKE '%a%'

    // [{} , {} , {} , {}]
    // {}
    let data = await model.video.findAll({
        include: [model.video_type, model.users]
    });

    // let data = await Video.findByPk(2);

    res.send(data)

}

const searchVideo = (req, res) => {

    res.send("hello world MVC !")

}


export {
    getVideo,
    searchVideo
}