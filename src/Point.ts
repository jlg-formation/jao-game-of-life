export class Point {
  static cache = new Map<string, Point>();
  constructor(public x: number, public y: number) {
    const str = `${x}_${y}`;
    if (Point.cache.has(str)) {
      return Point.cache.get(str);
    }
    Point.cache.set(str, this);
  }
}
