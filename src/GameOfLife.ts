import { Grid } from "./Grid";

export class GameOfLife {
  constructor(public grid: Grid) { }

  start() {
    console.log('game of life start');
  }
}
