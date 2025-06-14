
// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const heros = ["flash" , "superman" , "batman"]
for (const hero of heros) {
    // console.log(hero);
    
}

const greetings = "Hello world!"
for (const greet of greetings) {
    if (greet === ' ') continue // to ignore the space
    // console.log(`Each char is ${greet}`)
}

// const books = [
//     {
//     bookName = "Book One",
//     bookPublishYear = 1999,
//     bookEdition = 2018,
//     bookPrice = 699
// },
// {
//     bookName = "Book Two",
//     bookPublishYear = 2006,
//     bookEdition = 2023,
//     bookPrice = 899
// }]

// for (const bk of books) {
//     // console.log(bk.bookEdition)
//     // This will throw an ERROR
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Maps

const myMap = new Map()
myMap.set('IN', "India")
myMap.set('USA', "United States of America")
myMap.set('Fr', "France")
myMap.set('IN', "India") // this will not be considered as map takes only unique entries


// console.log(myMap);

for (const [key, value] of myMap) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const elememt of myObject) {
    console.log(key, ':-', value);
    
}
