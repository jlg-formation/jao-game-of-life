import { Grid } from "./Grid";


const grid = new Grid(document.querySelector<SVGElement>('svg'));
grid.configure({
  column: 10,
  line: 10
});
grid.draw();
