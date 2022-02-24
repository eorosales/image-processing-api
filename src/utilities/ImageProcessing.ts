import express from 'express'
import sharp from 'sharp'
import { ResizeHandler } from './ResizeHandler'

export const imageProcessing = (
    req: express.Request,
    res: express.Response,
    next: Function
): void => {
    const imageProcess = new ResizeHandler(
        req.query.title as string,
        parseInt(`${req.query.width}`),
        parseInt(`${req.query.height}`)
    )

    // Process images via Sharp
    sharp(imageProcess.inputPath())
        .resize(imageProcess.width, imageProcess.height)
        .jpeg({
            quality: 50,
            progressive: true,
        })
        .toFile(imageProcess.outputPath())

    next()
}
