import React, { useState } from 'react'
import PropTypes from 'prop-types' // 引入 PropTypes
import './index.css'

// 在函數組件外部定義 PropTypes
Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default function Item(props) {
  const [mouse, setMouse] = useState(false)

  const handleMouse = (flag) => () => {
    setMouse(flag)
  }

  const handleCheck = (id) => (event) => {
    props.updateTodo(id, event.target.checked)
  }

  const handleDelete = (id) => {
    if (window.confirm('確定刪除嗎?')) {
      props.deleteTodo(id)
    }
  }

  const { id, name, done } = props

  return (
    <li
      style={{ backgroundColor: mouse ? '#ddd' : 'white' }}
      onMouseLeave={handleMouse(false)}
      onMouseEnter={handleMouse(true)}
    >
      <label>
        <input type="checkbox" checked={done} onChange={handleCheck(id)} />
        <span>{name}</span>
      </label>
      <button
        onClick={() => {
          handleDelete(id)
        }}
        className="btn btn-danger"
        style={{ display: mouse ? 'block' : 'none' }}
      >
        删除
      </button>
    </li>
  )
}
