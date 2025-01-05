
import './App.css';
import Header from "./components/Header";
import { Todo } from './components/Todo';
import {Footer}from "./components/Footer";
import React ,{useState} from 'react';

function App() {
const onDelete =(todo) =>{
  console.log("I am onDelete",todo);
  // Deleting this way in react does not Work
  // let index = todos.indexOf(todo);
  // todos.splice(index,1);

   setTodos(todo.filter((e)=>{
      return e!==todo;
   }));
}


  const [todo , setTodos] = useState([
    {
      sno : 1,
      title : "Go To the market",
      desc : "You need to go to market to do this job1"
    },
    {
      sno : 1,
      title : "Go To the mall",
      desc : "You need to go to market to do this job2"
    },
    {
      sno : 1,
      title : "Go To the school",
      desc : "You need to go to market to do this job3"
    }
  ]);
  return (
    <>
    <Header title="my ToDos List" searchBar={false}/>

    <Todo Todo={Todo} onDelete={onDelete}/>
    <Footer/>

    </>
  );
}

export default App;
