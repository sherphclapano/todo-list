// To add an array of tasks

let tasks = [];         //Empty array to store created objects.

function addTask() {
  const input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  tasks.push({text: taskText, completed: false});
  renderTasks();
  input.value = "";
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.className = "task-item";

    const checkbox = document.createElement("input");        // --- Create checkbox ---
    checkbox.type = "checkbox";
    checkbox.className = "task-check";
    checkbox.checked = task.completed;

    checkbox.addEventListener("change", () => {         // --- When checkbox is clicked, toggle completed styling ---
      task.completed = !task.completed;
      listItem.classList.toggle("completed", task.completed);
    });

    const text = document.createElement("span");        // --- Create text container ---
    text.textContent = task.text;                      // --- Task text ---

    // --- Edit button ---
    
    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.className = "edit-btn";
    editBtn.onclick = () => editTask(index);

    // --- Delete button ---
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => deleteTask(index);

    // --- Right-side icon container ---
    const iconContainer = document.createElement("div");
    iconContainer.className = "icons";
    iconContainer.appendChild(editBtn);
    iconContainer.appendChild(deleteBtn);

    listItem.appendChild(checkbox);
    listItem.appendChild(text);
    listItem.appendChild(iconContainer);

    list.appendChild(listItem);
  });
}

function editTask(index) {
  const newText = prompt("Edit your task: ", tasks[index].text);

  if (newText === null) return;       // User pressed Cancel
  if (newText.trim() === "") {
    alert("Task cannot be empty!");
    return;
  }

  tasks[index].text = newText.trim();
  renderTasks();
}

function deleteTask(index) {
  const confirmed = confirm("Are you sure you want to delete this task?");
  if (!confirmed) return;

  tasks.splice(index, 1);
  renderTasks();
}

// Extra feature:
// Add task after pressing "Enter" key
document.getElementById("taskInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});