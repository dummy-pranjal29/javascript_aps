const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai2 =  () => { // arrow function
    let username = "hitesh"
    console.log(this);
}


chai2()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// addTwo(4, 3);

// const addTwo = (num1, num2) =>  num1 + num2
// addTwo(4, 3);

// const addTwo = (num1, num2) => ( num1 + num2 ) // if we use parenthesi '()' instead of braces '{}', we need not write the 'return' statement
// addTwo(4, 3);

// const addTwo = (num1, num2) => ({username: "hitesh"}) // the braces in here mean that the return type is an object
// console.log(addTwo(3, "aditya"))

const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3, " aditya"))


const myArray = [2, 5, 3, 7, 8]

myArray.forEach()