 window.onload = loadTasks;

function addTask() {
    let task = document.getElementById('in-Tarefa').value;
    let data = document.getElementById('in-Data').value;
    if (task == "") {
        alert('Digite uma tarefa!');
        return;
    } 
    if (data == "") {
        alert('Digite uma data!');
        return;
    } 
    
    // carrega lista atual do localStorage se n tiver cra um array vazio || [];

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    //adiciona nova tarefa

    tasks.push({tarefa: task, data: data});

    //salva e atualiza a interface

    saveTasks(tasks);
    renderTasks(tasks);
  
     document.getElementById('in-Tarefa').value = '';
     document.getElementById('in-Data').value = '';

}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1); // Remove 1 item no índice
    saveTasks(tasks);
    renderTasks(tasks);
}

function taskDone(element) {
    element.innerHTML = '<img src="../img/check-on.svg" alt="checked-on icon">';
    element.setAttribute('onclick', 'taskNotDone(this)');
}

function taskNotDone(element) {
    element.innerHTML = '<img src="../img/check-off.png" alt="check-off icon">';
    element.setAttribute('onclick', 'taskDone(this)');
}
function saveTasks(tasks){
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    renderTasks(tasks);
}

function renderTasks(tasks) {
    // Ordena por data
    // tasks.sort(function(a, b){ return new Date(a.data) - new Date(b.data)});

    tasks.sort(function(a, b) {
    let timeA = new Date(a.data).getHours() * 60 + new Date(a.data).getMinutes(); // Tempo em minutos
    let timeB = new Date(b.data).getHours() * 60 + new Date(b.data).getMinutes(); // Tempo em minutos
    return timeA - timeB; // Ordena pelo tempo (em minutos)

    
});

    let outList = document.getElementById('outList');
    outList.innerHTML = '';

    tasks.forEach((item, index) => {
        let taskCard = `
            <div class="task-card input-card">
                <div class="ico-check icon" onclick="taskDone(this)">
                    <img src="../img/check-off.png" alt="check-off icon" >
                </div>
                <div class="task" id="outTask"><p>${item.tarefa}</p></div>
                <div class="hour" id="outHour">${item.data}</div>
                <div class="ico-delete icon" onclick="deleteTask(${index})">
                    <img src="../img/delete.png" alt="delete-item">
                </div>
            </div>
        `;
        outList.innerHTML += taskCard;
    });
}
