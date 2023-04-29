
export class Wall{
    private height: number;
    private width: number;
    private windows: number;
    private doors: number;
   
    private static DOORS_AREA = 1.52;
    private static WINDOWS_AREA = 2.4;
    private static DOOR_HEIGHT = 1.9;
    private static MIN_WALL_HEIGHT_DOOR = Wall.DOOR_HEIGHT + 0.3;

    constructor(height: number, width: number, windows: number, doors: number ) {
      if (width * height < 1 || width * height > 50) {
        throw new Error("The wall area must be between 1 and 50 square meters.");
      }
      if ( doors != 0 &&height < Wall.MIN_WALL_HEIGHT_DOOR) {
        throw new Error("The height of the wall must be at least 30cm greater than the height of the door.");
      }
      this.height = height;
      this.width = width;
      this.windows = windows;
      this.doors = doors;
    }
  
    public getPaintableArea(): number {
      const doorsArea = this.doors * Wall.DOORS_AREA;
      const windowsArea = this.windows * Wall.WINDOWS_AREA;
      const totalArea = (this.width * this.height) - (doorsArea + windowsArea);

      const maxDoorsWindowsArea = this.width * this.height * 0.5;
      if (doorsArea + windowsArea > maxDoorsWindowsArea) {
        throw new Error("The total area of doors and windows cannot exceed 50% of the wall area.");
      }
      return totalArea;
    }
  }