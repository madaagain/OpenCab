import React from "react";
import Header from "../Header/Header";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.layoutContent}>{children}</div>
    </>
  );
};

export default Layout;
