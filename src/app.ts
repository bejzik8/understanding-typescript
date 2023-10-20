// function Logger(constructor: Function) {
//   console.log('Logging...');
//   console.log(constructor)
// }

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor)
  }
}

@Logger('LOGGING - PERSON')

class Person {
  name = 'Mirko';

  constructor() {
    console.log('Creating person object...');
  }
}
