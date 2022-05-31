// method --> function inside object are called method.
// to access object a method can use this keyword.

// const userInfo = {
//     fName : "Vaibhav",
//     age : 25,
//     about : function() {
//         console.log(`The user name is ${this.fName} and user age is ${this.age}`);
        
//     }
// }
// userInfo.about();

function personInfo() {
    console.log(`The user name is ${this.fName} and user age is ${this.age}`);
    
}
const userInfo1 = {
    fName : "Vaibhav",
    age : 25,
    about : personInfo
}
const userInfo2 = {
    fName : "avinesh",
    age : 22,
    about : personInfo
}
const userInfo3 = {
    fName : "udit",
    age : 23,
    about : personInfo
}
userInfo1.about();
userInfo2.about();
userInfo3.about();

// use strict mode 
// function myFunc(){
//     "Use strict";
//     console.log(this);
// }
// myFunc();

