import express from 'express'
import sharp from 'sharp'
import path from 'path'
import { promises as fs } from 'fs'
import { RequestHandler } from '../../utilities/RequestHandler'



const resize = express.Router();

resize.get('/', async (req: express.Request, res: express.Response) => {


    try {
        const myImage = new RequestHandler();    
        const title = req.query.title as unknown;
        const width = parseInt(`${req.query.width}`);
        const height = parseInt(`${req.query.height}`);
        const outputDir = path.join(__dirname, '../../', 'images', 'output', `${title}_${width}x${height}.jpeg`);
        myImage.inputPath(`${title}`);
               
        sharp(myImage.inputPath(title as string))
                .resize(width as number, height as number)
                .toFormat("jpeg", { 
                    progressive: true, 
                    quality: 50 
                })
                .toBuffer()  
                .then(data => {
                    fs.writeFile(outputDir, `${data}`);
                    res.end(data);
                })
    
    } catch(err) {
        // Handle ERROR
        res.send(`${err}`);
    }
});

export default resize;