import React, {useState} from 'react'
import Home from './Home'

export const Newtodo = (props) => {
    // set a useState for todo and initial value ""
    const [todo, setTodo] = useState("")

    // handle onChange 
    const todoChange=(event)=>{
        // set onChange value on todo uaeState 
        setTodo(event.target.value)
    }

    // for click from button
    const todoSubmit=(event)=>{
        event.preventDefault()

        // send todo on parent components
        props.onHometodos(todo)
    }
  return (
    <div>
        {/* design a form with a text input feild and a button */}
        <form action="" onSubmit={todoSubmit}>
            <label htmlFor="newtodo"> New Todo : </label>
            {/* declare onChange for control todoChange input feild */}
            <input type="text" id='newtodo' name='newtodo' onChange={todoChange} value={todo}/>
            <button> Add Todo</button>
        </form>

    </div>
  )
}
