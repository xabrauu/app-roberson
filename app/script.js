let tasks = [];
let editingTaskIndex = null;

document.getElementById('addButton').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        if (editingTaskIndex !== null) {
            // Editar tarefa 
            tasks[editingTaskIndex] = taskValue;
            editingTaskIndex = null;
        } else {
            // Adicionar nova tarefa
            tasks.push(taskValue);
        }
        taskInput.value = '';
        renderTasks();
    } else {
        alert('insira uma tarefa.');
    }
});

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.classList.add('editButton');
        editButton.addEventListener('click', () => editTask(index));

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Excluir';
        removeButton.addEventListener('click', () => removeTask(index));

        li.appendChild(editButton);
        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}

function editTask(index) {
    const taskInput = document.getElementById('taskInput');
    taskInput.value = tasks[index];
    editingTaskIndex = index;
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
