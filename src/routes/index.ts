import express from 'express'
import resize from './api/resize'
import { imageProcessing } from '../utilities/ImageProcessing'

const routes = express.Router()

routes.get('/', (_req: express.Request, res: express.Response): void => {
    res.send('Main Route')
})

routes.use('/resize', imageProcessing, resize)

export default routes
