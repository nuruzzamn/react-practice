import React from 'react'

export default function Todo(props) {
    // console.log(props.todo)
  return (
    <div>
        
        {/* receving todo with props and show props data on Todo components with a custom style */}
        <p style={{ color: 'blue', lineHeight : 1, padding: 2 }}> From todo {props.todo} </p>
        
        </div>
  )
}
