import User from "./User";
import "../index.css";
import { UserCustomContext } from "../../context/UserCustomContext";

const Users = () => {
  const { state } = UserCustomContext();

  return (
    <>
      <section className="users">
        {state.users.map((user) => (
          <User key={user.id} users={user} />
        ))}
      </section>
    </>
  );
};

export default Users;
