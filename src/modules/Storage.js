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
}
