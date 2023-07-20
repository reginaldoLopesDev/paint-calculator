import Room from "../entities/Room";
import { Wall } from "../entities/Wall";

export class PaintCalculator {
  private static LITERS_PER_SQUARE_METER = 0.2;

  public calculatePaint(room: Room): number {
    const paintableArea = room.getPaintableTotalArea();
    const paintLiters = paintableArea * PaintCalculator.LITERS_PER_SQUARE_METER;
    return paintLiters;
  }

  public calculatePaintCans(liters: number): string {
    const cans: { size: number; quantity: number }[] = [];
    let remainingLiters = liters;
    const sizes = [18, 3.6, 2.5, 0.5]; // tamanhos de lata disponíveis, em litros
    const minSize = Math.min(...sizes);
    for (let i = 0; i < sizes.length; i++) {
      const size = sizes[i];

      const quantity = Math.floor(remainingLiters / size);
      if (quantity >= 1) {
        if (remainingLiters < minSize && i == sizes.length - 1) {
          // se ainda há tinta sobrando após adicionar todas as latas, adicione uma lata extra
          cans.push({ size: sizes[i], quantity: quantity + 1 });
        } else {
          cans.push({ size: size, quantity: quantity });
          remainingLiters = remainingLiters % size;
        }
      }
    }

    let result = "";
    for (const can of cans) {
      result += `${can.quantity} lata(s) de ${can.size}L + `;
    }
    result = result.slice(0, -3); // remove o último " + "
    return result;
  }
}
