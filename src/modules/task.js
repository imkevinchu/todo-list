export class Task {
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  get name() {
    return this.name;
  }

  set name(value) {
    if (value) {
      this.name = value;
    }
  }

  get description() {
    return this.description;
  }

  set description(value) {
    if (value) {
      this.description = value;
    }
  }

  get dueDate() {
    return this.dueDate;
  }

  set dueDate(value) {
    if (value) {
      this.dueDate = this.dueDate;
    }
  }

  get priority() {
    return this.priority;
  }

  set priority(value) {
    if (value) {
      this.priority = value;
    }
  }
}
