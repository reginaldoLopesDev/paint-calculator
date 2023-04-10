import express from 'express';
import { createWallsFromFormData } from './utils/WallsFromFormData';
import { PaintCalculator } from './PaintCalculator';
import Room from './Room';

export const routes = express.Router();

routes.get('/', (req, res) => {
  res.render('index');
});

routes.post('/submit', (req, res) => {
  try {
    const data = req.body;
    const walls = createWallsFromFormData(data);
    if (!walls) {
      return res.status(400).json({ message: 'Invalid input' });
    }
    const room = new Room(walls);
    const paintCalculator = new PaintCalculator();
    const paintLiters = paintCalculator.calculatePaint(room);
    const paintCans = paintCalculator.calculatePaintCans(paintLiters);
    return res
      .status(200)
      .json({paintableTotalArea: room.getPaintableTotalArea(),
  paintLiters: paintLiters,
  paintCans: paintCans}
      );
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});
