let myDate = new Date()
// console.log(myDate)
//2025-05-27T08:11:45.082Z

// console.log(myDate.toString())
//Tue May 27 2025 08:13:39 GMT+0000 (Coordinated Universal Time)


// console.log(myDate.toDateString())
// Tue May 27 2025


// console.log(myDate.toISOString())
// 2025-05-27T11:09:20.737Z


// console.log(myDate.toJSON())
// 2025-05-27T11:10:30.982Z


// console.log(myDate.toLocaleDateString())
// 5/27/2025


// console.log(myDate.toLocaleString())
// 5/27/2025, 11:12:21 AM


// console.log(myDate.toLocaleTimeString())
// 11:13:06 AM


// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate = new Date(2023, 0, 23, 5, 3 , 46)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // gives number of milli seconds from 01 jan 1970
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay()); 1: Monday, 2: Tuesday and so on


newDate.toLocaleString('default', {
    weekday: "long",
    
})
