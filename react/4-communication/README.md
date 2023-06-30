Complete `src/App.js`, `src/TodoList.js` and `src/TodItem.js` files.

# Requirements:

1. Create 2 components `TodoList` and `TodoItem` in 2 separate files.
2. Usage of these 2 components should look like below
   ```js
   <TodoList todos={todos}>
     {(todo) => <TodoItem todo={todo} onDelete={onDelete} />}
   </TodoList>
   ```
3. Complete the `onDelete` function to remove the todo item from the list.
4. Try to add a Input box and Add button to add new todo item to the list.

> You should use [`hooks`](https://react.dev/reference/react) to complete this
> exercise.
