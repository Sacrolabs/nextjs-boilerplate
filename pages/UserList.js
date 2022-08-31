import React from "react";
import styles from "../styles/UserList.module.css";
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_DUMMY_DATA_ENDPOINT}${"/users"}`
  );
  const data = await response.json();

  return data;
};
const UserList = () => {
  const { data, error } = useSWR("UserList", fetcher);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  return (
    <div className={styles.userList}>
      <div className={styles.alignmemt}>
        <div>
          {data.map((user, id) => {
            return (
              <ol key={user.id} className="user-name">
                <p className={styles.user_name_list}>{user.name}</p>
              </ol>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserList;
