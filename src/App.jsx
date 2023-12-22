import Header from "./components/Header";
import './App.css'
import {useState} from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (todoObj) => {
    console.log("ok", todoObj);
    // 1. 獲取原todos
    // 2. 追加一個todo
    // 3. 更新狀態
    setTodos((prevTodos) => [todoObj, ...prevTodos]);
  }
  
  return (
    <div className="todo-container">
      <div className='todo-wrap'>
        <Header addTodo={addTodo}/>
      </div>
    </div>
  );
}
