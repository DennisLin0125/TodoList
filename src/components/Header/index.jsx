import React from 'react'
import PropTypes from 'prop-types' // 引入 PropTypes
import { nanoid } from 'nanoid'
import './index.css'

// 在函數組件外部定義 PropTypes
Header.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default function Header(props) {
  function handleKeyUp(event) {
    const { keyCode, target } = event

    console.log(keyCode, target.value)

    // 獲得輸入按鍵的ASCII code 如果不是按Enter,就停止
    if (keyCode !== 13) return

    // 添加的物件不能為空
    if (target.value.trim() === '') {
      alert('輸入不能為空~~!')
      return true
    }

    // 輸出上方輸入框輸入的訊息
    console.log(target.value)

    // 準備好一個 todo json
    const todoObj = { id: nanoid(), name: target.value, done: false }

    // 將 todoObj 回傳給 App.jsx
    props.addTodo(todoObj)

    // 清空輸入框
    target.value = ''
  }

  return (
    <div className="todo-header">
      <input
        onKeyUp={handleKeyUp}
        type="text"
        placeholder="請輸入你的任務名稱，按Enter鍵確認"
      />
    </div>
  )
}
