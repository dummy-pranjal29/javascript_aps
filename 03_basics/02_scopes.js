var c = 300 // var is avoided as it does not follow the scope. var acts as a global data type
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    console.log(b);
    c += 1;
   
}



console.log(a);
// console.log(b);
console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



// addTwo(5)
const addTwo = function(num){
    return num + 2
}