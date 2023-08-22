import React from 'react'

const User = ({userData}) => {
    const {id, name}= userData;

    console.log("User data",userData)
  return (
    <>
    <article>
        <h1>Name : {name}</h1>
        <p>ID : {id}</p>

    </article>
        
    </>
  )
}

export default User