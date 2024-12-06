
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

 //
 