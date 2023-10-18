const userName = 'Max';
// userName = 'Maximilian';

let age = 30;

age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// WORKS IN JS
// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// const sum = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = output => console.log(output);

// printOutput(sum(2, 5));

// const btn = document.querySelector('button');

// if (btn) {
//   btn.addEventListener('click', event => console.log(event));
// }

// SPREAD OPERATOR

const hobbies = ['Sports', 'Cooking'];

const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const prsn = {
  firstName: 'Max',
  age: 30
};

const copiedPerson = { ...prsn };

// REST PARAMETERS

const sum = (...numbers: number[]) => numbers.reduce((curResult, curValue) => curResult + curValue, 0);

const addedNumbers = sum(5, 10, 2, 3.7);

console.log(addedNumbers);
