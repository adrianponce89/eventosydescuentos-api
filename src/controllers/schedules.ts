import { Request, Response } from 'express';
import Schedule, { ISchedule } from '../models/schedule';

export default {
  index: async (req: Request, res: Response) => {
    const schedules = await Schedule.find({});
    res.status(200).json(schedules);
  },

  newSchedule: async (req: Request, res: Response) => {
    const newSchedule = new Schedule({
      name: req.body.name,
      start: req.body.start,
      end: req.body.end,
      location: req.body.location,
      description: req.body.description,
      photo: req.body.photo,
      author: req.body.author,
    });
    const schedule = await newSchedule.save();
    res.status(201).json(schedule);
  },

  getSchedule: async (req: Request, res: Response) => {
    const { scheduleId } = req.params;
    const schedule = await Schedule.findOne({
      _id: scheduleId,
    });
    res.status(200).json(schedule);
  },

  replaceSchedule: async (req: Request, res: Response) => {
    const { scheduleId } = req.params;
    const newSchedule = req.body;
    await Schedule.findByIdAndUpdate(scheduleId, newSchedule);
    res.status(200).json({ success: true });
  },

  updateSchedule: async (req: Request, res: Response) => {
    const { scheduleId } = req.params;
    const newSchedule: ISchedule = {};
    const data = JSON.parse(req.body.data);

    if (data.name) newSchedule.name = data.name;
    if (data.start) newSchedule.start = data.start;
    if (data.end) newSchedule.end = data.end;
    if (data.location) newSchedule.location = data.location;
    if (data.description) newSchedule.description = data.description;
    if (data.photo) newSchedule.photo = data.photo;
    if (data.author) newSchedule.author = data.author;

    await Schedule.findByIdAndUpdate(scheduleId, {
      $set: newSchedule,
    });
    res.status(200).json({ success: true });
  },
  removeSchedule: async (req: Request, res: Response) => {
    const { scheduleId } = req.params;
    await Schedule.deleteOne({ _id: scheduleId });
    res.status(200).json({ success: true });
  },
};
