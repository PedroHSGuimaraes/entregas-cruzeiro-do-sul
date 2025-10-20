// js/main.js
import { homeTemplate, addTaskTemplate } from "./templates.js";
import { getTasks, saveTask } from "./storage.js";
import { validateForm } from "./validation.js";

const content = document.getElementById("content");

function loadHome() {
  const tasks = getTasks();
  content.innerHTML = homeTemplate(tasks);
}

function loadAddTask() {
  content.innerHTML = addTaskTemplate();
  const form = document.getElementById("task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateForm()) {
      const task = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
      };
      saveTask(task);
      loadHome();
    }
  });
}

document.getElementById("home-btn").addEventListener("click", loadHome);
document.getElementById("add-task-btn").addEventListener("click", loadAddTask);

loadHome();
