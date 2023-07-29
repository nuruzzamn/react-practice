import React, { useState } from 'react'

export default function UpdateState() {

    const [count, setCount] = useState(0)

    const btnClick = ()=>{
        setCount(count =>count + 1)
        setCount(count =>count + 1)
        setCount(count =>count + 1)
    }

    const btnClick5x = ()=>{
        setCount(count =>count + 1)
        setCount(count =>count + 1)
        setCount(count =>count + 1)
        setCount(count =>count + 1)
        setCount(count =>count + 1)
    }

  return (


    <div>
    <p> count is : {count} </p>
    <button onClick={btnClick}> 3+ </button>

    <button onClick={btnClick5x}> 5+ </button>


    </div>
   
  )
}
