import path from 'path'
import sharp from 'sharp'

class RequestHandler {
    title: unknown
    width: unknown
    height: unknown
    constructor(title: unknown, width: unknown, height: unknown) {
        this.title = title
        this.width = width
        this.height = height
    }
    inputPath(title: string) {
        return path.join(__dirname, '../', 'images', 'input', `${title}.jpg`)
    }
    outputPath(title: string, width: number, height: number) {
        return path.join(
            __dirname,
            '../',
            'images',
            'output',
            `${title}_${width}x${height}.jpg`
        )
    }
}

export default RequestHandler
