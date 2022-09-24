export class TodoList {
  constructor() {
    this.tasks = [];
  }

  get tasks() {
    return this.tasks;
  }

  set tasks(value) {
    if (value) {
      this.tasks = value;
    }
  }

  addTask(newTask) {
    if (!this.isInList(newTask)) {
      this.tasks.push(newTask);
    }
  }

  removeTask(taskName) {
    this.tasks = this.tasks.filter((task) => task.name !== taskName);
  }

  getTask(taskName) {
    return this.tasks.find((task) => task.name === taskName);
  }

  sortTasks() {
    this.tasks.sort((a, b) => a.timeCreated - b.timeCreated);
  }

  isInList(someTask) {
    return this.tasks.some((task) => task.name === someTask.name);
  }

  isEmpty() {
    return this.tasks.length === 0;
  }
}
