const Employee = require("./employee");

class Manager extends Employee {
  constructor(_name, _salary, _title, _manager = null) {
    super(_name, _salary, _title, _manager);
    this.employees = [];
  }
  addEmployee(employee) {
    this.employees.push(employee);
  }
}

// const splinter = new Manager("Splinter", 100000, "Sensei");
// console.log(splinter);

const splinter = new Manager("Splinter", 100000, "Sensai");
console.log("Before: ", splinter);

const leo = new Employee("Leonardo", 90000, "Ninja", splinter);
const mikey = new Employee("Michelangelo", 90000, "Ninja", splinter);
const donnie = new Employee("Donatello", 90000, "Ninja", splinter);
const raph = new Employee("Raphael", 90000, "Ninja", splinter);

splinter.addEmployee(leo);
splinter.addEmployee(mikey);
splinter.addEmployee(donnie);
splinter.addEmployee(raph);

console.log("After: ", splinter);

module.exports = Manager;
