import express from 'express'
import sharp from 'sharp'
import path from 'path'
import { promises as fs } from 'fs'
import { FileHandler } from './FileHandler'

export const imageProcessing = async (
    req: express.Request,
    _res: express.Response,
    next: Function

):Promise<void> => {

    const fileHandler = new FileHandler(
        req.query.title as string,
        parseInt(`${req.query.width}`),
        parseInt(`${req.query.height}`)
    )

    // Check if processed image exists in 'output' cache folder
    const cachedFiles = await fs.readdir(path.join(__dirname, '../../', 'public', '/output'));
    if(cachedFiles.includes(fileHandler.outputImageName())) {
        console.log('Serve from cache')
        next();
    } else {
    // Process images via Sharp
    console.log('Start process')
    await sharp(fileHandler.inputPath())
        .resize(fileHandler.width, fileHandler.height)
        .jpeg({
            quality: 50,
            progressive: true,
        })
        .toFile(fileHandler.outputPath())
    next();
    }
}