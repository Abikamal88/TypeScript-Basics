

// TypeScript Objects

//Implicit or Type Inference
let employee = {
    empName:'Test',
    age:32,
    isPermanent:true
}

employee.age = 32

employee = {
    empName:'testing',
    age:32,
    isPermanent:false,
}

//Explicit

type Employee = {
    empName:String,
    age:number,
    isPermanent:boolean
}

let employee1:Employee = {
    empName:'Test',
    age:30,
    isPermanent:true,
}

//Optionals

type Employee1 = {
    empName:String,
    age?:number,
    isPermanent:boolean
}

let employee2:Employee1 = {
    empName:'Test',
    isPermanent:true,
}

