//   function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 3000);
//     })
// }


// console.log("Before getData()");

// console.log("Load Data...");

// let data = getData();
// console.log(getData());


// console.log("processing data...");

// console.log("task2");

// after this below code will execute , but i want
// to wait for the promise to resolve before executing the next line
//so use then() method
// for data to be available new method is used aasync/await
// data.then((value)=>{
//     console.log("Data is: " + value);

// console.log("processing data...");



// console.log("task2");


// })       // clean code using async/await

// async function getData() {
//    let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // .then(response => response.json())
//     // .then(json => console.log(json))
//     let data = await x.json();
//     console.log(data);
//     // console.log(x);
//     // return 455;
// }

async function getData() {
 let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },  
            })   
    let data = await x.json();
    return data;
    
  }

async function main(){
console.log("Before getData()");

console.log("Load Data...");

let data = await getData();
console.log(data);


console.log("processing data...");

console.log("task2");

}
main();
