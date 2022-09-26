export class Task {
  constructor(name) {
    this._name = name;
    this._isDone = false;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value) {
      this._name = value;
    }
  }

  get isDone() {
    return this._isDone;
  }

  set isDone(value) {
    if (value === true || value === false) {
      this._isDone = value;
    }
  }

  toggleDone() {
    this._isDone = !this._isDone;
  }
}
