function add(number1: number, number2: number, showResult: boolean, phrase: string) {
  // if (typeof number1 !== "number" || typeof number2 !== "number") {
  //   throw new Error("Incorrect input!");
  // }

  const result = number1 + number2;

  if (showResult) {
    console.log(phrase + result);
  } else {
    return number1 + number2;
  }
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

const result = add(number1, number2, printResult, resultPhrase);
console.log(result);
