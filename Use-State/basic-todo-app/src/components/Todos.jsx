import React from 'react'
import Todo from './Todo'

export default function Todos(props) {
    //  console.log(props.todos)
  return (
    <div>
      {/* receiving todos data from parent components & call individual with map & finally send todo data on <Todo /> compontnts  */}
       {props.todos.map((todo, index)=> <Todo key={index} todo={todo}/>)}
    </div>
  )
}
