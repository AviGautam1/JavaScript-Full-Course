// setTimeout
console.log("Script Start");
// setTimeout(()=>{
//     console.log("inside settimeout");
// }, 10000);
// console.log("Script End");

const id = setTimeout(()=>{
    console.log("inside settimeout");
}, 0);
for(let i = 0; i<= 100; i++){
    console.log("hello");
}
console.log("setTimeout is is", id);
console.log("clearing timeout");
//clear timeout
clearTimeout(id);
console.log("Script End");