import express from 'express'
import path from 'path'
import { promises as fs } from 'fs'
import { FileHandler } from '../../utilities/FileHandler'

const resize = express.Router()

resize.get(
    '/',
    async (req: express.Request, res: express.Response):Promise<void> => {
        try {
            // Instantiate RequestHandler with queried args
            const fileHandler = new FileHandler(
                req.query.title as string,
                parseInt(`${req.query.width}`),
                parseInt(`${req.query.height}`)
            )
            const queriedFile = await fs.readFile(fileHandler.outputPath(), {encoding: 'base64'});
            res.end(queriedFile, 'base64');
        } catch(err) {
            res.send(`Error: Could not find processed image: ${err}`)    
        }
    }
)

export default resize
