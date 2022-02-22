import express from 'express'
import sharp from 'sharp'

import { ResizeHandler } from '../../utilities/RequestHandler'

const resize = express.Router()

resize.get('/', async (req: express.Request, res: express.Response) => {
    try {
        // Instantiate RequestHandler with queried args
        const myImage = new ResizeHandler(
            req.query.title as string,
            parseInt(`${req.query.width}`),
            parseInt(`${req.query.height}`)
        )

        // Create specifications for input and output for processed images
        const inputPath = myImage.inputPath()
        const outputPath = myImage.outputPath()
        const outputImageName = myImage.outputImageName()

        // Asynchronously run Sharp to process and output images
        await sharp(inputPath)
            .resize(myImage.width, myImage.height)
            .jpeg({
                quality: 50,
                progressive: true,
            })
            .toFile(outputPath)

        // Display processed image to browser
        res.send(`
            <div style="
                margin: 0;
                position: absolute;
                top: 40%;
                left: 50%;
                transform: translate(-50%, -50%);
            ">
                <h2>Image Processing API</h2>
                <img src="/output/${outputImageName}" />
            </div>
        `)
    } catch (err) {
        // Handle ERROR
        res.send(`Not able to serve processed image: ${err}`)
    }
})

export default resize
