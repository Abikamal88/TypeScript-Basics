// TypeScript Arrays

//Implicit
let numSample = [1,2,3]
let strSample = ['a','b','c']
let boolSample = [true,false]

//Explicit
let numSample1:number[] = [1,2,3]
let strSample1:string[] = ['a','b','c']
let boolSample1:boolean[] = [true,false]

//Declare and Assign later
let numSample2:number[] = [];
let strSample2:string[] = [];
numSample.push(1)
strSample.push('d')

//read only
let numSample3:readonly number[] = [1,2,3]
// numSample.push(4)

