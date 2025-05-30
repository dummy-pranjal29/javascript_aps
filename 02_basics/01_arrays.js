const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr);

const myHeros = ["shaktiman", "naagraj", 2, true]
// console.log(myHeros);


const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[1]);

// Array methods

myArr.push(6)
myArr.push(7)
// console.log(myArr);

myArr.pop()
// console.log(myArr);

myArr.unshift(9)
// console.log(myArr); adds 9 to the start of the array


myArr.shift()
// console.log(myArr); removes the 0th indexed element

// console.log(myArr.includes(9)); // retunrs true is passed element is present in the array


// console.log(myArr.indexOf(3)); // returs index of the passed element

const newArr = myArr.join() // converts the array into a string
// console.log(myArr);
// console.log(newArr);
// console.log( typeof newArr);


// slice, splice

// console.log("A ", myArr);
const myn1 = myArr.slice(1, 3) // does not manipulate the original array and deoes not include the end index element
// console.log(myn1);
// console.log(myArr);



// console.log("B ", myArr);
const myn2 = myArr.splice(1, 3) // manipulates the original array by removing the part of the array with both the indices included
// console.log(myn2);
// console.log(myArr);


// console.log("C ", myArr);
// console.log(myn2);