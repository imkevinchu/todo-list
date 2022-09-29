import { TodoList } from "./TodoList";
import { Task } from "./Task";

export class Storage {
  static parseLocalStorage = () => {
    const todoListArray = Object.assign(
      new TodoList(),
      JSON.parse(localStorage.getItem("todolist"))
    );
    todoListArray.tasks = todoListArray.tasks.map((task) =>
      Object.assign(new Task(), task)
    );
    return todoListArray;
  };

  static saveTodoList = (todoListArray) => {
    localStorage.setItem("todolist", JSON.stringify(todoListArray));
  };

  static addTask = (todoListArray, newTask) => {
    todoListArray.addTask(newTask);
    Storage.saveTodoList(todoListArray);
  };

  static removeTask = (todoListArray, newTaskName) => {
    todoListArray.removeTask(newTaskName);
    Storage.saveTodoList(todoListArray);
  };

  static saveEditedTask = (todoListArray, newTaskName, todoNameInput) => {
    todoListArray.getTask(newTaskName).name = todoNameInput.value;
    Storage.saveTodoList(todoListArray);
  };

  static toggleTaskDone = (todoListArray, newTaskName) => {
    todoListArray.getTask(newTaskName).toggleDone();
    Storage.saveTodoList(todoListArray);
  };
}
