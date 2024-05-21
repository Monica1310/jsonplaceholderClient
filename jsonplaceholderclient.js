document.addEventListener('DOMContentLoaded', () => {
    fetchTodo();
});

function fetchTodo() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    
    fetch(url)
        .then(response => response.json())
        .then(data => displayTodoData(data))
        .catch(error => console.error('Error fetching TODO data:', error));
}

function displayTodoData(todo) {
    const todoContainer = document.getElementById('todo');
    
    const todoHtml = `
        <p><strong>ID:</strong> ${todo.id}</p>
        <p><strong>Title:</strong> ${todo.title}</p>
        <p><strong>Completed:</strong> ${todo.completed ? 'Yes' : 'No'}</p>
    `;
    
    todoContainer.innerHTML = todoHtml;
}
