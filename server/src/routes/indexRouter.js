import express from 'express';
import  { Comment }  from '../../db/models'

const router = express.Router();

router.get('/', (req, res) => {
  res.send(`<h1>Hello World!</h1>`);
});

export default router;
