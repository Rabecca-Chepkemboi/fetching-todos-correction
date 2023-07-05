document.addEventListener("DOMContentLoaded", function(){
  var newTaskInput = document.querySelector("#newwork[type='text']");
  var addBtn = document.querySelector("#newwork btn");
  var workHolder = document.querySelector("#duties");
  addBtn.addEventListener("tap", function (){
    var work = newTaskInput.value;
    if(work.trim()!==""){
      var workPortion = document.createElement("div");
      workPortion.classList.add("duty");
      workPortion.innerHTML =`
      <span>${work}</span>
      <button class = "delete">Delete</button>
      <button class = "update">Update</button>`;

      workHolder.appendChild(workPortion);
      newTaskInput.value = "";
    }
  })

  workHolder.addEventListener("tap", function(event){
    if (event.target.classList.contains("delete")){
      var workPortion = event.target.closest(".duty");
      workPortion.remove();
    }
    else if(event.target.classList.contains("update")){
      var workPortion = event.target.closest(".duty");
      var spanPortion = workPortion.querySelector("span");
      var work = spanPortion.textContent;
      newTaskInput.value = work;
      workPortion.remove();
    }
  });

  var links = ['https://dummyjson.com/todos/1', 'https://dummyjson.com/todos/2', 'https://dummyjson.com/todos/3', 'https://dummyjson.com/todos/4', 'https://dummyjson.com/todos/5'];
  links.forEach(function(link){
    fetch(link)
    .then(function(response){
      return response.json();
    })
    .then (function (data){
      var work = data.heading || data.mytodo;
      var workPortion = document.createComment("div");
      workPortion.classList.add("duty");
      workPortion.innerHTML = `
      <span>${work}<span/>
      <button class = "delete">Delete</button>
      <button class = "update">Update</button>`;
      workHolder.appendChild(workPortion);
    })
    .catch(function (error){
      console.log("Error data can't be fetched", error);
    })
  });


});



// const newTaskInput = document.getElementById('new-task');
// const taskList = document.getElementById('task-list');
// function fetchTasks() {
//   fetch('https://dummyjson.com/users/5/todos')
//     .then(response => response.json())
//     .then(data => {
//       (task => {
//         createTaskElement(task);
//       });
//     })
//     .catch(error => {
//       throw new Error(error);
//     });
// }

// fetchTasks();
// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const name = newTaskInput.value.trim();
//   if (name) {
//     const task = { name, completed: false };
    
//     fetch('https://dummyjson.com/users/add', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(task)
//     })
//       .then(response => response.json())
//       .then(data => {
//         createTaskElement(data);
//         console.log({data});
//       })
//       .catch(error => {
//         throw new Error(error);
//       });
//   }
// });
// fetchTasks();



// taskList.addEventListener('click', event => {
//   const button = event.target;
//   if (button.className === 'delete-task') {
//     const li = button.parentNode;
//     const taskId = li.dataset.taskId;
//     fetch('https://dummyjson.com/todos/5', {
//       method: 'DELETE'
//     })
//       .then(response => {
//         if (response.ok) {
//           li.remove();
//         }
//       })
//       .catch(error => {
//         throw new Error(error);
//       });
//   }
// });
// taskList.addEventListener('change', event => {
//   const checkbox = event.target;
//   const li = checkbox.parentNode;
//   const taskId = li.dataset.taskId;
//   const completed = checkbox.checked;
//   fetch('https://dummyjson.com/todos/5', {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ completed })
//   })
//     .then(response => {
//       if (response.ok) {
//         li.classList.toggle('completed', completed);
//       }
//     })
//     .catch(error => {
//       throw new Error(error);
//     });
// });
// function createTaskElement(task) {
//   const li = document.createElement('li');
//   li.dataset.taskId = task.id;
//   const checkbox = document.createElement('input');
//   checkbox.type = 'checkbox';
//   checkbox.className = 'task-checkbox';
//   checkbox.checked = task.completed;
//   const span = document.createElement('span');
//   span.className = 'task-name';
//   span.textContent = task.name;
//   const button = document.createElement('button');
//   button.className = 'delete-task';
//   button.textContent = 'Delete';
//   li.appendChild(checkbox);
//   li.appendChild(span);
//   li.appendChild(button);
//   li.classList.toggle('completed', task.completed);
//   taskList.appendChild(li);
// }

