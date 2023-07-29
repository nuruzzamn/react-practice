import React, { useState } from 'react'
import Home from './Home'

import style from './module/newtodos.module.css'


export default function NewTodos(props) {

  const [todo, setTodo] = useState({title:"", description:""})
  const {title, description}= todo

  const handleChange= (event)=>{
      const name= event.target.name

      setTodo((oldtodo)=>{
        return {...oldtodo, [name]:event.target.value}
      })

  }

  const submitHandle=(event)=>{
    event.preventDefault()
    props.onAddTodos(todo)
    setTodo({title:'', description:''})
}

  return (
    <form className={style.form} onSubmit={submitHandle}>
        <div className={style["form-feild"]}>
            <label htmlFor="title" > Title : </label>
            <input type="text" id="title" name="title" value={title} onChange={handleChange}/>
        </div>

        <div className={style["form-feild"]}>
            <label htmlFor="description"> Description : </label>
            <textarea type="text" id="description" name="description" value={description} onChange={handleChange}/>
        </div>

        <button type='submit'> Add Todo </button>
    </form>
  )
}
