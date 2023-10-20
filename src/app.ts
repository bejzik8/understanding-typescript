type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Admin, Employee {};

type ElevatedEmployee = Admin & Employee;

const e1 = {
  name: 'Mirko',
  privileges: ['create-server'],
  startDate: new Date()
};

type CombinableT = string | number;
type Numeric = number | boolean;

type Universal = CombinableT & Numeric; // number



// Function Overloads

function adds(a: number, b: number): number;
function adds(a: string, b: string): string;
function adds(a: string, b: number): string;
function adds(a: number, b: string): string;
function adds(a: CombinableT, b: CombinableT) {
  // type guard
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }

  return a + b;
}

const res1 = adds('Mirko', 'Nikola');
res1.split(' ');

const res2 = adds('Mirko', 30);

const fetchedUserData = {
  id: 'u1',
  name: 'Mirko',
  job: { title: 'CEO', description: 'My own company' }
};

console.log(fetchedUserData?.job?.title);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);

  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }

  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;

  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;

    case 'horse':
      speed = animal.runningSpeed;
      break;
  }

  console.log('Moving at speed: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });

// Type Casting

// 1.
// const userInputElement = <HTMLInputElement>document.getElementById('user-input');
// 2.
// const userInputElement = document.getElementById('user-input') as HTMLInputElement;

const userInputElement = document.getElementById('user-input');

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!';
}

// Index Types

interface ErrorContainer {
  // email: 'Not a valid email',
  // username: 'Must start with a character!'
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with a capital character!'
};
