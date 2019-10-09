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
    points.forEach(point => {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const pt = new Point(point.x + i, point.y + j);
          console.log('pt: ', pt);

          if (this.isBecomingBlack(points, pt)) {
            result.add(pt);
          } else {
            result.delete(pt);
          }
        }

      }
    });
    return result;
  }

  isBecomingBlack(points: Set<Point>, pt: Point) {
    const total = this.count(points, pt);
    if (total === 3) {
      return true;
    }
    if (total === 2) {
      if (points.has(pt)) {
        return true;
      }
      return false;
    }

    return false

  }

  count(points: Set<Point>, pt: Point): number {
    let result = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) {
          continue;
        }
        const p = new Point(pt.x + i, pt.y + j);
        if (points.has(p)) {
          result++;
        }
      }
    }

    console.log('result: ', result);
    return result;
  }



}
