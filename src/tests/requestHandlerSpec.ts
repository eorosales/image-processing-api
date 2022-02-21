import { RequestHandler } from '../utilities/RequestHandler'
import path from 'path';

describe('Test RequestHandler methods', () => {

  // Instantiate class and populate with test args
  const myImage = new RequestHandler('Title', 100, 200);

  // Test inputPath() method
  it('Return path to the input JPG file', async () => {
    const newFile = myImage.inputPath().split('/')[8];
    expect(newFile).toContain(`${myImage.title}.jpg`);
  })

  // Test outputImageName() method
  it('Rename input image files correctly', async () => {
    const renamedImage = myImage.outputImageName();
    expect(renamedImage).toEqual('Title_100x200.jpeg');
  })

  // Test outputPath() method
  it('Output processed images to the "output" folder', () => {
    const outputFolder = myImage.outputPath().split('/')[7];
    expect(outputFolder).toEqual('output');
  })

}) 