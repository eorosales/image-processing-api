import express from 'express'
import routes from './routes/index'
import path from 'path'
import { errorHandler } from './utilities/errorHandler'

const app = express()
const PORT = 3000

app.listen(PORT, () => console.log(`Listening on localhost://${PORT}`))
app.get('/', (_req: express.Request, res: express.Response): void => {res.send('Success')})
app.use(express.static(path.join(__dirname, '../', 'public')))
app.use('/api', routes)

export default app
