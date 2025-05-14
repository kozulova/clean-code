/* 

Each shape is represented by a class.

Polymorphism is used to calculate the area.

Functions are small and focused.

*/

(() => {
  interface Shape {
    area(): number;
  }

  class Square implements Shape {
    constructor(private side: number) {}
    area(): number {
      return this.side * this.side;
    }
  }

  class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}
    area(): number {
      return this.width * this.height;
    }
  }

  class Triangle implements Shape {
    constructor(private base: number, private height: number) {}
    area(): number {
      return 0.5 * this.base * this.height;
    }
  }

  class Circle implements Shape {
    constructor(private radius: number) {}
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  const totalArea = (shapes: Shape[]): number => {
    return shapes.reduce((sum, shape) => sum + shape.area(), 0);
  };

  const shapesClean: Shape[] = [];
  for (let i = 0; i < 1_000_000; i++) {
    shapesClean.push(new Square(i));
  }

  console.time("Clean Code");
  const totalClean = totalArea(shapesClean);
  console.timeEnd("Clean Code");
})();
