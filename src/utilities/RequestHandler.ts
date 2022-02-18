import path from 'path'

export class RequestHandler {
    title: string;
    width: number;
    height: number;

    // Initialize properties
    constructor() {
        this.title = '';
        this.width = 0;
        this.height = 0;
    }

    // Input path to be used in Sharp
    inputPath(title: string) {
        return path.join(__dirname, '../', 'images', 'input', `${title}.jpg`);
    }

    // Output path and file output file renaming
    outputPath(title: string, width: number, height: number) {
        return path.join(__dirname, '../', 'images', 'output', `${title}_${width}x${height}.jpg`);
    }
}