import React, {useState} from 'react'
import Todos from './Todos'
import { Newtodo } from './Newtodo'

// Set a dummy data for initinal state value 
const dummyTodos= ["todo1", "todo2"]

const Home = () => {
  const [todos, setTodos] = useState(dummyTodos)

  //create parent props(onHometodos) method => (onhometodos) for receiving child sending todo
  const onhometodos=(newTodo)=>{
    //set undividual todo with previous todo
    setTodos([...todos, newTodo])
  }

  return (
    <div>
        {/* receving data from child Newtodo components */}
        <Newtodo onHometodos={onhometodos}/>

        {/* send props todo on <Todos /> componets */}
        <Todos todos={todos}/>
    </div>
  )
}

export default Home