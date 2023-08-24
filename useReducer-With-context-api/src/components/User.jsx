import "../index.css";
import { UserCustomContext } from "../../context/UserCustomContext";

const User = ({ users }) => {
  const { dispatch } = UserCustomContext();

  const { id, name } = users;

  const UserDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <>
      <article className="container">
        <h1>Name : {name}</h1>
        <p>ID : {id}</p>

        <button
          onClick={() => {
            UserDelete(id);
          }}
        >
          Delete
        </button>
      </article>
    </>
  );
};

export default User;
