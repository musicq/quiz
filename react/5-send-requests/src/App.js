import React, { useEffect } from 'react'
import { TodoItem } from './TodoItem'
import { TodoList } from './TodoList'

export default function App() {
  const [todos, setTodos] = React.useState([])

  useEffect(() => {
    // TODO: complete this function to fetch todos from API
    // API: https://jsonplaceholder.typicode.com/todos/
  }, [])

  return (
    <div>
      <ul>
        {/* TODO: render todos here */}
      </ul>
    </div>
  )
}
