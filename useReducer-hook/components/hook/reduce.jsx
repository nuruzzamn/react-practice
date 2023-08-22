export const reduce = (state, action) => {
  if (action.type === "ADD") {
    const allBooks = [...state.books, action.payload];

    return {
      ...state,
      books: allBooks,
      isModalOpen: true,
      modalText: "moral text here",
    };
  }

  if (action.type === "REMOVE") {
    const filteredBooks = [...state.books].filter(
      (book) => book.id !== action.payload
    );
    return {
      ...state,
      books: filteredBooks,
      isModalOpen: true,
      modalText: "book is removed",
    };
  }
  return state;
};
