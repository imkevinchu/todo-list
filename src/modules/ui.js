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

  static createCheckbox = (newTaskName, isDone, todoItem) => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "checkbox");
    if (isDone) {
      checkbox.checked = true;
      todoItem.classList.add("done");
    }
    label.appendChild(checkbox);

    const toggleTaskDone = () => {
      todoListArray.getTask(newTaskName).toggleDone();
      Storage.saveTodoList(todoListArray);
      UI.displayTodoList();
    };

    const toggleCheckbox = (e) => {
      if (e.target.checked) {
        todoItem.classList.add("done");
        toggleTaskDone();
      } else {
        todoItem.classList.remove("done");
        toggleTaskDone();
      }
    };

    checkbox.addEventListener("change", toggleCheckbox);
    return label;
  };

  static createTaskName = (newTaskName, todoNameInput) => {
    const todoName = document.createElement("div");
    todoName.classList.add("todo-name");

    todoNameInput.setAttribute("type", "text");
    todoNameInput.setAttribute("value", `${newTaskName}`);
    todoNameInput.setAttribute("readonly", true);
    todoName.appendChild(todoNameInput);

    return todoName;
  };

  static createTodoActions = (newTaskName, todoNameInput) => {
    const todoActions = document.createElement("div");
    todoActions.classList.add("todo-actions");

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

    const saveEditedTaskName = () => {
      todoNameInput.setAttribute("readonly", true);
      todoListArray.getTask(newTaskName).name = todoNameInput.value;
      Storage.saveTodoList(todoListArray);
      UI.displayTodoList();
    };

    const editTaskName = () => {
      todoNameInput.removeAttribute("readonly");
      todoNameInput.focus();
      todoNameInput.select();
      todoNameInput.addEventListener("change", saveEditedTaskName);
    };

    const removeTask = () => {
      todoListArray.removeTask(newTaskName);
      Storage.saveTodoList(todoListArray);
      UI.displayTodoList();
    };

    editBtn.addEventListener("click", editTaskName);
    deleteBtn.addEventListener("click", removeTask);

    return todoActions;
  };

  static createTodoItem = (newTaskName, isDone) => {
    const todoItem = document.createElement("div");
    const todoNameInput = document.createElement("input");
    todoItem.classList.add("todo-item");

    const label = UI.createCheckbox(newTaskName, isDone, todoItem);
    const todoName = UI.createTaskName(newTaskName, todoNameInput);
    const todoActions = UI.createTodoActions(newTaskName, todoNameInput);

    todoItem.appendChild(label);
    todoItem.appendChild(todoName);
    todoItem.appendChild(todoActions);

    return todoItem;
  };

  static addInputEventListeners = () => {
    const addNewTaskBtn = document.getElementById("add-new-task-btn");
    const todoInput = document.getElementById("new-task-input");

    addNewTaskBtn.addEventListener("click", UI.addNewTask);
    todoInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        UI.addNewTask();
      }
    });
  };

  static initializeApp = () => {
    UI.addInputEventListeners();

    window.onload = () => {
      UI.displayTodoList();
    };
  };
}
