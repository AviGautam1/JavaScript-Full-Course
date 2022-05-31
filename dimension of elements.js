// how to get dimension of elements 
// height width 
const sectionTodo = document.querySelector(".section-todo");
const info1 = sectionTodo.getBoundingClientRect();
const info2 = sectionTodo.getBoundingClientRect().height;
const info3 = sectionTodo.getBoundingClientRect().width;
console.log(info1);
console.log(info2);
console.log(info3);