console.log("promisses");

let prom1= new Promise((resolve, reject) => {
    let a =Math.random();
    if(a<0.5){
        reject("No Random number generated")
    }
    else{
        setTimeout(() => {
            console.log("hello after 2 sec")
            resolve("raza")
        
        
    }, 2000);
}
    })
    // setTimeout(() => {
    //     console.log("hello after 2 sec")
    //     resolve("raza")
    // }
    // , 2000);


prom1.then((a) => {
 console.log(a)
}) .catch((e) => {
    console.log(e)
})
