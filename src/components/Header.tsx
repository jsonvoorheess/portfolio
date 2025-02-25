import React from "react";
import styles from "./Portfolio.module.css";
import Portfolio from "../assets/portfolio.svg?react";


export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Portfolio />
      <nav className={styles.navigation}>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">Contacts</a>
      </nav>
      
    </header>
  );
};
