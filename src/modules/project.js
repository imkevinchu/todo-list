export class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  get name() {
    return this.name;
  }

  set name(value) {
    if (value) {
      this.name = value;
    }
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
    if (!this.isInProject(newTask)) {
      this.tasks.push(newTask);
    }
  }

  removeTask(taskName) {
    this.tasks = this.tasks.filter((task) => task.name !== taskName);
  }

  getTask(taskName) {
    return this.tasks.find((task) => task.name === taskName);
  }

  isInProject(someTask) {
    return this.tasks.some((task) => task.name === someTask.name);
  }

  isEmpty() {
    return this.tasks.length === 0;
  }
}
