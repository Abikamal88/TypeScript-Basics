"use strict";
// TypeScript - Abstract Class --> used to check in run time
// similar to interface
//Abstract class - Incomplete class
class PersonAbstractClass {
}
// Child class
class StudentChildClass extends PersonAbstractClass {
    constructor(x) {
        super();
        this.print = () => {
            console.log(this.name);
        };
        this.name = x;
    }
}
let studentObject = new StudentChildClass('John');
studentObject.print();
//typeof
console.log('hi');
