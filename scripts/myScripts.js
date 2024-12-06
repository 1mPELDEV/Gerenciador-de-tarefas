
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

//  function newTask () {
//     let task = document.getElementById('outTask')
//     task.innerHTML = `<div class="task-card input-card">
//                 <div class="ico-check icon" onclick="taskDone()" id="outChecked"> <img src="../img/check-off.png" alt="check-off icon" ></div>
//                 <div class="task" id="outTask"> <p>Retirar o lixo</p></div>
//                 <div class="hour" id="outHour">10 as 11</div>
//                 <div class="ico-delete icon" onclick="deleteTask()"> <img src="../img/delete.png" alt="delete-item"></div>
//                 </div> `;
       
//  }

 function newTask() {
    let taskContainer = document.getElementById('outTask');
    let newTaskHTML = `
        <div class="task-card input-card">
            <div class="ico-check icon" onclick="taskDone(this)"> 
                <img src="../img/check-off.png" alt="check-off icon">
            </div>
            <div class="task">
                <p>Retirar o lixo</p>
            </div>
            <div class="hour">10 as 11</div>
            <div class="ico-delete icon" onclick="deleteTask(this)"> 
                <img src="../img/delete.png" alt="delete-item">
            </div>
        </div>`;
    
    taskContainer.innerHTML += newTaskHTML;
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
