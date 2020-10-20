import mongoose from 'mongoose';

export interface ISchedule {
  name?: string;
  start?: Date;
  end?: Date;
  location?: string;
  description?: string;
  photo?: string;
  author?: {
    id?: string;
    name?: string;
  };
}

export interface IScheduleModel extends ISchedule, mongoose.Document {}

const scheduleSchema = new mongoose.Schema({
  name: String,
  start: Date,
  end: Date,
  location: String,
  description: String,
  photo: String,
  author: {
    id: String,
    name: String,
  },
});

const Schedule = mongoose.model<IScheduleModel>('schedule', scheduleSchema);

export default Schedule;
