import React from "react";
import styles from "../styles/UserList.module.css";
const UserList = ({ users }) => {
  return (
    <div className={styles.userList}>
      <div className={styles.alignmemt}>
      
          {users.map((user, id) => {
            return (
              <ol key={user.id} className="user-name">
                <p className={styles.user_name_list}>{user.name}</p>
              </ol>
            );
          })}
      </div>
    </div>
  );
};

export default UserList;
export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_DUMMY_ENDPOINT}${"/users"}`
  );
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}
