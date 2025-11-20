// To add an array of tasks

let tasks = [];         //Empty array to store created objects.

function addTask() {
  const input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  tasks.push(taskText);
  renderTasks();
  input.value = "";
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.className = "task-item";

    const checkbox = document.createElement("input");        // --- Create checkbox ---
    checkbox.type = "checkbox";
    checkbox.className = "task-check";

    const text = document.createElement("span");        // --- Create text container ---
    text.textContent = task;

    checkbox.addEventListener("change", () => {     // --- When checkbox is clicked, toggle completed styling ---
      listItem.classList.toggle("completed");
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(text);

    list.appendChild(listItem);
  });
}
