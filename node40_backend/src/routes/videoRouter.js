
import { getVideo, searchVideo } from '../controllers/videoController.js'
import express from 'express'

const videoRouter = express.Router()


// quy tắc đặt endpoint => viết thướng cách nhau bởi gạch ngang
// localhost:8080/video/get-video
videoRouter.get("/get-video", getVideo)

// localhost:8080/video/search-video
videoRouter.get("/search-video", searchVideo)

export default videoRouter;