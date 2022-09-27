import { Task } from "./Task";
import { Storage } from "./Storage";

const todoListArray = Storage.parseLocalStorage();

export class UI {
  static addNewTask = () => {
    const todoInput = document.getElementById("new-task-input");
    const newTask = new Task(todoInput.value, false);

    if (todoInput.value == "") {
      alert("Please input a task");
      return false;
    }

    todoListArray.addTask(newTask);
    Storage.saveTodoList(todoListArray);
    todoInput.value = "";
    UI.displayTodoList();
  };

  static displayTodoList = () => {
    const todoList = document.getElementById("todo-list");

    todoList.innerHTML = "";
    todoListArray.tasks.forEach((todo) => {
      todoList.appendChild(UI.createTodoItem(todo.name, todo.isDone));
    });
  };

  static createTodoItem = (newTaskName, isDone) => {
    const todoItem = document.createElement("div");
    const todoName = document.createElement("div");
    const todoActions = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoName.classList.add("todo-name");
    todoActions.classList.add("todo-actions");

    /* Create checkbox element */

    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "checkbox");
    if (isDone) {
      checkbox.checked = true;
      todoItem.classList.add("done");
    }
    label.appendChild(checkbox);

    /* Create task name element */

    const todoNameInput = document.createElement("input");
    todoNameInput.setAttribute("type", "text");
    todoNameInput.setAttribute("value", `${newTaskName}`);
    todoNameInput.setAttribute("readonly", true);
    todoName.appendChild(todoNameInput);

    /* Create edit and delete buttons */

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
        todoListArray.getTask(newTaskName).toggleDone();
        Storage.saveTodoList(todoListArray);
      } else {
        todoItem.classList.remove("done");
        todoListArray.getTask(newTaskName).toggleDone();
        Storage.saveTodoList(todoListArray);
      }
      UI.displayTodoList();
    });

    editBtn.addEventListener("click", () => {
      todoNameInput.removeAttribute("readonly");
      todoNameInput.focus();
      todoNameInput.select();
      todoNameInput.addEventListener("blur", () => {
        todoNameInput.setAttribute("readonly", true);
        todoListArray.getTask(newTaskName).name = todoNameInput.value;
        Storage.saveTodoList(todoListArray);
        UI.displayTodoList();
      });
    });

    deleteBtn.addEventListener("click", () => {
      todoListArray.removeTask(newTaskName);
      Storage.saveTodoList(todoListArray);
      UI.displayTodoList();
    });

    todoItem.appendChild(label);
    todoItem.appendChild(todoName);
    todoItem.appendChild(todoActions);
    return todoItem;
  };

  static initializeApp = () => {
    const addNewTaskBtn = document.getElementById("add-new-task-btn");
    const todoInput = document.getElementById("new-task-input");

    addNewTaskBtn.addEventListener("click", UI.addNewTask);
    todoInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        UI.addNewTask();
      }
    });

    window.onload = () => {
      UI.displayTodoList();
    };
  };
}
