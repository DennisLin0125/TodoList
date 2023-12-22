import React from 'react'
import PropTypes from 'prop-types' // 引入 PropTypes
import './index.css'
import Item from '../Item'

// 在函數組件外部定義 PropTypes
List.propTypes = {
  todos: PropTypes.array.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default function List({ todos, updateTodo, deleteTodo }) {
  return (
    <ul className="todo-main">
      {todos.map((todo) => (
        <Item
          key={todo.id}
          {...todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  )
}
