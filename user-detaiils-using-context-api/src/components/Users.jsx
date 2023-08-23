import User from "./User";
import "../index.css";
import { UserCustomContext } from "../../context/UserCustomContext";

const Users = () => {
  const { userData } = UserCustomContext();

  return (
    <>
      <section className="users">
        {userData.map((user) => (
          <User key={user.id} users={user} />
        ))}
      </section>
    </>
  );
};

export default Users;
