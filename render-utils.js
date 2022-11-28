export function renderTodo(todo, handleComplete) {
    // create a div and a p tag
    const todoItemContainer = document.createElement('div');
    const todoItem = document.createElement('p');
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    if (handleComplete) {
        todoItemContainer.classList.add('complete');
    } else {
        todoItemContainer.classList.add('incomplete');
    }
    // add the 'todo' css class no matter what
    todoItem.classList.add ('todo');
    // put the todo's text into the p tag
    todoItem.textContent = todo.todo;
    // append stuff
    todoItemContainer.append(todoItem);
    // add event listener for click and call handleComplete function
    todoItemContainer.addEventListener('click', async () => {
        await handleComplete();
    });
    // return the div
    return todoItemContainer;
}
