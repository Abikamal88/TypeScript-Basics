// TypeScript - Abstract Class --> used to check in run time
// similar to interface

//Abstract class - Incomplete class

abstract class PersonAbstractClass {
    abstract name:string

    abstract print():void
}

// Child class

class StudentChildClass extends PersonAbstractClass {
    name: string

    constructor(x:string) {
        super()
        this.name = x
    }

    print = () => {
        console.log(this.name)
    }
}

let studentObject = new StudentChildClass('John')

studentObject.print()


// Abstract vs Interface

interface AddressInterface {
    city:string
}

//typeof

console.log('hi')