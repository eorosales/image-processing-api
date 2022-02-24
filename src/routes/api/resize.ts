import express from 'express'
import NodeCache from 'node-cache'

import { ResizeHandler } from '../../utilities/ResizeHandler'

const resize = express.Router()
const cache = new NodeCache()

resize.get(
    '/',
    async (req: express.Request, res: express.Response): Promise<void> => {
        try {
            // Instantiate RequestHandler with queried args
            const myImage = new ResizeHandler(
                req.query.title as string,
                parseInt(`${req.query.width}`),
                parseInt(`${req.query.height}`)
            )

            // Create image name for processed images
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
                cache.set('key', myImage.outputImageName())
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
    }
)

export default resize
