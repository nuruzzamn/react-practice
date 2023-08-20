import React, {useRef} from "react";

const UseRef = () => {

    const nameRef = useRef()
    const passwordRef = useRef()

    const handleSubmit=(e)=>{
        e.preventDefault();

        const nameRefValue = nameRef.current.value;
        const passwordRefValue = passwordRef.current.value;

        nameRef.current.style.color = 'red'

    console.log(nameRefValue, passwordRefValue)

    }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name :</label>
          <input type="text" ref={nameRef}/>
        </div>

        <div>
          <label htmlFor="password">Password :</label>
          <input type="password" ref={passwordRef}/>
        </div>

        <button>Registration</button>
      </form>
    </>
  );
};

export default UseRef;
