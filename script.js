var taskForm = document.getElementById('taskInput');
var taskList = document.getElementById('tasks');

// Add new task
taskForm.addEventListener('submit', addTask);
// Delete task
taskList.addEventListener('click', removeTask);

function addTask(e){
    e.preventDefault();
    var newTask = document.getElementById('newTask').value;
    
    // Create new li element
    var li = document.createElement('li');
    li.className = "taskItem";
    li.appendChild(document.createTextNode(newTask));

    // Create delete button
    var dBtn = document.createElement('button');
    dBtn.appendChild(document.createTextNode('X'));
    dBtn.className = 'delete';
    li.appendChild(dBtn);

    // Add item to task list
    taskList.appendChild(li);

}

function removeTask(click) {
    if(click.target.classList.contains('delete')) {
        var li = click.target.parentElement;
        taskList.removeChild(li);
    } else if(click.target.classList.contains('strikethrough')){
        click.target.classList.remove('strikethrough');
    } else {
        click.target.classList.add('strikethrough');
    }
}