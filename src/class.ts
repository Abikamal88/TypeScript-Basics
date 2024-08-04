// // TypeScript - Class

// simple class
class UserClass {
    id:number 

    constructor(x:number) {
        this.id = x
    }
}

let userobject = new UserClass(10)

console.log(userobject.id)

// // Interface

interface PersonInterface {
    id:number,
    name:string
}

interface AddressInterface {
    city:string    
}


// class implements interface && class implements multiple interfaces

class Person implements PersonInterface,AddressInterface {
    id:number
    name:string
    city:string

    constructor(id:number,name:string,city:string) {
        this.id = id
        this.name = name
        this.city= city
    }

    getName = () => {
        return this.name
    }

}

let person = new Person(100,'John','Chennai')
console.log(person.name)
console.log(person.getName())



//extends --> can extent only one class

class StudentClass extends Person {
    studentId:number = 101

    print() {
        console.log(`name is ${this.name} and id is ${this.studentId}`)
    }

}

// Student class created as object
let studentClass = new StudentClass(100,'Testing','Chennai')

studentClass.print()