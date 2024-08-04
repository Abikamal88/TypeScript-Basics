"use strict";
// TypeScript - any Type or Dynamic Type
//Basic Types
let Name = 'Abi';
console.log(Name);
Name = 30;
console.log(Name);
Name = true;
console.log(Name);
//Array
let anyArray = [];
anyArray.push('Test');
anyArray.push(30);
anyArray.push(true);
console.log(anyArray);
let student;
student = { studentName: 'test', age: 30 };
student = { studentName: 30, age: 'test' };
console.log(student);
// null and undefined
let x = null;
let y = undefined;
