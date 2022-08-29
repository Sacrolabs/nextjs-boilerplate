import React from "react";
import { wrapper } from "../store";
import { addUser } from "../store/action";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
const AddUser = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const [name, setName] = useState("");

  const addNewUser = () => {
    dispatch(addUser(name));
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div className="user-align">
      <label>New User:</label>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={addNewUser}>Add</button>
      <h4>User List:</h4>

      {users.map((user) => (
        <div>{user}</div>
      ))}
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const response = await fetch(
      `https://reqres.in/api/users/${Math.floor(Math.random() * 10 + 1)}`
    );
    const { data } = await response.json();
    store.dispatch(addUser(`${data.first_name} ${data.last_name}`));
  }
);

export default AddUser;
