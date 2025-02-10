import React from "react";
import styles from "./Portfolio.module.css";
import { Header } from "./Header";
import { Hero } from "./Hero";
import Projects from "./Projects";
import { Contact } from "./Contact";

export const Portfolio: React.FC = () => {
  return (
    <div className={styles.portfolio}>
      <Header />
      <div className={styles.background}>
        <div className={styles.content}>
          <Hero />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};
