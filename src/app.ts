function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor)
}

@Logger

class Person {
  name = 'Mirko';

  constructor() {
    console.log('Creating person object...');
  }
}
