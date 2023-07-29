import React, {useState} from 'react'
import NewTodos from './NewTodos'
import Todos from './Todos'
import {v4 as uuidv4} from 'uuid'

import style from './module/home.module.css'


export default function Home() {

  const [todos, setTodos] = useState([])

  const handleTodos=(todo)=>{
      // console.log(todo)

      setTodos((previoustodos)=>{

        return [...previoustodos, { id: uuidv4(), todo}]
      })

      console.log(todos)
  } 

  const onremovetodos=(id)=>{
    // alert(id)

    setTodos((previousTodos)=>{
      const filterTodos= previousTodos.filter((todo)=>todo.id != id);

      return filterTodos
    })
    
  }

  return (
    <div className={style.container}>
        <h1 style={{color:'white'}}> Todo App </h1>
        <NewTodos onAddTodos={handleTodos}/>
        <Todos todos={todos} onRemoveTodos={onremovetodos}/>

    </div>
  )
}
