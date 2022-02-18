import express from 'express'
import resize from './api/resize'

const routes = express.Router()

routes.get('/', (_req, res) => {
    res.send('Main Route')
})

routes.use('/resize', resize)

export default routes
