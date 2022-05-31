// keyress event 
const body = document.body;
body.addEventListener("keypress", (e)=>{
    console.log(e.key);
})

// mouseover event
const mainHeading = document.querySelector(".btn-headline");
mainHeading.addEventListener("mouseover", ()=>{
    console.log("mouse over event occured !!!");
})