/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Task = /*#__PURE__*/function () {
  function Task(name) {
    _classCallCheck(this, Task);

    this._name = name;
    this._isDone = false;
    this._timeCreated = new Date().getTime();
  }

  _createClass(Task, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(value) {
      if (value) {
        this._name = value;
      }
    }
  }, {
    key: "isDone",
    get: function get() {
      return this._isDone;
    },
    set: function set(value) {
      if (value === true || value === false) {
        this._isDone = value;
      }
    }
  }, {
    key: "toggleDone",
    value: function toggleDone() {
      this._isDone = !this._isDone;
    }
  }, {
    key: "timeCreated",
    get: function get() {
      return this._timeCreated;
    },
    set: function set(value) {
      if (value) {
        this._timeCreated = value;
      }
    }
  }]);

  return Task;
}();

/***/ }),

/***/ "./src/modules/todolist.js":
/*!*********************************!*\
  !*** ./src/modules/todolist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoList": () => (/* binding */ TodoList)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var TodoList = /*#__PURE__*/function () {
  function TodoList() {
    _classCallCheck(this, TodoList);

    this._tasks = [];
  }

  _createClass(TodoList, [{
    key: "tasks",
    get: function get() {
      return this._tasks;
    },
    set: function set(value) {
      if (value) {
        this._tasks = value;
      }
    }
  }, {
    key: "addTask",
    value: function addTask(newTask) {
      if (!this.isInList(newTask)) {
        this._tasks.push(newTask);
      }
    }
  }, {
    key: "removeTask",
    value: function removeTask(taskName) {
      this._tasks = this._tasks.filter(function (task) {
        return task.name !== taskName;
      });
    }
  }, {
    key: "getTask",
    value: function getTask(taskName) {
      return this._tasks.find(function (task) {
        return task.name === taskName;
      });
    }
  }, {
    key: "sortTasks",
    value: function sortTasks() {
      this._tasks.sort(function (a, b) {
        return a.timeCreated - b.timeCreated;
      });
    }
  }, {
    key: "isInList",
    value: function isInList(someTask) {
      return this._tasks.some(function (task) {
        return task.name === someTask.name;
      });
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this._tasks.length === 0;
    }
  }]);

  return TodoList;
}();

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todolist */ "./src/modules/todolist.js");


var todoListArray = new _todolist__WEBPACK_IMPORTED_MODULE_1__.TodoList();
var addNewTaskBtn = document.getElementById("add-new-task-btn");
var todoInput = document.getElementById("new-task-input");
var todoList = document.getElementById("todo-list");

var createTodoItem = function createTodoItem(newTaskName, isDone) {
  var todoItem = document.createElement("div");
  var todoName = document.createElement("div");
  var todoActions = document.createElement("div");
  todoItem.classList.add("todo-item");
  todoName.classList.add("todo-name");
  todoActions.classList.add("todo-actions");
  var label = document.createElement("label");
  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "checkbox");

  if (isDone) {
    checkbox.checked = true;
    todoItem.classList.add("done");
  }

  label.appendChild(checkbox);
  var todoNameInput = document.createElement("input");
  todoNameInput.setAttribute("type", "text");
  todoNameInput.setAttribute("value", "".concat(newTaskName));
  todoNameInput.setAttribute("readonly", true);
  todoName.appendChild(todoNameInput);
  var editBtn = document.createElement("button");
  var deleteBtn = document.createElement("button");
  var editBtnIcon = document.createElement("i");
  var deleteBtnIcon = document.createElement("i");
  editBtn.classList.add("edit");
  deleteBtn.classList.add("delete");
  editBtnIcon.classList.add("fa-solid", "fa-pen");
  deleteBtnIcon.classList.add("fa-solid", "fa-trash");
  editBtn.appendChild(editBtnIcon);
  deleteBtn.appendChild(deleteBtnIcon);
  todoActions.appendChild(editBtn);
  todoActions.appendChild(deleteBtn);
  checkbox.addEventListener("change", function (e) {
    if (e.target.checked) {
      todoItem.classList.add("done");
      todoListArray.getTask(newTaskName).toggleDone();
    } else {
      todoItem.classList.remove("done");
      todoListArray.getTask(newTaskName).toggleDone();
    }

    displayTodoList();
  });
  editBtn.addEventListener("click", function () {
    todoNameInput.removeAttribute("readonly");
    todoNameInput.focus();
    todoNameInput.select();
    todoNameInput.addEventListener("blur", function () {
      todoNameInput.setAttribute("readonly", true);
      todoListArray.getTask(newTaskName).name = todoNameInput.value;
      displayTodoList();
    });
  });
  deleteBtn.addEventListener("click", function () {
    todoListArray.removeTask(newTaskName);
    displayTodoList();
  });
  todoItem.appendChild(label);
  todoItem.appendChild(todoName);
  todoItem.appendChild(todoActions);
  return todoItem;
};

