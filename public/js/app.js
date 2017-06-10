/*jshint esversion: 6*/
const ToDoApp = {
rootElement: '#app',
todos:[{task: "build this app", isComplete: false}],

start: function () {
  this.cacheDOM();
  this.bindEvents();
  this.render();
},

cacheDOM: function () {
  this.root = document.querySelector(this.rootElement);
  this.createForm = this.root.querySelector('.create-form');
  this.taskInput = this.root.querySelector('.task-input');
  this.todoList = this.root.querySelector('.todo-list');
},

bindEvents: function () {
  this.createForm.addEventListener('submit', (event) => this.addTodo(event));
},

addTodo:function (event) {
  event.preventDefault();
  const task = this.taskInput.value;

  const todo = {
    task: task,
    isComplete: false
  };

  this.todos.push(todo);
  this.render();
  this.taskInput.value = '';
},

render: function () {
  const lis = this.todos.map(todo => `<li>${todo.task}<button class ='delete'>X</button></li>`).join('');
  this.todoList.innerHTML = lis;
},


};

ToDoApp.start();
