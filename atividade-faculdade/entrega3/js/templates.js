// js/templates.js
export function homeTemplate(tasks) {
  return `
        <h1>Lista de Tarefas</h1>
        <ul>
            ${tasks
              .map((task) => `<li>${task.name} - ${task.description}</li>`)
              .join("")}
        </ul>
    `;
}

export function addTaskTemplate() {
  return `
        <h1>Adicionar Nova Tarefa</h1>
        <form id="task-form">
            <label for="name">Nome:</label>
            <input type="text" id="name" required>
            <div class="error" id="name-error"></div>
            
            <label for="description">Descrição:</label>
            <input type="text" id="description" required>
            <div class="error" id="description-error"></div>
            
            <button type="submit">Salvar</button>
        </form>
    `;
}
