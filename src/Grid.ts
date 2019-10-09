import { Point } from "./Point";

const SVGNS = "http://www.w3.org/2000/svg";

export interface GridConfig {
  column?: number;
  line?: number;
}

export class Grid {


  config: GridConfig;
  points: Set<Point>;

  constructor(public svg: SVGElement) {
    this.points = new Set<Point>();
    this.config = {
      column: 50,
      line: 30
    };
  }

  configure(options: GridConfig) {
    this.config = { ...this.config, ...options };
  }

  draw() {
    this.clean();
    for (let i = 0; i < this.config.line; i++) {
      for (let j = 0; j < this.config.column; j++) {
        const point = new Point(i, j);
        const selected = this.points.has(point);
        const rect = document.createElementNS(SVGNS, 'rect');
        const width = 20;
        const height = 20;
        const x = j * width;
        const y = i * height;
        rect.setAttribute('x', x + '');
        rect.setAttribute('y', y + '');
        rect.setAttribute('width', width + '');
        rect.setAttribute('height', height + '');
        rect.setAttribute('class', selected ? 'selected' : '');
        rect.setAttribute('i', i + '');
        rect.setAttribute('j', j + '');


        this.svg.appendChild(rect);
        rect.addEventListener('click', event => {
          const rect = (event.target as Element);
          const cl = rect.classList;
          const i = +(rect.getAttribute('i'));
          const j = +(rect.getAttribute('j'));
          if (cl.contains('selected')) {
            cl.remove('selected');
            this.points.delete(new Point(i, j));
            return;
          }
          cl.add('selected');
          this.points.add(new Point(i, j));
        });
      }

    }
  }

  clean() {
    while (this.svg.lastChild) {
      this.svg.removeChild(this.svg.lastChild);
    }
  }

  getPoints() {
    return this.points;
  }

  setPoints(newPoints: Set<Point>) {
    this.points = newPoints;
  }


}
