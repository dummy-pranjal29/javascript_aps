const coding = ["js", "ruby", "java", "python", "cpp"]
const nums = [1, 2, 3, 4, 5]


// coding.forEach( function (val){
//     console.log(val);
// } )
// using FUNCTION keyword



// coding.forEach( (item) => {
//     console.log(item);
// } )
// using ARROW FUNCTIONS



// function printMe(item){
//     console.log(item);
// }

// OR


// const printMe = function(item){
//     console.log(item);
// }

// coding.forEach(printMe)



nums.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )
coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    // console.log(item.languageName);
} )