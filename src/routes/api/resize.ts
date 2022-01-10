import express from 'express';
import RequestHandler from '../../utilities/RequestHandler';
import {promises as fs} from 'fs';
import sharp from 'sharp';

const resize = express.Router();

resize.get('/', (req, res) => {
  try {
    const title: unknown = req.query.title;
    const width: unknown = parseInt(`${req.query.width}`);
    const height: unknown = parseInt(`${req.query.height}`);

    const myImage = new RequestHandler(title as string, width as number, height as number);

    sharp(myImage.inputPath(title as string))
      .resize(width as number, height as number)
      .toFile(myImage.outputPath(title as string, width as number, height as number));

    res.send(`
      ${myImage.inputPath(title as string)}
    `)

  } catch(err) {

    console.log(err);
    res.send(err);

  }
})

export default resize;