/* 

Using a discriminated union to represent shapes.

Avoiding polymorphism and dynamic dispatch.

Processing data in a more cache-friendly manner.

*/

(() => {
  type Shape =
    | { type: "square"; side: number }
    | { type: "rectangle"; width: number; height: number }
    | { type: "triangle"; base: number; height: number }
    | { type: "circle"; radius: number };

  function area(shape: Shape): number {
    switch (shape.type) {
      case "square":
        return shape.side * shape.side;
      case "rectangle":
        return shape.width * shape.height;
      case "triangle":
        return 0.5 * shape.base * shape.height;
      case "circle":
        return Math.PI * shape.radius * shape.radius;
    }
  }

  function totalArea(shapes: Shape[]): number {
    return shapes.reduce((sum, shape) => sum + area(shape), 0);
  }

  const shapesOptimized: Shape[] = [];
  for (let i = 0; i < 1_000_000; i++) {
    shapesOptimized.push({ type: "square", side: i });
  }

  console.time("Optimized Code");
  const totalOptimized = totalArea(shapesOptimized);
  console.timeEnd("Optimized Code");
})();
