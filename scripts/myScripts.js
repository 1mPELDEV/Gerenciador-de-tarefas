function addTask() {
    let task = document.getElementById('in-Tarefa').value;
    let data = document.getElementById('in-Data').value;
    let outList = document.getElementById('outList');
    let taskList = "";
    if (task == "") {
        alert('Digite uma tarefa!');
        return;
    } 
    if (data == "") {
        alert('Digite uma data!');
        return;
    }       
    taskList = `
        <div class="task-card input-card ">
            <div class="ico-check icon" onclick="taskDone(this)"> <img src="../img/check-off.png" alt="check-off icon" ></div>
            <div class="task" id="outTask"> <p>${task}</p></div>
            <div class="hour" id="outHour">${data}</div>
            <div class="ico-delete icon" onclick="deleteTask()"> <img src="../img/delete.png" alt="delete-item"></div>
        </div>
    `;
    
    outList.innerHTML += taskList;
     document.getElementById('in-Tarefa').value = '';
     document.getElementById('in-Data').value = '';

}
function deleteTask() {
    let outList = document.getElementById('outList');
    let taskCard = event.target.closest('.task-card');
    if (taskCard) {
        outList.removeChild(taskCard);
    }
}

// FUNÇÃO QUE MARCA A CAIXINHA TAREFA FEITA
function taskDone(element) {
     element.innerHTML = '<img src="../img/check-on.svg" alt="checked-on icon">';
     element.setAttribute('onclick', 'taskNotDone(this)');
 }

 // FUNÇÃO QUE DESMARCA A CAIXINHA TAREFA FEITA
 function taskNotDone() {
     element.innerHTML = '<img src="../img/check-off.png" alt="check-off icon">';
     element.setAttribute('onclick', 'taskDone(this)');
 }

 //
