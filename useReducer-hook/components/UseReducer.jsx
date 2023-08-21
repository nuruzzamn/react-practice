import React, { useReducer } from 'react'
import { useState } from 'react'

const booksData = [{id: 1 , name: "Zaman"},
                    {id: 2 , name: "Nur"},
                    {id: 3, name: "Moon"},
                    {id: 4, name:"shuvo"}]

const Modal =({modalText})=>{

    return <p>{modalText}</p>
}

const reduce =(state, action)=>{
    if(action.type === "ADD"){
        const allBooks = [...state.books, action.payload]

        return {
            ...state,
            books: allBooks,
            isModalOpen: true,
            modalText: 'moral text here',

        }
    }

    return state;
}

const UseReducer = () => {

    const [booksState, dispatch] = useReducer(reduce, {
        books: booksData,
        modalText: " ",
        isModalOpen: false
    })

    const [booksName, setBooksName] = useState('')

    // const [books, setBooks] = useState(booksData)
    // const [booksName, setBooksName] = useState('')

    // const [modalText, setModalText] = useState('')
    // const [isModalOpen, setIsModalOpen] = useState(false)
    

    const handleChange =(e)=>{
        setBooksName(e.target.value)
    }
 
    const btnHandle =(e)=>{
        e.preventDefault()
        const newBooks = {id: new Date().getTime().toString(), name: booksName}

        dispatch({type:"ADD", payload:newBooks})

        // setBooks ((preData)=>{
        //     const newBooks = {id: new Date().getTime().toString(), name: booksName}

        //     return [... preData, newBooks]
        // })
        // setIsModalOpen(true)
        // setModalText("modal text show here")
    }
  return (
    <div>
    <h1>Books Data</h1>

    <form onSubmit={btnHandle}>
        <input type="text" onChange={handleChange}/>
        <button type='submit'>Add Books</button>
    </form>

    {booksState.isModalOpen && <Modal modalText= {booksState.modalText}/>}

    {booksState.books.map((book)=>{
        const {id, name}=book;

        return <li key={id}>{book.name}</li>
    })}
</div>
  )
}

export default UseReducer