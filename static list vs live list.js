// static list 
// const listItems = document.querySelectorAll(".todo-list li");
// const sixItem = document.createElement("li");
// sixItem.textContent = "item 6";
// const ul = document.querySelector(".todo-list");
// ul.append(sixItem)
// console.log(listItems);

// live list
const ul = document.querySelector(".todo-list"); 
const listItems = ul.getElementsByTagName("li");
const sixItem = document.createElement("li");
sixItem.textContent = "item 6";

ul.append(sixItem)
console.log(listItems);