var addNewTask = function addNewTask() {
  if (todoInput.value == "") {
    alert("Please input a task");
    return false;
  }

  var newTask = new _task__WEBPACK_IMPORTED_MODULE_0__.Task(todoInput.value, false);
  todoListArray.addTask(newTask);
  displayTodoList();
  todoInput.value = "";
};

var displayTodoList = function displayTodoList() {
  todoList.innerHTML = "";

  todoListArray._tasks.forEach(function (todo) {
    todoList.appendChild(createTodoItem(todo.name, todo.isDone));
  });
};

addNewTaskBtn.addEventListener("click", addNewTask);
todoInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addNewTask();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  overflow: scroll;\n}\n\n.input-container {\n  margin-top: 33vh;\n}\n\nh1 {\n  text-align: center;\n}\n\ninput:not([type=\"checkbox\"]),\nbutton {\n  appearance: none;\n  border: none;\n  outline: none;\n  background: none;\n  cursor: initial;\n}\n\n.input {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  font-size: large;\n  margin-bottom: 1rem;\n}\n\n.input i {\n  font-size: 28px;\n}\n\n.input i:hover {\n  cursor: pointer;\n}\n\n.input input[type=\"text\"] {\n  background-color: whitesmoke;\n  border-radius: 16px;\n  margin-right: 12px;\n  border: none;\n  padding: 6px 16px;\n  font-size: 16px;\n  width: 600px;\n  height: 28px;\n}\n\n.todo-item {\n  display: flex;\n  align-items: center;\n  font-size: large;\n  background-color: #fff;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  margin-bottom: 1rem;\n}\n\n.todo-item label {\n  display: block;\n  margin-right: 1rem;\n  cursor: pointer;\n}\n\n.todo-item .todo-name {\n  flex: 1 1 0%;\n}\n\n.todo-item .todo-name input {\n  color: #313154;\n  font-size: 1.125rem;\n}\n\n.todo-item .todo-actions {\n  display: flex;\n  align-items: center;\n}\n\n.todo-item .todo-actions button {\n  display: block;\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  font-size: large;\n  transition: 0.2s ease-in-out;\n}\n\n.todo-item .todo-actions button:hover {\n  opacity: 0.75;\n}\n\n.todo-item .todo-actions .edit {\n  margin-right: 0.5rem;\n}\n\n.todo-item.done .todo-name input {\n  text-decoration: line-through;\n  color: gray;\n}\n\n/* checkbox */\n\ninput[type=\"checkbox\"] {\n  position: relative;\n  border: 2px solid #000;\n  border-radius: 3px;\n  background: none;\n  cursor: pointer;\n  line-height: 0;\n  margin: 0 0.6em 0 0;\n  margin-left: 1em;\n  outline: 0;\n  padding: 0;\n  vertical-align: text-top;\n  height: 20px;\n  width: 20px;\n  -webkit-appearance: none;\n  opacity: 0.5;\n}\n\ninput[type=\"checkbox\"]:hover {\n  opacity: 1;\n}\n\ninput[type=\"checkbox\"]:checked {\n  background-color: #000;\n  opacity: 1;\n}\n\ninput[type=\"checkbox\"]:before {\n  content: \"\";\n  position: absolute;\n  right: 50%;\n  top: 50%;\n  width: 4px;\n  height: 10px;\n  border: solid #fff;\n  border-width: 0 2px 2px 0;\n  margin: -1px -1px 0 -1px;\n  transform: rotate(45deg) translate(-50%, -50%);\n  z-index: 2;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,iCAAiC;EACjC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,4BAA4B;EAC5B,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,aAAa;EACb,qBAAqB;EACrB,wCAAwC;EACxC,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,sBAAsB;EACtB,eAAe;EACf,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb;;AAEA,aAAa;;AAEb;EACE,kBAAkB;EAClB,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,mBAAmB;EACnB,gBAAgB;EAChB,UAAU;EACV,UAAU;EACV,wBAAwB;EACxB,YAAY;EACZ,WAAW;EACX,wBAAwB;EACxB,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,wBAAwB;EACxB,8CAA8C;EAC9C,UAAU;AACZ","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap\");\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  overflow: scroll;\n}\n\n.input-container {\n  margin-top: 33vh;\n}\n\nh1 {\n  text-align: center;\n}\n\ninput:not([type=\"checkbox\"]),\nbutton {\n  appearance: none;\n  border: none;\n  outline: none;\n  background: none;\n  cursor: initial;\n}\n\n.input {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  font-size: large;\n  margin-bottom: 1rem;\n}\n\n.input i {\n  font-size: 28px;\n}\n\n.input i:hover {\n  cursor: pointer;\n}\n\n.input input[type=\"text\"] {\n  background-color: whitesmoke;\n  border-radius: 16px;\n  margin-right: 12px;\n  border: none;\n  padding: 6px 16px;\n  font-size: 16px;\n  width: 600px;\n  height: 28px;\n}\n\n.todo-item {\n  display: flex;\n  align-items: center;\n  font-size: large;\n  background-color: #fff;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  margin-bottom: 1rem;\n}\n\n.todo-item label {\n  display: block;\n  margin-right: 1rem;\n  cursor: pointer;\n}\n\n.todo-item .todo-name {\n  flex: 1 1 0%;\n}\n\n.todo-item .todo-name input {\n  color: #313154;\n  font-size: 1.125rem;\n}\n\n.todo-item .todo-actions {\n  display: flex;\n  align-items: center;\n}\n\n.todo-item .todo-actions button {\n  display: block;\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  font-size: large;\n  transition: 0.2s ease-in-out;\n}\n\n.todo-item .todo-actions button:hover {\n  opacity: 0.75;\n}\n\n.todo-item .todo-actions .edit {\n  margin-right: 0.5rem;\n}\n\n.todo-item.done .todo-name input {\n  text-decoration: line-through;\n  color: gray;\n}\n\n/* checkbox */\n\ninput[type=\"checkbox\"] {\n  position: relative;\n  border: 2px solid #000;\n  border-radius: 3px;\n  background: none;\n  cursor: pointer;\n  line-height: 0;\n  margin: 0 0.6em 0 0;\n  margin-left: 1em;\n  outline: 0;\n  padding: 0;\n  vertical-align: text-top;\n  height: 20px;\n  width: 20px;\n  -webkit-appearance: none;\n  opacity: 0.5;\n}\n\ninput[type=\"checkbox\"]:hover {\n  opacity: 1;\n}\n\ninput[type=\"checkbox\"]:checked {\n  background-color: #000;\n  opacity: 1;\n}\n\ninput[type=\"checkbox\"]:before {\n  content: \"\";\n  position: absolute;\n  right: 50%;\n  top: 50%;\n  width: 4px;\n  height: 10px;\n  border: solid #fff;\n  border-width: 0 2px 2px 0;\n  margin: -1px -1px 0 -1px;\n  transform: rotate(45deg) translate(-50%, -50%);\n  z-index: 2;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_todolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todolist */ "./src/modules/todolist.js");
/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task */ "./src/modules/task.js");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ui */ "./src/modules/ui.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




})();

/******/ })()
;
//# sourceMappingURL=main.js.map