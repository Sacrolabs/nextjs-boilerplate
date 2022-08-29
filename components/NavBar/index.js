import React from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/UserList">UserList</Link>
      </li>
      <li>
        <Link href="/AddUser">Add User</Link>
      </li>
      <li>
        <Link href="/About">About Us</Link>
      </li>
    </ul>
  );
};

export default NavBar;
