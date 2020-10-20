import express from 'express';
import ScheduleController from '../controllers/schedules';

const router = express.Router();

router
  .route('/')
  .get(ScheduleController.index)
  .post(ScheduleController.newSchedule);

router
  .route('/:scheduleId')
  .get(ScheduleController.getSchedule)
  .put(ScheduleController.replaceSchedule)
  .patch(ScheduleController.updateSchedule)
  .delete(ScheduleController.removeSchedule);

export default router;
