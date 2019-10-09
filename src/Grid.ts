const SVGNS = "http://www.w3.org/2000/svg";

export interface GridConfig {
  column?: number;
  line?: number;
}

export class Grid {

  config: GridConfig;

  constructor(public svg: SVGElement) {
    this.config = {
      column: 50,
      line: 30
    };
  }

  configure(options: GridConfig) {
    this.config = { ...this.config, ...options };
  }

  draw() {
    for (let i = 0; i < this.config.line; i++) {
      for (let j = 0; j < this.config.column; j++) {
        const rect = document.createElementNS(SVGNS, 'rect');
        const width = 20;
        const height = 20;
        const x = j * width;
        const y = i * height;
        rect.setAttribute('x', x + '');
        rect.setAttribute('y', y + '');
        rect.setAttribute('width', width + '');
        rect.setAttribute('height', height + '');
        this.svg.appendChild(rect);
      }

    }
  }

}
