import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <>
      <div className={styles.mainloader}>
        <div className={styles.loader}>
          <div className={styles.box}></div>
          <span className={styles.span}>Loading.....</span>
        </div>
      </div>
    </>
  );
};

export default Loader;
