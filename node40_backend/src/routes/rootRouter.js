
import express from 'express'
import videoRouter from './videoRouter.js'

const rootRouter = express.Router()


rootRouter.use("/video", videoRouter)

export default rootRouter