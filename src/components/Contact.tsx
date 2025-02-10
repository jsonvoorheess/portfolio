import React from "react";
import styles from "./Portfolio.module.css";

export const Contact: React.FC = () => {
  return (
    <div className={styles.contactSection}>
      <div className={styles.contact}>Contact</div>
      <div className={styles.contactText}>
        I'm currently looking to join a cross-functional team that values
        improving people's lives
        <br />
        through accessible design. or have a project in mind? Let's connect.
        <br />
        <br />
        ibrhaimmemon930@gmail.com
      </div>
    </div>
  );
};
