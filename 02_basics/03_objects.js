// singleton
// Object.create: Object creation using Constructor 

// object literals

const mySym = Symbol("key1") // symbol data type declaration


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // now mySym will be treated as a symbol else in mySym: "mykey1", it is treated as a string 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) // way to print when variable is used with " "
// console.log(JsUser[mySym]) // way to print symbol 

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // no further changes in the object will be reflected


JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
} // 'this' is used to access the keys in a given object, i.e., the object we are working on


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());