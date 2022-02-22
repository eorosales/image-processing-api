import path from 'path'

export class ResizeHandler {
    // Class properties
    title: string
    width: number
    height: number

    constructor(title: string, width: number, height: number) {
        this.title = title
        this.width = width
        this.height = height
    }

    // Input path for Sharp
    inputPath(): string {
        const inputDir = path.join(
            __dirname,
            '../',
            'public',
            'input',
            `${this.title}.jpg`
        )
        return inputDir
    }

    outputImageName(): string {
        return `${this.title}_${this.width}x${this.height}.jpeg`
    }

    // Path to output folder via Sharp's toFile() method
    outputPath(): string {
        return path.join(
            __dirname,
            '../',
            'public',
            'output',
            this.outputImageName()
        )
    }
}
