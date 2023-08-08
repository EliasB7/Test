import React from "react";
import imageLogo from "../../logo/NCR.D.svg";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <img alt="Logo" className={styles.logo} src={imageLogo} />
    </nav>
  );
}

export default NavBar;
