"use strict";
// // TypeScript - Class
// simple class
class UserClass {
    constructor(x) {
        this.id = x;
    }
}
let userobject = new UserClass(10);
console.log(userobject.id);
// class implements interface && class implements multiple interfaces
class Person {
    constructor(id, name, city) {
        this.getName = () => {
            return this.name;
        };
        this.id = id;
        this.name = name;
        this.city = city;
    }
}
let person = new Person(100, 'John', 'Chennai');
console.log(person.name);
console.log(person.getName());
//extends --> can extent only one class
class StudentClass extends Person {
    constructor() {
        super(...arguments);
        this.studentId = 101;
    }
    print() {
        console.log(`name is ${this.name} and id is ${this.studentId}`);
    }
}
// Student class created as object
let studentClass = new StudentClass(100, 'Testing', 'Chennai');
studentClass.print();
