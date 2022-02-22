import express from 'express'
import sharp from 'sharp'
import NodeCache from 'node-cache'

import { ResizeHandler } from '../../utilities/RequestHandler'

const resize = express.Router()
const cache = new NodeCache()

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
        const outputFilePath = myImage.outputPath()
        const outputImageName = myImage.outputImageName()

        // Check to see if processed image exists in cache
        // If key is present in cache, retrieve image from cache
        if (cache.has('key')) {
            res.send(`
                <h2>Image Processing API</h2>
                <img src="/output/${cache.get('key')}" />
                <p>Image being served from cache!</p>
            `)
        } else {
            // If key is not present inside cache, process the image
            // Asynchronously run Sharp to process and output images
            await sharp(inputPath)
                .resize(myImage.width, myImage.height)
                .jpeg({
                    quality: 50,
                    progressive: true,
                })
                .toFile(outputFilePath)

            // Set key to serve for future requests
            cache.set('key', outputImageName)

            // Display processed image to browser
            res.send(`
            
            <h2>Image Processing API</h2>
            <img src="/output/${outputImageName}" />
            <p>Image has been processed and cached!</p>
            
        `)
        }
    } catch (err) {
        // Handle ERROR
        res.send(`There was an issue with your request: ${err}`)
    }
})

export default resize
