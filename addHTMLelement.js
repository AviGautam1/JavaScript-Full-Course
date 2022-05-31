// Add html elemens to page 
const newTodoItem = document.createElement("li");
// console.log(newTodoItem);
const newTodoItemText = document.createTextNode("Teach Student");
const todoList = document.querySelector(".todo-list");
newTodoItem.append(newTodoItemText);
todoList.append(newTodoItem);
console.log(newTodoItem);


// innerhtml to add html element 
// const todoList = document.querySelector(".todo-list");
// // console.log(todoList);
// todoList.innerHTML += "<li>New Todo</li>";