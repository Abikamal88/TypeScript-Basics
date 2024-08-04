// // TypeScript - TypeAlias (naming-1st letter capital)

// //Primitive Types
type UserName = string
type YesorNo = boolean
type Age = number

let userName1:UserName = 'John'
let isEng1:YesorNo = true
let age2:Age = 30


// //Array

type NamesArray = string[]

let userNames:NamesArray = ['a','b']

// //Object

type UserObject = {
    name:UserName,
    age:Age,
    isEng:YesorNo
}

let user:UserObject = {name:'John',age:30, isEng:true}


//Union Type

type StrOrNum1 = string | number

let errorCode2:StrOrNum = '401'

errorCode2 = 401


// //Tuples

type NameAndAge = [name:string,age:number]

let userTuple3:NameAndAge = ['John',30]