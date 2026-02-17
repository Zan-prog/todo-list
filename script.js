let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  tasks.push(taskText);
  input.value = "";

  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  for (let task of tasks) {
    const li = document.createElement("li");
    li.innerText = task;
    list.appendChild(li);
  }
}
