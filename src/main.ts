import { Grid } from "./Grid";


const grid = new Grid(document.querySelector<SVGElement>('svg'));
grid.configure({
  column: 50,
  line: 30
});
grid.draw();
