class Employee {
  constructor(_name, _salary, _title, _manager = null) {
    this.name = _name;
    this.salary = _salary;
    this.title = _title;
    this.manager = _manager;
  }
}

// const leo = new Employee("Leonardo", 90000, "Ninja");
// console.log(leo);

module.exports = Employee;
