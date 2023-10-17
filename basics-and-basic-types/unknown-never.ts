let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
  // while (true) {}
}

generateError('An error occurred!', 500);

// const result = generateError('An error occurred!', 500);
// console.log(result);