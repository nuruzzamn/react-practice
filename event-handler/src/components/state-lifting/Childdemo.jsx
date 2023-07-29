import React from 'react'
import App from '../../App'

export default function Childdemo(props) {
    
    let childdata= "(Child demo) Now i'm from child"
    props.onChildData(childdata)
  return (
    <div>
        <p>{props.dataProp}</p>
    </div>
  )
}
