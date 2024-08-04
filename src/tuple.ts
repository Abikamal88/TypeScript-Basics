
// TypeScript - Tuples or Typed Array

//Array
let userArray = ['John',30,true]

userArray[0] = 40
console.log(userArray)

//Tuple

let userTuple:[string,number,boolean] = ['John',30,true]

userTuple[0] = 'Abi'

userTuple.push(4)

console.log(userTuple)


//readonly
let userTuple1: readonly [string,number,boolean] = ['John',30,true]

//Named
let userTuple2: readonly [userName:string,age1:number,isEng:boolean] = ['John',30,true]
//Accessing Named Tuple / Destructuring
let [userName,age1,isEng] = userTuple2
console.log(userName)
