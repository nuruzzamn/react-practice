import React from 'react'
import { useState } from 'react'

const booksData = [{id: 1 , name: "Zaman"},
                    {id: 2 , name: "Nur"},
                    {id: 3, name: "Moon"},
                    {id: 4, name:"shuvo"}]

const Modal =({modalText})=>{
    return <p>{modalText}</p>

    // console.log("from modal components", modalText)
}

const Books = () => {
    const [books, setBooks] = useState(booksData)
    const [booksName, setBooksName] = useState('')

    const [modalText, setModalText] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    

    const handleChange =(e)=>{
        setBooksName(e.target.value)
    }
 
    const btnHandle =(e)=>{
        e.preventDefault()

        setBooks ((preData)=>{
            const newBooks = {id: new Date().getTime().toString(), name: booksName}

            return [... preData, newBooks]
        })
        setIsModalOpen(true)
        setModalText("modal text show here")
    }

  return (
    <div>
        <h1>Books Data</h1>

        <form onSubmit={btnHandle}>
            <input type="text" onChange={handleChange}/>
            <button type='submit'>Add Books</button>
        </form>

        {isModalOpen && <Modal modalText= {modalText}/>}

        {books.map((book)=>{
            const {id, name}=book;

            return <li key={id}>{book.name}</li>
        })}
    </div>
  )
}

export default Books