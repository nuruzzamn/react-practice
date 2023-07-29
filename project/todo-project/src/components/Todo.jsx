import React from 'react'

import style from './module/todo.module.css'

export default function Todo(props) {
    // console.log(props.todo)
    const {title, description}= props.todo
    const {id}= props

    // .

    const clickHandle=(id)=>{
      // alert(id)

      props.onRemoveTodos(id)

    }

  return (
    <article className={style.todo}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className={style.btnPosition}>
        <button className={style.btn} onClick={()=>clickHandle(id)}>
            <i className='fa fa-trash fa-2x'>  </i>
        </button>
      </div>

    </article>
   
  )
}
