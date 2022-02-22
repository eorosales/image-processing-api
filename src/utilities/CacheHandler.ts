import express from 'express';
import { ResizeHandler } from './RequestHandler';
import NodeCache from 'node-cache';

const cache = new NodeCache();

 export const cacheHandler = (req: express.Request, res: express.Response, next: Function) => {
  try {
    // Access to ResizeHandler() methods
    const myImage = new ResizeHandler(
      req.query.title as string,
      parseInt(`${req.query.width}`),
      parseInt(`${req.query.height}`)
    );

    const imageName = myImage.outputImageName;
      if(cache.has(`${imageName}`)) {
        return res.status(200).json(cache.get(`${imageName}`))
      }
      return next();

  } catch(err) {

    throw new Error(`${err}`)

  }
}