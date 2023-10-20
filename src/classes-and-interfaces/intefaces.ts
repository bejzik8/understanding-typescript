// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let addFn: AddFn;

addFn = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  readonly name?: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  outputName?: string | undefined;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
  }
}

let user1: Greetable;

// user1 = {
//   name: 'Mirko',
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   }
// }

user1 = new Person();
// user1.name = 'Nikola';

user1.greet('Hi there - I am');
