export class TodoList {
  constructor() {
    this._tasks = [];
  }

  get tasks() {
    return this._tasks;
  }

  set tasks(value) {
    if (value) {
      this._tasks = value;
    }
  }

  addTask(newTask) {
    if (!this.isInList(newTask)) {
      this._tasks.push(newTask);
    }
  }

  removeTask(taskName) {
    this._tasks = this._tasks.filter((task) => task.name !== taskName);
  }

  getTask(taskName) {
    return this._tasks.find((task) => task.name === taskName);
  }

  sortTasks() {
    this._tasks.sort((a, b) => a.timeCreated - b.timeCreated);
  }

  isInList(someTask) {
    return this._tasks.some((task) => task.name === someTask.name);
  }

  isEmpty() {
    return this._tasks.length === 0;
  }
}
