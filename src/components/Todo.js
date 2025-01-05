import React from 'react'
// import TodoItems  from "./components/TodoItems";
import { TodoItems } from './TodoItems';


export const Todo = (props) => {
  return (
    <div className='container'>
     <h3 className='text-center my-3'> Todos list!</h3>
     {props.todos.length === 0 ? "No Todos To Display":
     props.todos.map((todo)=>{
      return   <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
     
     })}
     
      </div>
  )
}
 
