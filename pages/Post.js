import React from "react";
import axios from "axios";
const Post = ({ usersData }) => {
  return (
    <>
      <table id="customers">
        <tr>
          <th>S.No.</th>
          <th>Name</th>
          <th>E-mail</th>
        </tr>
        {usersData &&
          usersData.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td> {item.name}</td>
                <td> {item.email}</td>
              </tr>
            );
          })}
      </table>
    </>
  );
};
export default Post;
export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_SERVER_API_DUMMY_DATA_ENDPOINT}` + "/usersData"
  );
  const data = response.data;
  return {
    props: {
      usersData: data,
    },
  };
}
