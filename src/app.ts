class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('Mirko');
accounting.addEmployee('Ivana');

// accounting.employees[2] = 'Teodora';

accounting.describe();
// accounting.name = 'NEW NAME';

console.log(accounting)

const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
