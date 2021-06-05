// constructor Person

function Person (name, surname) {
    this.name = name;
    this.surname = surname;
}

//constructor Employee

function Employee (name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function() {
    return this.name + " " + this.surname + " " + this.salary;
}

Employee.prototype.getSalary = function() {
    return "The salary is: " + this.salary;
}

Employee.prototype.increaseSalary = function() {
    return this.salary = this.salary + this.salary * 0.1;
}

//testing
var pera = new Employee ("Pera", "Peric", "developer", 3000);
console.log(pera.getSalary());
console.log(pera.increaseSalary());
console.log(pera.getSalary());
console.log(pera.getData());



//constructor Developer

function Developer (name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;


Developer.prototype.getSpecialization = function() {
    return "The name of specialization is: " + this.specialization;
}

//testing
var peraDeveloper = new Developer ("Pera", "Mikic", "backend", 25000, "tester");
console.log(peraDeveloper.getSpecialization());



//constructor Manager

function Manager (name, surname, job, salary, department) {
    Employee.call(name, surname, job, salary);
    this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function() {
    return "The name of department is: " + this.department;
}

Manager.prototype.changeDepartment = function(newDepartment) {
    return this.department = newDepartment;
}

//testing
var jocaMenager = new Manager ("Joca", "Markovic", "team leader", 60000, "it");
console.log(jocaMenager.getDepartment());
console.log(jocaMenager.changeDepartment("finance"));
console.log(jocaMenager.getDepartment());




