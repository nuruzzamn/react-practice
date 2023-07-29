import React, {useState} from 'react'

export default function toggle() {

    const [toggle, setToggle] = useState(true)

  return (
    <div  style={{backgroundColor: 'lightblue', margin:'5px', padding:'.3rem'}}>
        {toggle && (
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi fugit laboriosam magni neque ut eum, 
            totam non qui fugiat maxime tempore? Totam assumenda autem repellendus, possimus harum aperiam error.</p>
        )}

        
        <div style={{textAlign:'center'}}>
            <button onClick={()=>{setToggle(!toggle)}}>
                 {toggle ? "Hide": "Show"}
            </button>
            
        </div>

    </div>
  )
}
