import React from 'react'
import { useState } from 'react'

export default function StateDemo() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1);
      }

    return (
        <div>  

            <p> You pressed me  {count} times</p> 
            <button onClick={handleClick}>Button click</button> 

        </div>
        
     )
}
