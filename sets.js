// sets are iterable and stored only unique values no duplcatation of values 
// new Set() method --> for create new set 
// const numbers = new Set([1, 2, 3, 4]);
// console.log(numbers);

// add () --> for add items in Set 
// has() --> returns true if items is present in Set
// const myNumber = new Set();
// myNumber.add(1);
// myNumber.add(["avi", "deepak"]);
// if(myNumber.has(1)){
//     console.log("1 is present");
// }else{
//     console.log("1 is not present");
// }
// console.log(myNumber);

// set is iterable means we can put for..of loop
const myNumber = new Set();
myNumber.add(1);
myNumber.add(2);
myNumber.add(3);
myNumber.add(4);
myNumber.add(5);
myNumber.add(6);
for(let number of myNumber){
    console.log(number);
}
