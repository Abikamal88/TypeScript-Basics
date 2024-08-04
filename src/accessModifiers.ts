// TypeScript - Data Modifiers 

// Public, Protected, private
//readonly

class PersonAccessModifier {
    name:string

   constructor(name:string) {
       this.name = name
   }
}

class EmployeeAccessModifier extends PersonAccessModifier {

   print = () => {
       console.log(this.name)
   }

   changeName = (name:string) => {
       this.name = name
   }
}

let empObject = new EmployeeAccessModifier('Abi')

empObject.print()

empObject.changeName('Test')

empObject.print()

empObject.name = 'Testing'

empObject.print()

