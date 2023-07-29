import React from 'react'
import Todo from './Todo'

import style from './module/todos.module.css'

export default function  Todos(props) {
    // console.log(props.todos)
  return (
    <section className={style.todos}>
        {props.todos.map((todo)=> <Todo key={todo.id} todo={todo.todo} id={todo.id} onRemoveTodos={props.onRemoveTodos}/>)}

    </section>
  )
}
