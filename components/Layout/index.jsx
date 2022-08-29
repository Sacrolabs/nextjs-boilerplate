import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer/index";
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
