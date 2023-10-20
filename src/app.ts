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
