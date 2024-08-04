// TypeScript - Functions

// Function Type

//let greet:Function;
let greet = () => {
    return "Hello"
}

// Function with Parameters

let addition = (a:number,b:number) => {
    return a + b;
}

console.log(addition(10,10))

//Function with Return type

let addition1 = (a:number,b:number):number => {
    return a + b;
}

console.log(addition1(10,10))

//Function with Union Type params

let addition2 = (a:number,b:number,c:(string | number)):number => {
    if (typeof c === 'number') {
        return a + b + c;
    }
    return a + b;
}

console.log(addition2(10,10,12))


//Function with optional params 

let addition4 = (a:number,b:number,c?:(string | number)):number => {
    if (typeof c === 'number') {
        return a + b + c;
    }
    console.log(c)
    return a + b;
}

console.log(addition4(10,10))


// Function with default value

let addition5 = (a:number,b:number,c:(string | number) = 10):number => {
    if (typeof c === 'number') {
        return a + b + c;
    }
    console.log(c)
    return a + b;
}

console.log(addition5(10,10))

// Function with Type alias (starts with capital letter) params

type StrOrNum = string | number

let addition6 = (a:number,b:number,c:StrOrNum = 10):number => {
    if (typeof c === 'number') {
        return a + b + c;
    }
    console.log(c)
    return a + b;
}

console.log(addition6(10,10))

type User = {
    name:string,age:number
}
let printObject = (user:User) => {
    console.log(`name is ${user.name} and age is ${user.age}`)
}

printObject({name:'Test', age:30})

// rest params

let addition7 = (a:number,b:number,...c:number[]):number => {
    

    console.log(c)
    let d = c.reduce((x,y) => x+y,0)
    return a + b + d;
}

console.log(addition7(10,10,1,1,2,3))


// Function signature

let addition8 : (x:number,y:number,...z:number[]) => void;

addition8 = (a:number,b:number,...c:number[]):number => {
    

    console.log(c)
    let d = c.reduce((x,y) => x+y,0)
    return a + b + d;
}

console.log(addition8(10,10,1,1,2,3))