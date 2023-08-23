import "../index.css";
import { UserCustomContext } from "../../context/UserCustomContext";

const User = ({ users }) => {
  const { userData, setUserData } = UserCustomContext();

  const { id, name } = users;

  const UserDelete = (id) => {
    const filter = userData.filter((user) => user.id !== id);
    setUserData(filter);
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
