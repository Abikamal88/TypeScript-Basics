
// TypeScript - any Type or Dynamic Type

//Basic Types
let Name:any = 'Abi'

console.log(Name)
Name = 30
console.log(Name)
Name = true
console.log(Name)

//Array

let anyArray:any[] = [];

anyArray.push('Test')
anyArray.push(30)
anyArray.push(true)

console.log(anyArray)

//Object

type Student = {
    studentName:any,
    age:any
}

let student:Student;

student = {studentName:'test', age:30}

student = {studentName:30,age:'test'}

console.log(student)

// null and undefined

let x:null = null
let y:undefined = undefined