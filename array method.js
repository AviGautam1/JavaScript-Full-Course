// important aaray methods 
const num = [5, 2, 6, 8];
// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }
// for(let i = 0; i<num.length; i++){
//     myFunc(num[i], i);
// }

// forEach() method 
// num.forEach(myFunc);
num.forEach(function(number, index){
    console.log(`index is ${index} number is ${number}`);

});

// Map() method 
const numbers = [2, 3, 5, 7];
// const square = function(number){
//     return number * number;
// }
const result = numbers.map(function(number){
    return number * number;
});
console.log(result);

// filter() method
const myNum = [1, 2, 4, 5, 6, 8];
const isEven = function(number){
    return number % 2 === 0;

}
const evenNumber = myNum.filter(isEven);
console.log(evenNumber);

// reduce() method 
// const int = [1, 2, 3, 4, 5, 6, 7, 8];
// const sum = int.reduce((value, result) => {
//     return value + result;

// }, 100);
// console.log(sum);

const userCart = [
    {productId:1, productName:"mobile", price:15000},
    {productId:2, productName:"laptop", price:25000},
    {productId:3, productName:"tv", price:15000}
]
const totalprice = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;

}, 0);
console.log(totalprice);

// sort () method 
const userName = ["avi", "deepak", "aman", "ankur", "ATUL"];
userName.sort();
console.log(userName);

// acsending order sorting 
const num1 = [2, 1, 3, 8, 5, 4]; //not sort numbers but sort by ASCII code
// num.sort((a ,b)=> a - b);
num1.sort((a ,b) => {
    return a - b;
})
console.log(num1);

// descending order sorting 
const digit = [2, 3, 5, 4, 10, 22, 1, 258]
digit.sort((a , b) => {
    return b - a;
})
console.log(digit);

// find method 
const myArray = ["avi", "deepak", "dog"];
// function isLength(string) {
// //     return string.length === 3;
// // }
const result1 = myArray.find((string) => string.length === 3);
console.log(result1);

const user = [
    {userID:1, userName:"avinesh"},
    {userID:2, userName:"deepak"},
    {userID:3, userName:"ankur"},
    {userID:4, userName:"aashu"}

]

const myUser = user.find((user) =>{
    return user.userID === 2;
})
console.log(myUser);


// every() method
// const myNumber = [2, 4, 6, 8, 10];
// // const ans = myNumber.every((number) => number % 2 === 0);
// const ans = myNumber.every((number) => {
//     return number % 2 === 0;
// })
// console.log(ans);   


// Some() method 
const myNumber = [1, 3, 4, 9];
const ans = myNumber.some((number) => number % 2 ===0);
console.log(ans);

// fill () method 
const myarray = [1, 2, 3, 4, 5, 6, 7, 8];
const ans1 = myarray.fill(0, 1, 5);
console.log(ans1);

// splice () method 
// delete items
// const names = ["avinesh", "deepak", "ankur", "udit"];
// names.splice(1, 2);
// console.log(names);

// insert items 
// const names = ["avinesh", "deepak", "ankur", "udit"];
// names.splice(1, 0, "atul");
// console.log(names);

// insert and delete items together
const names = ["avinesh", "deepak", "ankur", "udit"];
names.splice(1, 2, "insert1", "isert2");
console.log(names);






