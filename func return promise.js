// function returning promise
function ricePromise(){
    const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
    return new Promise((resolve, reject)=>{
        if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
            resolve("Fried Rice");
        }else{
            reject("Could not find");
        }
    })
    
}

ricePromise().then((myFriedRice)=>{    //for resoleve promise
    console.log("lets eat", myFriedRice);
// },(error)=>{ //for error occured
//     console.log(error);
// })
}
).catch((error)=>{  //catch method use for error handling
    console.log(error);
})