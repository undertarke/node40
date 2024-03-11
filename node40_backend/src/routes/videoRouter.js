
import { getVideo, getVideoType, searchVideo, getVideoByType, getVideoPage } from '../controllers/videoController.js'
import express from 'express'

const videoRouter = express.Router()


// quy tắc đặt endpoint => viết thướng cách nhau bởi gạch ngang
// localhost:8080/video/get-video
videoRouter.get("/get-video", getVideo)

// localhost:8080/video/search-video
videoRouter.get("/search-video", searchVideo)


// API get video type
videoRouter.get("/get-video-type",getVideoType)

// API get video by typeId
videoRouter.get("/get-video-by-type/:typeId",getVideoByType)


// API get video by typeId
videoRouter.get("/get-video-page/:page",getVideoPage)

export default videoRouter;
