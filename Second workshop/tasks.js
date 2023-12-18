// Fetch tasks from server
document.addEventListener('DOMContentLoaded', function () {
    async function fetchTasks() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const tasks = await response.json();

            displayTasks(tasks);
        }   catch (error) {
            console.error('Error fetching tasks:', error);
        }
    }
    
    // Display tasks
    function displayTasks(tasks) {
        const taskList = document.getElementById('list');
        taskList.innerHTML = '';
    
        tasks.forEach(task => {
            const item = document.createElement('li');
            item.textContent = task.title;
        
            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete'
            completeButton.addEventListener('click', () => {
                item.remove();
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                item.remove();
            });
        
            item.appendChild(completeButton);
            item.appendChild(deleteButton);
            taskList.appendChild(item);
        });
    }

    // Listener for form submission
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();

        const taskInput = document.getElementById('note');
        if (taskInput.checkValidity()) {
            const taskList = document.getElementById('list');
            const item = document.createElement('li');
            item.textContent = taskInput.value;

            const completeButton = document.createElement('button');
            completeButton.textContent = "Complete";
            completeButton.addEventListener('click', () => {
                item.remove();
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                item.remove();
            });

            item.appendChild(completeButton);
            item.appendChild(deleteButton);
            taskList.appendChild(item);

            taskInput.value = '';

            updateLocalStorage();
        } else {
            alert('Task must have a minimum lenght of 3 characters.');
        }
    });

    // Listener for fetch button
    document.getElementById('fetchTasks').addEventListener('click', fetchTasks);

    // Persistence of local storage
    function updateLocalStorage() {
        const taskList = document.getElementById('list');
        const tasks = Array.from(taskList.children).map(task => task.textContent);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Load tasks from local storage
    function loadTasks() {
        const storage = localStorage.getItem('tasks');
        if (storage) {
            const tasks = JSON.parse(storage);
            displayTasks(tasks);
        }
    }

    // Load tasks on page load
    loadTasks();
});