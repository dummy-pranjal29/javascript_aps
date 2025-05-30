
const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const desi_heros = ["shaktiman", "krish", "chhota bheem"] 

// marvel_heros.push(dc_heros) // adds the 2nd array as the last element of the 1st array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //accessing element in nested array

const allHeros = marvel_heros.concat(dc_heros.concat(desi_heros)) // concats TWO OR MORE arrays with indivisual elements
// console.log(allHeros);


const all_new_heros = [...marvel_heros, ...dc_heros, ...desi_heros] // concats TWO OR MORE arrays with indivisual elements
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) // removes all the nested arrays and forms a single array with each element indivisually representing each index
// console.log(real_another_array);



// console.log(Array.isArray(["Hitesh"])) // true
// console.log(Array.isArray("Hitesh")) // false



// console.log(Array.from("Pranjal")) // ['P', 'r', 'a', 'n', 'j', 'a', 'l']

// console.log(Array.from(12345))
// []

console.log(Array.from(true));
// []


// console.log(Array.from({name: "hitesh"})) // interesting
// []


// console.log(Array.from({name: "hitesh", age: 22}))
// []


// console.log(Array.from(Object.keys({name: "hitesh", age: 22})))
// ['name', 'age']


// console.log(Array.from(Object.values({name: "hitesh", age: 22})))
// ['hitesh', 22]


// console.log(Array.from(Object.entries({name: "hitesh", age: 22})))
// [ [ 'name', 'hitesh' ], [ 'age', 22 ] ]


let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1, score2, score3));
