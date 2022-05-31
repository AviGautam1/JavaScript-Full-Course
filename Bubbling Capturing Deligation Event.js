// console.log("hello");
// Event Capturing
const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
// child.addEventListener("click", ()=>{
//     console.log("Captured Child !!");
// },
// true
// )
// parent.addEventListener("click", ()=>{
//     console.log("Captured Parent !!");
// },
// true
// )
// grandparent.addEventListener("click", ()=>{
//     console.log("Captured GrandParent !!");
// },
// true
// )
// document.body.addEventListener("click", ()=>{
//     console.log("Captured Body !!");
// },true
// )

// Even Bubbling 
// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
// child.addEventListener("click", ()=>{
//     console.log("Bubble Child !!");
// })
// parent.addEventListener("click", ()=>{
//     console.log("Bubble Parent !!");
// })
// grandparent.addEventListener("click", ()=>{
//     console.log("Bubble GrandParent !!");
// })
// document.body.addEventListener("click", ()=>{
//     console.log("Bubble Body !!");
// })

// Event Deligation
grandparent.addEventListener("click", (e)=>{
    console.log(e.target);
})