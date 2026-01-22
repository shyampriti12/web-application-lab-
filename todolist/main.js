const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  if (input.value === "") {
    alert("Please enter a task");
    return;
  }

  // create elements
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  span.textContent = input.value;
  deleteBtn.textContent = "❌";

  // toggle complete
  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  // delete task
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  input.value = "";
}
