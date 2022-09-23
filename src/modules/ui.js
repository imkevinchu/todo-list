const addNewTaskBtn = document.getElementById("add-new-task-btn");
const todoInput = document.getElementById("new-task-input");
const todoList = document.getElementById("todo-list");

const addNewTask = () => {
  if (todoInput.value == "") {
    alert("Please input a task");
    return false;
  }
  let newTask = document.createElement("ul");
  newTask.classList.add("todo-item");
  newTask.innerText = todoInput.value;
  todoList.appendChild(newTask);

  todoInput.value = "";
  newTask.addEventListener("click", () => {
    todoList.removeChild(newTask);
  });
};

addNewTaskBtn.addEventListener("click", addNewTask);
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addNewTask();
  }
});
