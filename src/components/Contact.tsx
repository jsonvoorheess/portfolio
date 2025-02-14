import React from "react";
import styles from "./Portfolio.module.css";
import TeleIcon from "../assets/teleIcon.svg?react";
import VkIcon from "../assets/vkIcon.svg?react";

export const Contact: React.FC = () => {
  return (
    <div className={styles.contactSection} id="contacts">
      <div className={styles.contact}>Contacts</div>
      <div className={styles.contactText}>
        I'm currently looking to join a cross-functional team that values
        improving people's lives
        <br />
        through accessible design. or have a project in mind? Let's connect.
        <br />
        <br />
        <div className={styles.telegramDiv}>
          <a
            className={styles.telegramIcon}
            href="https://t.me/jsvrhes"
            target="_blank"
          >
            <TeleIcon />
          </a>
          <a
            className={styles.telegramIcon}
            href="https://vk.com/lyingtomyselfff"
            target="_blank"
          >
            <VkIcon />
          </a>
        </div>
        zarifullin1688@gmail.com
      </div>
    </div>
  );
};
