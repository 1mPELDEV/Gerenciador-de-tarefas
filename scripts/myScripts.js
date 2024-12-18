let tasks = [];

// Carregar tarefas do LocalStorage ao carregar a página
document.addEventListener('DOMContentLoaded', (event) => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        renderTasks();
    }
});

function newTask() {
    let taskContainer = document.getElementById('outTask');
    let inTaskElement = document.getElementById('in-Tarefa');
    let inTimeElement = document.getElementById('in-Hora');

    let inTask = inTaskElement.value;
    let inTime = inTimeElement.value;

    if (inTask === "" || inTime === "" || isNaN(inTime)) {
        alert("Preencha todos os campos de forma válida");
        return;
    }

    // Adicionar a nova tarefa à lista de tarefas
    tasks.push({ task: inTask, time: parseFloat(inTime), done: false });

    // Salvar a lista de tarefas no LocalStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Renderizar as tarefas no DOM
    renderTasks();

    // Limpar os campos de entrada
    inTaskElement.value = "";
    inTimeElement.value = "";
}

function renderTasks() {
    let taskContainer = document.getElementById('outTask');
    taskContainer.innerHTML = ""; // Limpar o contêiner

    // Renderizar cada tarefa
    tasks.forEach((task, index) => {
        let taskHTML = `
            <div class="task-card input-card">
                <div class="ico-check icon" onclick="taskDone(${index})"> 
                    <img src="${task.done ? '../img/check-on.svg' : '../img/check-off.png'}" alt="${task.done ? 'checked-on icon' : 'check-off icon'}">
                </div>
                <div class="task">
                    <p>${task.task}</p>
                </div>
                <div class="hour">${task.time}:hrs</div>
                <div class="ico-delete icon" onclick="deleteTask(${index})"> 
                    <img src="../img/delete.png" alt="delete-item">
                </div>
            </div>`;
        taskContainer.innerHTML += taskHTML;
    });
}

function taskDone(index) {
    tasks[index].done = !tasks[index].done; // Alternar o estado de concluído
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Atualizar o LocalStorage
    renderTasks(); // Atualizar o DOM
}

function deleteTask(index) {
    tasks.splice(index, 1); // Remover a tarefa da lista
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Atualizar o LocalStorage
    renderTasks(); // Atualizar o DOM
}















