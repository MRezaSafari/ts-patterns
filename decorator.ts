function add(a: number, b: number): number {
  return a + b;
}

function withLogging(fn: Function): Function {
  return function (...args: number[]) {
    console.log(`Arguments: ${args}`);
    return fn(...args);
  };
}

const addWithLogging = withLogging(add);

console.log(addWithLogging(1, 2));
