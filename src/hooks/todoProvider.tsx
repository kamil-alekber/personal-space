import React, { useState, useContext } from 'react'

interface Todo {
  id: string
  title: string
  body: string
  done: boolean
  created: string
  expires: string
  tag: string[]
  author: {
    email: string
    name: string
  }
}

interface ITodoContext {
  todoList: Todo[]
  create: (todo: Todo) => void
  edit: (id: string, todo: Todo) => void
  remove: (id: string) => void
}

const defaultTodoContext: ITodoContext = {
  todoList: [],
  create: () => {},
  edit: () => {},
  remove: () => {},
}

const TodoContext = React.createContext(defaultTodoContext)

export const TodoProvider: React.FC = ({ children }) => {
  const [todoList, setTodoList] = useState<Todo[]>([])

  function create(todo: Todo) {
    setTodoList([...todoList, todo])
  }

  function edit(id: string, todo: Todo) {
    const [idx, err] = findTodoIdx(id)
    if (err !== null) throw err

    const newTodoList = [...todoList]
    newTodoList[idx] = todo
    setTodoList(newTodoList)
  }
  function remove(id: string) {
    const [_, err] = findTodoIdx(id)
    if (err !== null) throw err
    const newTodoList = todoList.filter((val) => val.id !== id)
    setTodoList(newTodoList)
  }

  function findTodoIdx(id: string): [number, Error] {
    const idx = todoList.findIndex((val) => val.id === id)
    let err: Error = null
    if (idx === -1)
      err = new Error(`Could not find todo with following id: ${id}`)

    return [idx, err]
  }
  return (
    <TodoContext.Provider value={{ todoList, create, edit, remove }}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodo = () => useContext(TodoContext)
