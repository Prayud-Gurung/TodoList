import React, { useEffect } from "react"
import TodoList from "./TodoList"
import useTodoStore from "../store/TodoStore"
import AddItem from "./AddItem"

function App() {
  const store = useTodoStore()

  useEffect(() => {
    store.fetchTodos()
  }, [])

  return (
    <>
      <AddItem />
      <TodoList />
    </>
  )
}

export default App
