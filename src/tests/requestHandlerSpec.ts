import { ResizeHandler } from '../utilities/ResizeHandler'
import path from 'path'

describe('Test RequestHandler methods', () => {
    // Instantiate class and populate with test args
    const myImage = new ResizeHandler('Title', 100, 200)

    // Test inputPath() method
    it('Point to correct path for Sharp input JPG file', async () => {
        const newFile = myImage.inputPath().split('/')[7]
        expect(newFile).toContain(`${myImage.title}.jpg`)
    })

    // Test outputImageName() method
    it('Rename input image files correctly', async () => {
        const renamedImage = myImage.outputImageName()
        expect(renamedImage).toEqual('Title_100x200.jpeg')
    })

    // Test outputPath() method
    it('Output processed images to the "output" folder', () => {
        const outputFolder = myImage.outputPath().split('/')[6]
        expect(outputFolder).toEqual('output')
    })
})
