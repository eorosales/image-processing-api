import express from 'express'
import { RequestHandler } from '../../utilities/RequestHandler'
import sharp from 'sharp'

const resize = express.Router();

resize.get('/', (req: express.Request, res: express.Response) => {
    try {
        // Initialize RequestHandler access inputPath() and outputPath() methods
        const myImage = new RequestHandler();
        const title = req.query.title as string;
        const width = parseInt(`${req.query.width}`);
        const height = parseInt(`${req.query.height}`);
        // Run Sharp
        sharp(myImage.inputPath(title))
            .resize(width, height)
            .toFile(myImage.outputPath(title, width, height)
            )
    } catch(err) {
        // Handle ERROR
        res.send(err);
    }
});

export default resize;