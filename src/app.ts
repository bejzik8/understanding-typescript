class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

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

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addEmployee(employee: string): void {
    if (employee === 'Mirko') {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports)
  }
}

const it = new ITDepartment('d1', ['Mirko']);

it.addEmployee('Mirko');
it.addEmployee('Ivana');

// accounting.employees[2] = 'Teodora';

it.describe();
// accounting.name = 'NEW NAME';

console.log(it)

const accounting = new AccountingDepartment('d2', []);

accounting.addEmployee('Mirko');
accounting.addEmployee('Ivana');

accounting.addReport('Something went wrong...');

accounting.printReports();

const accountingCopy = { name: 'DUMMY', describe: it.describe };

// accountingCopy.describe();
