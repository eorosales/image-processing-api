import { promises as fs } from 'fs'
import path from 'path'
import sharp from 'sharp'


export class RequestHandler {
    // Initialize properties
    constructor() {}

    // Input path to be used in Sharp
    inputPath(title: string) {
        return path.join(__dirname, '../', 'images', 'input', `${title}.jpg`);
    }

    // Output path and file output file renaming
    outputPath(title: string, width: number, height: number) {
        return path.join(__dirname, '../', 'images', 'output', `${title}_${width as number}x${height as number}.jpg`);
    }  
}