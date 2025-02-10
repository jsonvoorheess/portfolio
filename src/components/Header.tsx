import React from "react";
import styles from "./Portfolio.module.css";
import Logo from "../assets/Logo.svg?react";
export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.navigation}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">Contacts</a>
      </nav>
      
    </header>
  );
};
