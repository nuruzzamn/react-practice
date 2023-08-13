import React from 'react'
import useFetch from './useFetch'

import { useState, useEffect } from 'react'

function DataFetch() {

  const {data, isloading, error} = useFetch("https://jsonplaceholder.typicode.com/todos")

  const loaddingMessage = <p> Todo is loading </p>
  const errorMessage = <p> {error} </p>

  const todosData = data && data.map((todo)=>{
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