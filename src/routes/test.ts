import express, { type Express, type Request, type Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Test route!');
  }
);