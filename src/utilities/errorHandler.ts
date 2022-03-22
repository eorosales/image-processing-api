import express, { Response, Request } from 'express'

export const errorHandler = async (
  err: express.ErrorRequestHandler, 
  req: Request, 
  res: Response, 
  next: Function) => {

  if(!req.params.title || req.params.title === undefined) {
    res.send(`Issue with title value in request. ${err}`);
    return
  }

  if(!req.params.width || req.params.width === undefined) {
    res.send(`Check width value in your request. ${err}`);
    return
  }

  if(!req.params.height || req.params.height === undefined) {
    res.send(`Check height value in your request. ${err}`);
    return
  }
}