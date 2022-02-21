import express from 'express'
import { promises as fs} from 'fs';
import path from 'path'
import sharp from 'sharp'

import { RequestHandler } from '../../utilities/RequestHandler'

const resize = express.Router();

resize.get('/', async (req: express.Request, res: express.Response) => {
    try {
        // Instantiate RequestHandler with queried args
        const myImage = new RequestHandler(
            req.query.title as string, 
            parseInt(`${req.query.width}`),
            parseInt(`${req.query.height}`)
        );   
        
        // Create specifications for input and output for processed images
        const inputPath = myImage.inputPath(); 
        const outputPath = myImage.outputPath();
        const outputImageName = myImage.outputImageName();

        // Asynchronously run Sharp to process and output images
        await sharp(inputPath)
        .resize(myImage.width, myImage.height)
        .jpeg({
            quality: 50,
            progressive: true
        })
        .toFile(outputPath);
    
        // Display processed image to browser
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