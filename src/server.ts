import express, { type Express, type Request, type Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import test from './routes/test.ts';

dotenv.config({ path: 'env' });

const app: Express = express();

const port = process.env.PORT ?? 5000;
const corsOrigin = process.env.CORS_ORIGIN ?? 'http://localhost:3000';

app.use(cors({
  origin: corsOrigin,
}));

app.use('/test', test);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
