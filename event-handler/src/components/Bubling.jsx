import React from 'react'


// we can control bubling using stopPropagation 
export default function Eventbubling() {

  const childClick=(e)=>{
    e.stopPropagation()
    console.log('child Click', e)
  }

  const parentClick=(e)=>{
    console.log('parent click', e)
  }

  return (
    <div className='parent' onClick={parentClick}>

      <button onClick={childClick}> child button </button>

    </div>
  )
}
