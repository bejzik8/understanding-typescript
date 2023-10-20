class Department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name }
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

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  protected lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }

    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }

    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addEmployee(employee: string): void {
    if (employee === 'Mirko') {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports)
  }
}

const employee1 = Department.createEmployee('Mirko');

console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Mirko']);

it.addEmployee('Mirko');
it.addEmployee('Ivana');

// accounting.employees[2] = 'Teodora';

it.describe();
// accounting.name = 'NEW NAME';

console.log(it)

const accounting = new AccountingDepartment('d2', []);

// console.log(accounting.mostRecentReport);

accounting.mostRecentReport = 'Year End Report';

accounting.addEmployee('Mirko');
accounting.addEmployee('Ivana');

accounting.addReport('Something went wrong...');

console.log(accounting.mostRecentReport);

accounting.printReports();

const accountingCopy = { name: 'DUMMY', describe: it.describe };

// accountingCopy.describe();
