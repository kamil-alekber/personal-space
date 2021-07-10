import React, { useContext } from 'react'
import { findListItemIdx } from '../utils/arrayMethods'
import { useLocalStorage } from '../hooks/useLocalStorage'

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
  const [todoList, setValueLS] = useLocalStorage<Todo[]>('board', [])

  function create(todo: Todo) {
    const newTodoList = [...todoList, todo]
    setValueLS(newTodoList)
  }

  function edit(id: string, todo: Todo) {
    const [idx, err] = findListItemIdx(id, todoList)
    if (err !== null) throw err

    const newTodoList = [...todoList]
    newTodoList[idx] = todo
    setValueLS(newTodoList)
  }

  function remove(id: string) {
    const [_, err] = findListItemIdx(id, todoList)
    if (err !== null) throw err
    const newTodoList = todoList.filter((val) => val.id !== id)
    setValueLS(newTodoList)
  }

  return (
    <TodoContext.Provider value={{ todoList, create, edit, remove }}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodo = () => useContext(TodoContext)
