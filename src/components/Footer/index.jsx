import React from 'react'
import PropTypes from 'prop-types' // 引入 PropTypes
import './index.css'

// 在函數組件外部定義 PropTypes
Footer.propTypes = {
  todos: PropTypes.array.isRequired,
  checkAllTodo: PropTypes.func.isRequired,
  clearAllDone: PropTypes.func.isRequired,
}

export default function Footer(props) {
  const { todos, checkAllTodo, clearAllDone } = props

  // 計算一下有幾個已完成
  const doneCount = todos.reduce((previousValue, currentValue) => {
    const { done } = currentValue
    return previousValue + (done ? 1 : 0)
  }, 0)

  // 總數
  const total = todos.length

  // 全選checkbox的回調
  const handleCheckAll = (event) => {
    checkAllTodo(event.target.checked)
  }

  // 清除所有已完成的回調
  const handleClearAll = () => {
    clearAllDone()
  }

  return (
    <div className="todo-footer">
      <label>
        <input
          type="checkbox"
          onChange={handleCheckAll}
          checked={doneCount === total && total !== 0}
        />
      </label>
      <span>
        <span>已完成{doneCount}</span> / 全部{total}
      </span>
      <button onClick={handleClearAll} className="btn btn-danger">
        清除已完成任務
      </button>
    </div>
  )
}
