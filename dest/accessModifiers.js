"use strict";
// TypeScript - Data Modifiers 
// Public, Protected, private
//readonly
class PersonAccessModifier {
    constructor(name) {
        this.name = name;
    }
}
class EmployeeAccessModifier extends PersonAccessModifier {
    constructor() {
        super(...arguments);
        this.print = () => {
            console.log(this.name);
        };
        this.changeName = (name) => {
            this.name = name;
        };
    }
}
let empObject = new EmployeeAccessModifier('Abi');
empObject.print();
empObject.changeName('Test');
empObject.print();
empObject.name = 'Testing';
empObject.print();
