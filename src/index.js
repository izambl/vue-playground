import Vue from 'vue';

const todos = [
  { text: '0' },
  { text: '1' },
  { text: '2' },
];

const App = new Vue({
  el: '#vue-playground',
  data: {
    message: 'Hello Vue World!',
    seen: true,
    todos: todos,
    binding: '',
  }
});

function toggleVisible() {
  App.seen = !App.seen;
}

function addTodo() {
  todos.push({ text: todos.length.toString() });
}

const button = document.getElementById('testButton');
button.addEventListener('click', toggleVisible);

const button2 = document.getElementById('testButton2');
button2.addEventListener('click', addTodo);

window.vueApp= App;
