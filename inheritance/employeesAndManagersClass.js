//Person

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

//Employee

class Employee extends Person {
    constructor(name, surname, job, salary){
        super(name, surname)

        this.job = job;
        this.salary = salary;
    }

    getData() {
        return this.name + " " + this.surname + " " + this.salary;
    }

    getSalary() {
        return "The salary is: " + this.salary;
    }

    increaseSalary() {
        return this.salary = this.salary + this.salary * 0.1;
    }
}

//Developer

class Developer extends Employee {
    constructor(name, surname, job, salary, specialization){
        super(name, surname, job, salary)

        this.specialization = specialization;
    }

    getSpecialization() {
        return "The name of specialization is: " + this.specialization;
    }
}

//Manager

class Manager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary) 

        this.department = department;
    }

    getDepartment() {
        return "The name of department is: " + this.department;
    }

    changeDepartment(newDepartment) {
        return this.department = newDepartment;
    }
}

//testing
var sladjaMenager = new Manager ("Sladjana", "Culum", "team leader", 60000, "marketing");
console.log(sladjaMenager.getDepartment());
console.log(sladjaMenager.changeDepartment("finance"));
console.log(sladjaMenager.getDepartment());