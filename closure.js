// closure --> function return function 
function outerFunction(){
    function innerFunction(){
        console.log("hello closure");
    }
    return innerFunction;
}
const ans = outerFunction();
// console.log(ans);
ans();

// examples of closure 
function hello(x){
    const a = "varA";
    const b = "varB";
    return function(){
        console.log(a, b, x);
    }
}
const result = hello("args");
result();

function func(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log("Hi you called me!!");
            counter++;
        }else{
            console.log("Already called!!");

        }
    }
}
const output1 = func();
output1();
output1();
output1();
const output2 = func();
output2();
output2();
output2();
