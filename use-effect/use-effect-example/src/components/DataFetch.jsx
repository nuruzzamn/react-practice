import React from 'react'

import { useState, useEffect } from 'react'

function DataFetch() {

  const [todos, settodos] = useState(null)
  const [isloading, setisloading] = useState(true)
  const [error, setError] = useState(null)


  const loaddingMessage = <p> Todo is loading </p>
  const errorMessage = <p> {error} </p>

  useEffect(() => {
    

    // setTimeout(()=>{
      

    // },1000)

    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{

      if (!res.ok){
        throw error("Finding error");
      } else{
        return res.json();
      }
      
    })
    .then((data)=>{
      settodos(data)
      // console.log(todos)
      setisloading(false)
      setError(null)
    })
    .catch((error)=>{
      setError(error.message)
      setisloading(false)
    }) 

    
  }, [])

  const todosData = todos && todos.map((todo)=>{
    return <p key={todo.id}>{todo.title +" todo ID" + todo.id}</p>;
  })
  
  return (
    <div>
      <h1>Todos Data</h1>
      {isloading && loaddingMessage}
      {error &&  errorMessage}
      {todosData }
    </div>
     
  )
}

export default DataFetch