import { promises as fs } from 'fs'
import path from 'path'
import sharp from 'sharp'


// export class RequestHandler {
//     // Initialize properties
//     constructor() {}

//     // Input path to be used in Sharp
//     inputPath(title: string) {
//         return path.join(__dirname, '../', 'images', 'input', `${title}.jpg`);
//     }

//     // Output path and file output file renaming
//     outputPath(title: string, width: number, height: number) {
//         return path.join(__dirname, '../', 'images', 'output', `${title}_${width as number}x${height as number}.jpeg`);
//     }  

//     runSharp(title: string, width: number, height: number) {
//         // TODO: (1) Get title from query (2) Search for the file in proper dir (3) Run Sharp        
        

//         sharp()
//             .resize(width, height)
//             .toFile(path.join(__dirname, '../../', 'public', 'output', `${title}_${width}x${height}.jpeg`))
//     }
// }

export class RequestHandler {
    // Class properties
    title: string;
    width?: number;
    height?: number;

    constructor(title: string, width: number, height: number) {
        this.title = title;
        this.width = width;
        this.height = height;
    }

    //TODO: Create an input path for Sharp
    inputPath():string {
        const inputDir = path.join(__dirname, '../', 'public', 'input', `${this.title}.jpg`);
        // const inputFile = inputDir.split('/')[8];
        return inputDir;
    }
    
    //TODO: Create an output path for Sharp
    //TODO: Serve Sharp to the client
    
}