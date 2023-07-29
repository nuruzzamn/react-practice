import React, {useState} from 'react'


export default function Usestatewithobject() {

    const [user, setuser] = useState({name:'', email:'', password:''})

    const {name, email, password}= user

    const handlechange=(e)=>{
        console.log(e.target.name)

        setuser({...user,[e.target.name]:e.target.value})

    }

    const submitClick=(e)=>{
        e.preventDefault()
        let data = {name, email, password}
        
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
                        onChange={handlechange}
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
                        onChange={handlechange}
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
                        onChange={handlechange}
                        value={password}/>
            </div>

            <button type='submit'> Registration </button>
           
        </form>


    </div>
  )
}
