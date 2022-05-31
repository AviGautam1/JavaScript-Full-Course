// before after method 
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach Students";
const todoList = document.querySelector(".todo-list");
todoList.before(newTodoItem);
todoList.after(newTodoItem);



