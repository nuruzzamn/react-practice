import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

    const navigate = useNavigate();
  return (
    <>
    <h1>Contact</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum omnis eveniet beatae dolore facere vero, maxime perspiciatis qui error repellendus modi velit commodi voluptate explicabo. Est reprehenderit iure numquam nostrum corrupti? Velit, voluptates! Iusto nam vero esse, ipsam quia recusandae amet architecto blanditiis debitis unde natus? Eius molestiae minus corporis?</p>

    <button onClick={()=>{navigate('/home')}}> integrate in home page </button>

    </>
  )
}

export default Contact