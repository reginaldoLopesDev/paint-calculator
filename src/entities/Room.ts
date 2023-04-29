import { Wall } from "./Wall";

export default class Room {
    private walls: Wall[];

  
    constructor(walls: Wall[]) {
      if (walls.length !== 4) {
        throw new Error("A room must have exactly 4 walls.");
      }
      this.walls = walls;
    }
  
    public getPaintableTotalArea(): number {
      let totalArea = 0;
      for (const wall of this.walls) {
        totalArea += wall.getPaintableArea();
      }
      return totalArea;
    }
  }
  