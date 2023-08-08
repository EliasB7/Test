import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <hr className={styles.hr} />
      <button className={styles.button}>salir</button>
    </footer>
  );
}

export default Footer;
