import { Grid } from "./Grid";
import { Command } from "./Command";


const grid = new Grid(document.querySelector<SVGElement>('svg'));
grid.configure({
  column: 10,
  line: 10
});
grid.draw();

new Command(document.querySelector('div.command'), grid);
