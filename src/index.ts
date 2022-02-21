import express from 'express'
import routes from './routes/index'
import path from 'path'

const app = express()
const PORT = 3000

app.listen(PORT, () => console.log(`Listening on localhost://${PORT}`))

app.get('/', (req, res) => {
    res.send('Success')
})

app.use(express.static(__dirname + '/public'));

app.use('/api', routes)

export default app
