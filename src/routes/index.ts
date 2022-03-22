import express from 'express'
import resize from './api/resize'
import { imageProcessing } from '../utilities/ImageProcessing'
import { errorHandler } from '../utilities/errorHandler'  

const routes = express.Router()

routes.get('/', (_req: express.Request, res: express.Response): void => {
    res.send('Main Route')
})

routes.use('/resize', imageProcessing, resize)
routes.use(errorHandler);

export default routes
