import React from 'react'
import { Todo } from './Todo'

export const  TodoItems = ({todo,onDelete}) => {
  return (
    <>
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className=" btn btn-sm btn-danger"onClick={()=>{onDelete(Todo)}}>Delete</button>
      </div>
      <hr/>
      </>
  )
}

