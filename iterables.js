// iterables --> jisme hum for..of loop laga sakte he 
// string , array are iterables
const firstName = "Avinesh";
for(let char of firstName){
    console.log(char);
}

const items = ["item1", "item2", "item3"];
for(let item of items){
    console.log(item);
}

// array like object 
// jiske pass length property hot He
// or jisko index se access kar sakte He--> like "string"
const fName = "Avinesh";
console.log(fName.length);
console.log(fName[4]);
