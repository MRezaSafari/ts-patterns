namespace Calculator {
  export function add(a: number, b: number): number {
    return a + b;
  }

  export function subtract(a: number, b: number): number {
    return a - b;
  }
}

console.log(Calculator.add(1, 2));
console.log(Calculator.subtract(1, 2));

namespace OtherCalculator {
  export function add(a: number, b: number): number {
    return a - b;
  }

  export function subtract(a: number, b: number): number {
    return a + b;
  }
}

console.log(OtherCalculator.add(1, 2));
console.log(OtherCalculator.subtract(1, 2));

// Better Explanation

namespace Presentation {
    export function Logic1() {
        console.log('L Presentation')
    }
    export class MyClass {

    }
    export class MySecondClass {
        
    }
}

namespace CoreLogic {
    export function Logic2() {
        console.log('L 1')
    }
    export class MyClass {

    }
    export class MySecondClass {

    }
}

const myNewClass = Presentation.Logic1();
const myNewClass2 = CoreLogic.Logic2();
