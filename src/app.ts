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

function add(a: number, b: number) {
  // type guard
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }

  return a + b;
}

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
