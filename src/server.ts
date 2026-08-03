import express, { type Express, type Request, type Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app: Express = express();

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5000'],
}));

const test = require('./routes/test');

app.use('/test', test);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});