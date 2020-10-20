// app.ts
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes';
import connectDB from './config/db.config';

// DB Connection
connectDB();

const app: express.Application = express();

// Cors
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/v1', routes);

export default app;
