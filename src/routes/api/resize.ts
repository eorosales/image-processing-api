import express from 'express'
import path from 'path'
import { promises as fs } from 'fs'
import { FileHandler } from '../../utilities/FileHandler'

const resize = express.Router()

resize.get(
    '/',
    async (req: express.Request, res: express.Response):Promise<void> => {
            // Instantiate RequestHandler with queried args
            const fileHandler = new FileHandler(
                req.query.title as string,
                parseInt(`${req.query.width}`),
                parseInt(`${req.query.height}`)
            )
            // const queriedFile = fileHandler.outputImageName();
            const queriedFile = await fs.readFile(fileHandler.outputPath(), {encoding: 'base64'});
            // const cachedFiles = await fs.readdir(path.join(__dirname, '../../', 'public', '/output/', queriedFile));
            // console.log(cachedFiles);
            // console.log(cachedFiles.filter(f => f === queriedFile));
            // cachedFiles.filter(f => f === queriedFile) ? next()                 
            // Check to see if processed image exists in cache folder 'output'  
            res.end(queriedFile, 'base64');
    }
)

export default resize
