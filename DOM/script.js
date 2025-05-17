
// let boxes=document.getElementsByClassName("box")

// let boxes = document.querySelector(".container").children

// function getRandomColor() {
//     let val1 = Math.ceil(Math.random() * 255);  
//     let val2 = Math.ceil(Math.random() * 255);
//     let val3 =Math.ceil(Math.random() * 255);
//     return `rgb(${val1},${val2},${val3})`;
   
// }


// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor = getRandomColor();
//     // e.style.color=getRandomColor();
// })

   // Asynchronous JavaScript

// console.log("hello world")
// console.log("hello raza")

// setTimeout(() => {
//     console.log("hello after 2 sec")
// }, 2000);

// console.log ("the end  ")

    // callback function

// const callback = (arg)=>{
//     console.log(arg)
// }
//  const loadScript = (src, callback) => {
//         let sc= document.createElement("script")
//         sc.src = src;
//         sc.onload = callback("raza");
//         document.head.append(sc)
//     }

//     // function ko hmlog as a variable pass karte hain
// loadScript("https://code.jquery.com/jquery-3.6.0.min.js", callback);
// // multiple callback ke andr callback chahiye hoga 
// bhut functional programming ho jayegi  
// complexity badh jayegi code ki 

// so promises use karte hain 

// promise ek object hai jo future me kisi value ko represent karta hai
// promise ek function hai jo do cheezein return karta hai
// 1. resolve
// 2. reject
// resolve ka matlab hai ki promise complete ho gaya hai
// reject ka matlab hai ki promise complete nahi hua hai
// promise ka ek state hota hai
// 1. pending
// 2. fulfilled
// 3. rejected
// pending ka matlab hai ki promise complete nahi hua hai
// fulfilled ka matlab hai ki promise complete ho gaya hai
// rejected ka matlab hai ki promise complete nahi hua hai
// promise ka ek method hota hai
// 1. then
// 2. catch
// then ka matlab hai ki promise complete ho gaya hai
// catch ka matlab hai ki promise complete nahi hua hai
// promise ka ek method hota hai
// 1. all
// 2. race
// all ka matlab hai ki sabhi promise complete ho gaya hai
// race ka matlab hai ki sabse pehle promise complete ho gaya hai
// promise ka ek method hota hai
// 1. allSettled
// 2. any
// allSettled ka matlab hai ki sabhi promise complete ho gaya hai
// any ka matlab hai ki ek promise complete ho gaya hai
// promise ka ek method hota hai
// 1. finally
// finally ka matlab hai ki promise complete ho gaya hai


