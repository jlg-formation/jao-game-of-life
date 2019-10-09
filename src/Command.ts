import { Grid } from "./Grid";
import { GameOfLife } from "./GameOfLife";

export class Command {
  constructor(public elt: Element, public grid: Grid) {
    const startBtn = this.elt.querySelector('button.start');
    startBtn.addEventListener('click', event => {
      console.log('start');
      const gl = new GameOfLife(this.grid);
      gl.start();
    });
  }

}
