export class Task {
  constructor(name) {
    this.name = name;
    this.isDone = false;
    this.timeCreated = new Date().getTime();
  }

  get name() {
    return this.name;
  }

  set name(value) {
    if (value) {
      this.name = value;
    }
  }

  get isDone() {
    return this.isDone;
  }

  set isDone(value) {
    if (value === true || value === false) {
      this.isDone = value;
    }
  }

  toggleDone() {
    this.isDone = !this.isDone;
  }

  get timeCreated() {
    return this.timeCreated;
  }
}
