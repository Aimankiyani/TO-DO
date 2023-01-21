 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
 import { getDatabase,push,set,ref,onValue,update,remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCNXEMWqN-KA13yIdm-VmJ90lIu4QydnFk",
   authDomain: "todo-61932.firebaseapp.com",
   projectId: "todo-61932",
   storageBucket: "todo-61932.appspot.com",
   messagingSenderId: "989533602279",
   appId: "1:989533602279:web:eb31ef17847c9b3d76bd42",
   measurementId: "G-RVC8Y07Z2H"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const Db = getDatabase()

 //FIreBase Khtm//
 
 
 var neww = document.getElementById('a');

 window.add  = function () {
     var obj = {
         todo: neww.value
     }
 
     var Userref = push(ref(Db, 'Todos/'))
     obj.id = Userref.key
 
     set(Userref, obj)
 }
 
 
 window.get = function () {
     var render = document.getElementById('render')
 
     onValue(ref(Db, 'Todos/'), function (todo) {
         render.innerHTML = ""
         var Todos = Object.values(todo.val())
         for (var i = 0; i < Todos.length; i++) {
             var app = Todos[i]
             console.log(app.todo)
             render.innerHTML += `<p class="text-center d-flex justify-content-evenly ms-3 pt-4">TODO : ${app.todo}   <button onclick="TodoUpdate('${app.id}')" class="btn bg-success p-2 px-5  text-light">EDIT</button>
     <button onclick="Tododel('${app.id}')" class="btn bg-danger text-center p-2 px-5  text-light">DELETE</button> </p> <br/>`
 
         }
         var a = document.getElementById('a').value = ""
 
     })
 }
 get()
 window.Tododel = function (id) {
     remove(ref(Db, `Todos/${id}`))
 }
 window.deleteAll = function (id) {
     remove(ref(Db, `Todos/`))
 }
 
 window.TodoUpdate = function (id) {
     // console.log(id);
     var NewTodo = prompt('Enter Update')
 
     update(ref(Db, `Todos/${id}`), {
         todo: NewTodo
     })
 }


