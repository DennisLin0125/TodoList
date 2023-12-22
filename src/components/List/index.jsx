import './index.css'
import Item from "../Item";

export default function List({todos,updateTodo,deleteTodo}){
  return(
    <ul className='todo-main'>
      {
        todos.map((todo) => {
          // return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done}/>;
          return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>;
        })
      }
    </ul>
  )
}