import express from 'express'
import { promises as fs} from 'fs';
import path from 'path'
import sharp from 'sharp'

import { RequestHandler } from '../../utilities/RequestHandler'

const resize = express.Router();

resize.get('/', async (req: express.Request, res: express.Response) => {


    try {
        const myImage = new RequestHandler(
            req.query.title as string, 
            parseInt(`${req.query.width}`),
            parseInt(`${req.query.height}`)
        );    

        // Output consistent naming convention for processed images via Sharp
        const outputImageName = `${myImage.title}_${myImage.width}x${myImage.height}.jpeg`;
        // Path to output folder via Sharp's toFile() method
        const outputPath = path.join(__dirname, '../../', 'public', 'output', outputImageName);
        
        // Output resized image
        await sharp(myImage.inputPath())
            .resize(myImage.width, myImage.height)
            .jpeg({
                quality: 50,
                progressive: true
            })
            .toFile(outputPath)

        res.send(`
            <h2>Image Processing API</h2>
            <img src="/output/${outputImageName}" />
        `)

    } catch(err) {
        // Handle ERROR
        res.send(`${err}`);
    }
});

export default resize;