
// FUNÇÃO QUE MARCA A CAIXINHA TAREFA FEITA
function taskDone() {
     let checked = document.getElementById('outChecked');
     checked.innerHTML = '<img src="../img/check-on.svg" alt="checked-on icon">';
     checked.setAttribute('onclick', 'taskNotDone()');
 }
 
 // FUNÇÃO QUE DESMARCA A CAIXINHA TAREFA FEITA
 function taskNotDone() {
     let unChecked = document.getElementById('outChecked');
     unChecked.innerHTML = '<img src="../img/check-off.png" alt="check-off icon">';
     unChecked.setAttribute('onclick', 'taskDone()');
 }

 // FUNÇÃO ADICIONAR TAREFA 
 function newTask() {
    let taskContainer = document.getElementById('outTask');
    let inTaskElement = document.getElementById('in-Tarefa');
    let inTimeElement = document.getElementById('in-Hora');

    let inTask = inTaskElement.value
    let inTime = inTimeElement.value

    if (inTask === "" || inTime === "" || isNaN(inTime) ) {
        alert("Preencha todos os campos de forma válida"); 
        return} 

        let newTaskHTML = `
        <div class="task-card input-card">
            <div class="ico-check icon" onclick="taskDone(this)"> 
                <img src="../img/check-off.png" alt="check-off icon">
            </div>
            <div class="task">
                <p> ${inTask}</p>
            </div>
            <div class="hour">${inTime}:hrs</div>
            <div class="ico-delete icon" onclick="deleteTask(this)"> 
                <img src="../img/delete.png" alt="delete-item">
            </div>
        </div>`;

    taskContainer.innerHTML += newTaskHTML;

    inTaskElement.value ="";
    inTimeElement.value ="";
    }
  

function taskDone(element) {
    element.innerHTML = '<img src="../img/check-on.svg" alt="checked-on icon">';
    element.setAttribute('onclick', 'taskNotDone(this)');
}

function taskNotDone(element) {
    element.innerHTML = '<img src="../img/check-off.png" alt="check-off icon">';
    element.setAttribute('onclick', 'taskDone(this)');
}

function deleteTask(element) {
    element.parentElement.remove();
}


