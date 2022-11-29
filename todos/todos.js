import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos, 
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

todoForm.addEventListener('submit', async (e) => {
    // on submit, create a todo, reset the form, and display the todos
    e.preventDefault();

    const data = new FormData(todoForm);
    const todo = data.get('todo');
    todoForm.reset();

    const newDo = await createTodo(todo);
    if (newDo) {
        displayTodos();
    } else {
        todosEl.textContent = 'Error adding ToDo';
    }
});

// create todo state


// add async complete todo handler function
// call completeTodo
// swap out todo in array
// call displayTodos
async function handleComplete() {

}



async function displayTodos() {
    // clear the container (.innerHTML = '')
    todosEl.innerHTML = '';
    // display the list of todos,
          // call render function, pass in state and complete handler function!
          // append to .todos
    const todos = await getTodos();
    const handleComplete = todos.complete;
    if (todos) {
        for (let todo of todos) {
            const todoItem = renderTodo(todo, handleComplete);
            todoItem.addEventListener('click', async () => {
                await completeTodo(todo.id);
                await displayTodos();
            });
            todosEl.append(todoItem);
        }
    }
}

window.addEventListener('load', async () => {
    displayTodos();
});
// add page load function
    // fetch the todos and store in state
    // call displayTodos

logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async () => {
    // delete all todos
    await deleteAllTodos();
    // modify state to match
    // re displayTodos
    await displayTodos();
});
