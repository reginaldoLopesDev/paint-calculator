import Room from "../entities/Room";
import { Wall } from "../entities/Wall";

describe("Room", () => {
  test("must correctly sum the areas of the walls", () => {
    const walls = [
      new Wall(10, 5, 0, 1),
      new Wall(5, 6, 1, 1),
      new Wall(2, 2, 0, 0),
      new Wall(3, 3, 1, 0),
    ];
    const room = new Room(walls);
    expect(room.getPaintableTotalArea()).toBe(85.16);
  });
  test("Should throw an error when creating a room without 4 walls", () => {
    const walls = [
      new Wall(3, 2, 0, 0),
      new Wall(3, 2, 0, 0),
      new Wall(3, 2, 0, 0),
    ];
    expect(() => new Room(walls)).toThrowError(
      new Error("A room must have exactly 4 walls.")
    );
  });
});
