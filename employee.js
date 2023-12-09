class Employee {
  constructor(_name, _salary, _title, _manager = null) {
    this.name = _name;
    this.salary = _salary;
    this.title = _title;
    this.manager = _manager;
  }
}

module.exports = Employee;
