"use strict";
// TypeScript - Functions
// Function Type
//let greet:Function;
let greet = () => {
    return "Hello";
};
// Function with Parameters
let addition = (a, b) => {
    return a + b;
};
console.log(addition(10, 10));
//Function with Return type
let addition1 = (a, b) => {
    return a + b;
};
console.log(addition1(10, 10));
//Function with Union Type params
let addition2 = (a, b, c) => {
    if (typeof c === 'number') {
        return a + b + c;
    }
    return a + b;
};
console.log(addition2(10, 10, 12));
//Function with optional params 
let addition4 = (a, b, c) => {
    if (typeof c === 'number') {
        return a + b + c;
    }
    console.log(c);
    return a + b;
};
console.log(addition4(10, 10));
// Function with default value
let addition5 = (a, b, c = 10) => {
    if (typeof c === 'number') {
        return a + b + c;
    }
    console.log(c);
    return a + b;
};
console.log(addition5(10, 10));
let addition6 = (a, b, c = 10) => {
    if (typeof c === 'number') {
        return a + b + c;
    }
    console.log(c);
    return a + b;
};
console.log(addition6(10, 10));
let printObject = (user) => {
    console.log(`name is ${user.name} and age is ${user.age}`);
};
printObject({ name: 'Test', age: 30 });
// rest params
let addition7 = (a, b, ...c) => {
    console.log(c);
    let d = c.reduce((x, y) => x + y, 0);
    return a + b + d;
};
console.log(addition7(10, 10, 1, 1, 2, 3));
// Function signature
let addition8;
addition8 = (a, b, ...c) => {
    console.log(c);
    let d = c.reduce((x, y) => x + y, 0);
    return a + b + d;
};
console.log(addition8(10, 10, 1, 1, 2, 3));
