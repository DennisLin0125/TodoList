import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
import { useState } from 'react'

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todoObj) => {
    console.log('ok', todoObj)
    // 1. 獲取原todos
    // 2. 追加一個todo
    // 3. 更新狀態
    setTodos((prevTodos) => [todoObj, ...prevTodos])
  }

  const updateTodo = (id, done) => {
    // 使用 setTodos 更新狀態
    setTodos((prevTodos) =>
      prevTodos.map((todoObj) => {
        if (todoObj.id === id) {
          return { ...todoObj, done: done }
        } else {
          return todoObj
        }
      }),
    )
  }

  const deleteTodo = (id) => {
    // 使用 setTodos 更新狀態
    setTodos((prevTodos) => prevTodos.filter((todoObj) => todoObj.id !== id))
  }

  const checkAllTodo = (done) => {
    // 使用 setTodos 更新狀態
    setTodos((prevTodos) => prevTodos.map((todoObj) => ({ ...todoObj, done })))
  }

  const clearAllDone = () => {
    // 使用 setTodos 更新狀態
    setTodos((prevTodos) => prevTodos.filter((todoObj) => !todoObj.done))
  }

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header addTodo={addTodo} />
        <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        <Footer
          todos={todos}
          checkAllTodo={checkAllTodo}
          clearAllDone={clearAllDone}
        />
      </div>
    </div>
  )
}
