//Dummy data
/*

const tasks = [
  {
    id: 1,
    taskName: "Reading",
    status: "Complete",
  },
  {
    id: 2,
    taskName: "Writing",
    status: "Pending",
  },
  {
    id: 3,
    taskName: "Cooking",
    status: "Pending",
  },
];

console.log(JSON.stringify(tasks));
*/
const btnAdd = document.getElementById("btnAdd");
const btnClear = document.getElementById("btnClear");
const nameElement = document.getElementById("taskName");
const statusElement = document.getElementById("taskStatus");
const addTask = document.getElementById("addTask");
const modalTitle = document.querySelector(".modal-title");
const taskForm = document.getElementById("taskForm");
const errorElementName = document.querySelector(".name-error");
const errorElementStatus = document.querySelector(".status-error");
const mymodalElement = document.getElementById("myModal");
const myModal = new bootstrap.Modal(mymodalElement);
const searchInput = document.querySelector("#search");
const modalClose = document.querySelector("#modalClose");

//Get data from LocalStorage
function getTasks() {
  let tasks = [];
  if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  return tasks;
}

//Render Task details in Table Format
function renderTasks(isForSearch = 0, filteredTask = []) {
  let tasks = [];
  if (isForSearch == 0) {
    tasks = getTasks();
  } else {
    tasks = filteredTask;
  }

  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const row = `
    <tr>
        <td>${index + 1}</td>
        <td>${task.taskName}</td>
        <td>${task.status}</td>
        <td>
        <button class="btn btn-sm btn-primary" onclick="editTask(${
          task.id
        })"><i class="bi bi-pencil-square"></i></button>
        </td>
        <td>
        <button class="btn btn-sm btn-danger" onclick="deleteTask(${
          task.id
        })"><i class="bi bi-trash3-fill"></i></button>
        </td>
        </tr>
        `;
    taskList.innerHTML += row;
  });
}

//Click Add New Task button
addTask.addEventListener("click", function () {
  modalTitle.innerHTML = " Add New Task";
    errorElementName.innerHTML = "";
    errorElementStatus.innerHTML = "";
  clearAll();
  
});

//Validate form

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskName = nameElement.value;
  const taskStatus = statusElement.value;
  const taskId = Number(btnAdd.getAttribute("data-taskid"));

  if (taskName && taskStatus) {
    if (taskId) {
      //Task need to updated
      updateTask(taskId, taskName, taskStatus);
    } else {
      //Task need to add
      addNewTask(taskName, taskStatus);
    }
    myModal.hide();
  } else {
    // alert("Please enter task name and status.");

    if (taskName == "") {
      errorElementName.innerHTML = "Task name should not be empty";
    } else {
      errorElementName.innerHTML = "";
    }
    if (taskStatus == "") {
      errorElementStatus.innerHTML = " Please select valid status";
    } else {
      errorElementStatus.innerHTML = "";
    }
  }
});

//Add new task

function addNewTask(taskName, status) {

  const tasks = getTasks();
  const newTask = {
    id: Date.now(),
    taskName,
    status,
  };
  tasks.push(newTask);
  saveTasks(tasks);
  renderTasks();
}

//Upade existing task

function updateTask(id, taskName, status) {
  const tasks = getTasks();
  const updatedTasks = tasks.map((task) => {
    if (task.id == id) {
      task.taskName = taskName;
      task.status = status;
    }
    return task;
  });
  saveTasks(updatedTasks);
  renderTasks();
}

//Edit task

function editTask(id) {
  const tasks = getTasks();
  const task = tasks.find((task) => task.id === id);
  if (task) {
    nameElement.value = task.taskName;
    statusElement.value = task.status;
    btnAdd.setAttribute("data-taskid", task.id);
    modalTitle.innerHTML = " Update Task";
    myModal.show();
  }
}

//Save Task Details in LocalStorage
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Delete Task
function deleteTask(taskId) {
  if (confirm("Are you sure to delete?")) {
    const tasks = getTasks();
    const updatedTasks = tasks.filter((task) => task.id != taskId);
    saveTasks(updatedTasks);
    renderTasks();
  }
}

btnClear.addEventListener("click", clearAll);

function clearAll() {
  nameElement.value = "";
  statusElement.value = "";
}

//Search Function

searchInput.addEventListener("input", function () {
  const searchQuery = this.value.toLowerCase();
  const tasks = getTasks();
  const filteredTask = tasks.filter((task) =>
    task.taskName.toLowerCase().includes(searchQuery)
  );
  renderTasks(1, filteredTask);
});

// Reset error text

modalClose.addEventListener("click", function () {
  errorElementName.innerHTML = "";
   errorElementStatus.innerHTML = "";
})

//Initial Call
renderTasks();
