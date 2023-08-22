import React, { useReducer } from "react";
import { useState } from "react";
import { reduce } from "./hook/reduce";

const booksData = [
  { id: 1, name: "Zaman" },
  { id: 2, name: "Nur" },
  { id: 3, name: "Moon" },
  { id: 4, name: "shuvo" },
];

const Modal = ({ modalText }) => {
  return <p>{modalText}</p>;
};

//import reducer.jsx for using reduce method
const UseReducer = () => {
  const [booksState, dispatch] = useReducer(reduce, {
    books: booksData,
    modalText: " ",
    isModalOpen: false,
  });

  const [booksName, setBooksName] = useState("");

  const removeBook = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const handleChange = (e) => {
    setBooksName(e.target.value);
  };

  const btnHandle = (e) => {
    e.preventDefault();
    const newBooks = { id: new Date().getTime().toString(), name: booksName };

    dispatch({ type: "ADD", payload: newBooks });
    setBooksName("");
  };
  return (
    <div>
      <h1>Books Data</h1>

      <form onSubmit={btnHandle}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Add Books</button>
      </form>

      {booksState.isModalOpen && <Modal modalText={booksState.modalText} />}

      {booksState.books.map((book) => {
        const { id, name } = book;

        return (
          <li key={id}>
            {name}{" "}
            <button
              onClick={() => {
                removeBook(id);
              }}
            >
              Remove
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default UseReducer;
