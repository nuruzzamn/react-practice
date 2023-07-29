import React,{useState} from 'react'

export default function Loginform() {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const onsubmit=(e)=>{
        e.preventDefault()

        const userInfo ={
            name, email, password
        }

        console.log(userInfo)
        
    }

    const onnamechangehandler=(e)=>{
        setname(e.target.value)
    }

    const onemailchangehandler=(e)=>{
        setemail(e.target.value)
    }

    const onpasswordchangehandler=(e)=>{
        setpassword(e.target.value)
    }
  return (
    <div>
        <form onSubmit={onsubmit}>
            <div> 
                <label htmlFor="name"> Name : </label>
                <input type="text" id='name' name='name' onChange={onnamechangehandler} value={name}/>
            </div>

            <div> 
                <label htmlFor="email"> Email : </label>
                <input type="text" id='eamil' name='email' onChange={onemailchangehandler} value={email}/>
            </div>

            <div> 
                <label htmlFor="password"> Password : </label>
                <input type="password" id='password' name='password' onChange={onpasswordchangehandler} value={password}/>
            </div>

            <button type='submit'> Sign Up </button>

        </form>
    
    </div>
  )
}
