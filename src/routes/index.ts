import express from 'express';
import schedulesRouter from './schedules';

const router = express.Router();

router.use('/schedules', schedulesRouter);

export default router;
