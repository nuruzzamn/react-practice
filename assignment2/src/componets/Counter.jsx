import React, {useState} from 'react'

export default function Counter() {

    const [count, setcount] = useState(0)

    // fuction for btnincrement
    const btnincrement=()=>{
        setcount(count + 1)

    }

    // function for btndecrement
    const btndecrement=()=>{
        setcount(count - 1)
    }

    // function for btnReset
    const btnReset=()=>{
        setcount(0)
    }
  return (
    <div>
        <div className='text center'>
            <div className="Counter center"> 
            <h1 className="counter__title"> Counter App</h1>
            <div className="card center">
                <h2 className="card_title"> count : {count} </h2>
                <div className="card btn">
                <button className="btn " onClick={btnincrement} disabled= {count === 5 ? true : false}> + </button>
                <button className="btn " onClick={btndecrement} disabled= {count === -5 ? true : false}> - </button>
                <button className="btn " onClick={btnReset}> 0 </button>
                </div>
            </div>
        </div>

        </div>
    </div>
  )
}
