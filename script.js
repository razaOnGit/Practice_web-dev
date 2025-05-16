// console.log("hello world");
// console.log("code is running");
// console.log("this is a test");

/// Method Pro User  , reduce method
// let a=6;
// function factorial(n){
//     let arr=Array.from(Array(n+1).keys())
//     console.log(arr.slice(1,));
//    let c = arr.slice(1,).reduce((a,b)=>{
//  return a*b
//     })

// console.log(c);
// }
// factorial(a);

// Method Easy Pizy
let a = 6;
function factorial(n) {
  let arr = 1;
  if (n <= 0) {
    return 0;
  }
  for (let i = 1; i <= n; i++) {
    arr = arr * i;
  }
  return arr;
}
console.log(factorial(a));
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
