import { Wall } from '../Wall';

describe('Wall', () => {
  test('Should return the correct paintable area', () => {
    const wall = new Wall(10, 5, 0, 0);
    expect(wall.getPaintableArea()).toBe(50);
  });
  test('Should return an error when the wall area is less than 1m2', () => {
    expect(() => {
      const wall = new Wall(0.7, 0.7, 0, 0);
      wall.getPaintableArea();
    }).toThrowError(new Error("The wall area must be between 1 and 50 square meters."));
  });
  test('Should return an error when the wall area is greater than 50m2', () => {
    expect(() => {
      const wall = new Wall(10, 10, 0, 0);
      wall.getPaintableArea();
    }).toThrowError(new Error("The wall area must be between 1 and 50 square meters."));
  });
  test('should return an error when there is a door and the height of the wall is less than 2.2m', () => {
    expect(() => {
      const wall = new Wall(2, 5, 0, 1);
      wall.getPaintableArea();
    }).toThrowError(new Error("The height of the wall must be at least 30cm greater than the height of the door."));
  });
  test('should pass when there is a door and the height of the wall is greater than 2.2m', () => {
    const wall = new Wall(5, 3, 0, 1);
    wall.getPaintableArea();
    expect(wall.getPaintableArea()).toBe(13.48)
  });
  test('should return an error when when the combined door and window area is greater than 50% of the wall area', () => {
    expect(() => {
      const wall = new Wall(3, 2, 2, 2);
      wall.getPaintableArea();
    }).toThrowError(new Error("The total area of doors and windows cannot exceed 50% of the wall area."));
  });
});
