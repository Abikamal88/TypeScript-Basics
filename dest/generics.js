"use strict";
// TypeScript - Generics
//Resuable code
const toArray = (x, y, z) => {
    return [x, y, z];
};
let arr = toArray('1', '2', 3);
console.log(arr);
// Generics
const toArrayGeneric = (x, y, z) => {
    return [x, y, z];
};
let genericArray = toArrayGeneric(1, 2, 3);
console.log(genericArray);
// Multiple Types
let printValues = (a, b, c) => {
    console.log(`a is ${typeof a} b is ${typeof b} c is ${typeof c}`);
};
printValues(1, "one", true);
// Type and Generics Together
let printValues1 = (a, b, c, d) => {
    console.log(`a is ${typeof a} b is ${typeof b} c is ${typeof c}`);
};
printValues1(1, "one", true, 'Hi');
