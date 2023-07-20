import { Wall } from "../entities/Wall";

export function createWallsFromFormData(formData: any): Wall[] {
  const walls: Wall[] = [];

  for (let i = 1; i <= 4; i++) {
    const height = formData[`wall${i}Height`];
    const width = formData[`wall${i}Width`];
    const windows = formData[`wall${i}Windows`];
    const doors = formData[`wall${i}Doors`];

    walls.push(new Wall(height, width, windows, doors));
  }

  return walls;
}
