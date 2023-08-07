import React, { useState } from 'react'
import { useEffect } from 'react'

const UseEffectDemo = () => {

  const [count, setcount] = useState(0)

  const [loaddata, setloaddata] = useState(false)

  //use this line as a anonyms fuction
  // const clickHandle = ()=>{
  //   setcount((count) => count +1);
  // }
/////

useEffect(() => {
  console.log("use effect")
}, [])

  return (
    <div>
        {console.log("rendering")}
        <h1>Count: {count} </h1>
        {/* <button onClick={clickHandle}>+</button> */}
        {/* use anonyms fuction   */}
        <button 
          onClick={ () =>
          (setcount((count)=> count + 1))}> 
          +
        </button>

        <button 
          onClick={ () =>
          (setloaddata(!loaddata))}> 
          is load
        </button>

    </div>
  )
}

export default UseEffectDemo