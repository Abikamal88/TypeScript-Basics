// TypeScript - Type Casting or Type assersion


//syntax
// as or <>

//unknown string to string
let k:unknown = 'Hello'

console.log((k as string).length)
console.log((<string>k).length)

//unknown number to string
let l:unknown = 20

console.log((l as string).length)

//DOM
let input = document.querySelector('input') as HTMLInputElement
let inputValue = input.value