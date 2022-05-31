// intro to events 
// addEventListener method 
const btn = document.querySelector(".btn-headline");
// function clickMe(){
//     console.log("You Clicked Me !!!!");
// }
// btn.addEventListener("click", function clickMe(){
//     console.log("You Clicked Me !!!!");
// });

btn.addEventListener("click", ()=>{
    console.log("arrow function");
})
