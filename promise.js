// Promise produce
const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
const friedRicePromise = new Promise((resolve, reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salts") && bucket.includes("rice")){
        resolve("Fried Rice");
    }else{
        reject("Could not find");
    }
})

// promice consume
friedRicePromise.then((myFriedRice)=>{    //for resoleve promise
    console.log("lets eat", myFriedRice);
// },(error)=>{ //for error occured
//     console.log(error);
// })
}
).catch((error)=>{
    console.log(error);
})