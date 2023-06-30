import React from 'react'
import {TodoItem} from './TodoItem'
import {TodoList} from './TodoList'

export default function App() {
  const todos = [
    { id: 1, title: 'Buy milk', completed: false },
    { id: 2, title: 'Buy eggs', completed: false },
    { id: 3, title: 'Buy bread', completed: false },
    { id: 4, title: 'Buy butter', completed: false },
  ]

  const onDelete = (id) => {
    // TODO: complete this function to remove todo from list
  }
  return (
    <div>
      <TodoList todos={todos}>
        {(todo) => <TodoItem todo={todo} onDelete={onDelete} />}
      </TodoList>
    </div>
  )
}
