import { Grid } from "./Grid";
import { Point } from "./Point";

export class GameOfLife {
  constructor(public grid: Grid) { }

  start() {
    console.log('game of life start');
    const points = this.grid.getPoints();
    this.runCycle(points);
  }

  runCycle(points: Set<Point>) {
    setTimeout(() => {
      console.log('run cycle');
      // compute
      const newPoints = this.compute(points);
      // draw
      this.grid.setPoints(newPoints);
      this.grid.draw();
      this.runCycle(newPoints);
    }, 1000);
  }

  compute(points: Set<Point>): Set<Point> {
    const result = new Set<Point>();
    result.add(new Point(3, 2));
    return result;
  }
}
