const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const handleToDoSubmit = (e) => {
  e.preventDefault();
  console.log(todoInput.value);
};

todoForm.addEventListener("submit", handleToDoSubmit);
