// app.ts
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes';

dotenv.config();

const app = express();

// Cors
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/v1', routes);

export default app;
