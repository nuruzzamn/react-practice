export const initialState = {
  users: [
    { id: 1, name: "zaman" },
    { id: 2, name: "nur" },
    { id: 3, name: "moon" },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case "DELETE":
      const filterData = state.users.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        users: filterData,
      };

    default:
      return state;
  }
};
