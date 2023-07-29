import React, {useState} from 'react'


export default function Controlledcomponent() {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')

    const nameHandler=(e)=>{
        setname(e.target.value)
    }

    const emailHandler=(e)=>{
        setemail(e.target.value)
    }

    const passHandler=(e)=>{
        setpass(e.target.value)
    }

    const submitClick=(e)=>{
        e.preventDefault()

        let data = {name, email, pass}

        console.log("submit btn click")
        console.log(data)
    }

  return (
    <div>
        <form action="" onSubmit={submitClick}>
            <div className='margin'>
                <label htmlFor="name">
                    Name : 
                </label>
                <input type="text" 
                        id='name' 
                        name='name' 
                        required 
                        className='margin-left'
                        onChange={nameHandler}
                        value={name}/>
            </div>

            <div className='margin'>
                <label htmlFor="email">
                    Email : 
                </label>
                <input type="email" 
                        id='email' 
                        name='email' 
                        required 
                        className='margin-left'
                        onChange={emailHandler}
                        value={email}/>
            </div>

            <div className='margin'>
                <label htmlFor="password">
                    Password : 
                </label>
                <input type="password" 
                        id='password' 
                        name='password' 
                        required 
                        className='margin-left'
                        onChange={passHandler}
                        value={pass}/>
            </div>

            <button type='submit'> Registration </button>
           
        </form>


    </div>
  )
}
