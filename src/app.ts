interface Named {
  readonly name?: string;
}

interface Greetable extends Named {
  readonly name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
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

user1 = new Person('Mirko');
// user1.name = 'Nikola';

user1.greet('Hi there - I am');
