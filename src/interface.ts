// // TypeScript - Interfaces --> 1st capital

// //Interface - Only work with Objects

interface UserInterface {
    name:string,
    age:number
}

const userinterface:UserInterface = {
    name:'Test',
    age:40
}

//function Interface
interface Function {
    (x:number,y:number): number
}

let add:Function = (p1:number,p2:number) => {
    return p1 + p2
}


//Extending Interfaces

interface EmployeeDetails extends UserInterface {
    employeeId:number
}

const employeedetails:EmployeeDetails = {
    name:'John',
    age:30,
    employeeId:100
}


//type cant be replaced with

type StrOrNum2
 = string | number

let errorCode3:StrOrNum = '401'

errorCode = 401