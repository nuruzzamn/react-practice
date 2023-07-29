import React, {useState} from 'react'

import style from '../module/faq.module.css'

export default function Faq(props) {
    //destructuring 
    const {id, title, des}=props

    const [toggle, settoggle] = useState(false)

    
  return (
    <article className= {style.faq}>
        <div>
            <h4>{title}</h4>
            <button onClick={()=>{settoggle(!toggle)
            }}>
                {toggle ? "-": "+"}
                
            </button>
        </div>
        { toggle && <p>{des}</p>}
    </article>
  )
}
