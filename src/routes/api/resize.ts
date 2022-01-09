import express from 'express';

const resize = express.Router();

resize.get('/', (req, res) => {
  res.send('Resize Route');
})

export default resize;