const addNewTaskBtn = document.getElementById("add-new-task-btn");
const todoInput = document.getElementById("new-task-input");
const todoList = document.getElementById("todo-list");

const createTodoItem = (newTaskName) => {
  const todoItem = document.createElement("div");
  const todoName = document.createElement("div");
  const todoActions = document.createElement("div");
  todoItem.classList.add("todo-item");
  todoName.classList.add("todo-name");
  todoActions.classList.add("todo-actions");

  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "checkbox");
  label.appendChild(checkbox);

  const todoNameInput = document.createElement("input");
  todoNameInput.setAttribute("type", "text");
  todoNameInput.setAttribute("value", `${newTaskName}`);
  todoNameInput.setAttribute("readonly", true);
  todoName.appendChild(todoNameInput);

  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  const editBtnIcon = document.createElement("i");
  const deleteBtnIcon = document.createElement("i");
  editBtn.classList.add("edit");
  deleteBtn.classList.add("delete");
  editBtnIcon.classList.add("fa-solid", "fa-pen");
  deleteBtnIcon.classList.add("fa-solid", "fa-trash");
  editBtn.appendChild(editBtnIcon);
  deleteBtn.appendChild(deleteBtnIcon);
  todoActions.appendChild(editBtn);
  todoActions.appendChild(deleteBtn);

  checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      todoItem.classList.add("done");
    } else {
      todoItem.classList.remove("done");
    }
  });

  editBtn.addEventListener("click", () => {
    todoNameInput.removeAttribute("readonly");
    todoNameInput.focus();
    todoNameInput.select();
    todoNameInput.addEventListener("blur", () => {
      todoNameInput.setAttribute("readonly", true);
    });
  });

  deleteBtn.addEventListener("click", () => {
    if (todoItem.parentNode) {
      todoItem.parentNode.removeChild(todoItem);
    }
  });

  todoItem.appendChild(label);
  todoItem.appendChild(todoName);
  todoItem.appendChild(todoActions);
  return todoItem;
};

const addNewTask = () => {
  if (todoInput.value == "") {
    alert("Please input a task");
    return false;
  }
  const newTask = createTodoItem(todoInput.value);
  todoList.appendChild(newTask);

  todoInput.value = "";
};

addNewTaskBtn.addEventListener("click", addNewTask);
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addNewTask();
  }
});
