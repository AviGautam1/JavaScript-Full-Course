const allButton = document.querySelectorAll(".my-buttons button");
// firstButton.addEventListener("click", function(){
//     console.log("You Clicked Me");
// })
// for(let button of allButton){
//     button.addEventListener("click", function(){
//         console.log(this.textContent);
//     })
// }

allButton.forEach(button =>{
    button.addEventListener("click", (e)=>{
        e.target.style.backgroundColor = "pink";
        e.target.style.color = "#444";
    })
})