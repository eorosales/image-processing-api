import express, { Request, Response } from 'express'
import path from 'path'
import { promises as fs } from 'fs'
import { FileHandler } from '../utilities/FileHandler'

describe('Test FileHandler methods', () => {
    // Instantiate class and populate with test args
    const myImage = new FileHandler('Title', 100, 200);

    // Test inputPath() method
    it('Point to correct path for Sharp input JPG file', async () => {
        const inputDir = await fs.readdir(path.join(__dirname, '../../', 'public/', 'input'))
        expect(inputDir).toContain('dtsj.jpg');
    })

    // Test outputImageName() method
    it('Rename input image files correctly', async () => {
        const renamedImage = myImage.outputImageName()
        expect(renamedImage).toEqual('Title_100x200.jpeg')
    })

    // Test outputPath() method
    it('Output processed images to the "output" folder', async () => {
        const outputDir = await fs.readdir(path.join(__dirname, '../../', 'public/', 'output'))
        expect(outputDir).toContain('dtsj_300x300.jpeg');
    })
})
