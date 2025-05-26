//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null
// console.log(typeof outsideTemp)

let userEmail;
// console.log(typeof userEmail)

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754244555424n
// BigInt data type after 'n' in the end
// console.log(bigNumber);




// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
    income: 4500000
}

const myFunction = function(){
    console.log("Hello world");
}
// myFunction() : way to call the function


// console.log(typeof myObj);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ***********************************************************************



// Memory


// Stack (Primitive): Changes in one variable, changes the value of a copy created


let userEmailId = "pranjal@bit.com"

let userName = userEmailId

userName = "btech10909@bit.com"

// console.log(userEmailId);
// console.log(userName);



// Heap (Non Primitive): Changes in one variable, directly changes value in the address

let userOne = {
    userMail: "pranjal@bit.com",
    upi: "pranjal@ybl"
}

let userTwo = userOne

userTwo.upi = "btech10909@ybl"

console.log(userOne.upi);
console.log(userTwo.upi);
