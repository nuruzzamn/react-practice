import { useState } from "react";
import { UserCustomContext } from "../../context/UserCustomContext";

const NewUser = () => {
  const { userData, setUserData } = UserCustomContext();

  const [newUser, setNewUser] = useState("");

  const handleChange = (e) => {
    setNewUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("new iinput data", newUser);

    const userNewData = { id: new Date().getTime().toString(), name: newUser };

    const updateUser = [...userData, userNewData];

    setUserData(updateUser);

    setNewUser("");
  };

  return (
    <div>
      <h1>Add new user</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={newUser} onChange={handleChange} required />
        <button>Add user</button>
      </form>
    </div>
  );
};

export default NewUser;
