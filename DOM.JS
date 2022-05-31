// DOM --> Document Object Model
// select element using get element by id 
// const mainHeading = (document.getElementById("main-heading"));
// console.log(mainHeading);

// select element using query selector 
const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);
const header = document.querySelector(".header");
const header1 = document.querySelectorAll(".header");
console.log(header);

// get element using getelement by class name
// const navItems = document.getElementsByClassName("nav-item"); //HTMLCollection()
// console.log(navItems);
// console.log(typeof navItems);

// get element using querySelectorAll
// const navItem = document.querySelectorAll("nav-items"); //NodeList []
// console.log(navItem);

const navItems = document.getElementsByTagName("a");
for(let i = 0; i < navItems.length; i++){
// console.log(navItems[i]);
const navItem = navItems[i];
navItem.style.backgroundColor = "#fff";
navItem.style.color = "green";
}
