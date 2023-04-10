import { PaintCalculator } from '../PaintCalculator';
import { Wall } from '../Wall';
import Room from '../Room';

describe('PaintCalculator', () => {
    test('should calculate paint required for a room', () => {
    const walls = [new Wall(10, 5, 0, 1), new Wall(5, 6 , 1, 1), new Wall(2, 2, 0, 0), new Wall(3, 3, 1, 0)];

    const room = new Room(walls);
    const paintCalculator = new PaintCalculator();
    const liters = paintCalculator.calculatePaint(room);
    expect(liters).toBe(17.032);
    });

    test('should calculate paint cans required for a given amount of paint', () => {
      const walls = [new Wall(2, 2, 0, 0), new Wall(3, 3 , 1, 1), new Wall(3, 3, 0, 0), new Wall(4, 4, 1, 0)];
      const room = new Room(walls);
      const paintCalculator = new PaintCalculator();
      const liters = paintCalculator.calculatePaint(room);
      const cans = paintCalculator.calculatePaintCans(liters);
      expect(cans).toBe("1 lata(s) de 3.6L + 1 lata(s) de 2.5L + 1 lata(s) de 0.5L");
    });
});
