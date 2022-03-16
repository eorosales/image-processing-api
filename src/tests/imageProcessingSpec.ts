import app from '../index'
import sharp from 'sharp'
import path from 'path'
import { promises as fs } from 'fs' 
import { FileHandler } from '../utilities/FileHandler'

describe('Test imageProcessing middleware', () => {

    it('Resizes the image', async () => {
        const testImage = await fs.readFile(path.join(__dirname, '../../', 'public/', 'input/', 'dtsj.jpg'));
        const fileHandler = new FileHandler(`${testImage}`, 300, 300);
        
        await sharp(testImage)
            .resize(fileHandler.width, fileHandler.height)
            .jpeg({
                quality: 50,
                progressive: true,
            })
            .toBuffer({ resolveWithObject: true })
            .then(({ data, info }) => {
                expect(info.width).toEqual(fileHandler.width)
                expect(info.height).toEqual(fileHandler.height)
            })
    })
}) 
