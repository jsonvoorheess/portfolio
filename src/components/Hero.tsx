import React, { useState, useEffect, useRef } from "react";
import styles from "./Portfolio.module.css";
import Vector from "../assets/Vector.svg?react";
import useWindowSize from "../useWindowSize";
import Abc from "../assets/abc.svg?react";

export const Hero: React.FC = () => {
  const { width } = useWindowSize();
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const fullText = "I'm a Frontend Developer.";
  const roleRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (roleRef.current) {
      observer.observe(roleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [isVisible]);

  return (
    <>
    <div className={styles.heroContainer}>
      <div>
    <div className={styles.greeting}  id="about" >
        {
        width > 991 ? (
          <>
           <Vector />
          <div className={styles.greetingText}>
          Hello! I Am <span className={styles.highlight}>Zarifullin Danil</span>
          </div>
          </>
         
        ) : <>
          
        <div className={styles.greetingText}>
        Hello! I Am <span className={styles.highlight}>Zarifullin Danil</span>
        </div>
        <Abc />
       </>}
       
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.imageColumn}>
          <img
            loading="lazy"
            className={styles.profileImage}
            srcSet="https://cdn.builder.io/api/v1/image/assets/dd15ee627bdf46a9b691a6ea1dddc9a1/892675d1737753df016fa9487c2b8e0ba4e13a39336917c2fbbe5683c823ad44?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/dd15ee627bdf46a9b691a6ea1dddc9a1/892675d1737753df016fa9487c2b8e0ba4e13a39336917c2fbbe5683c823ad44?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/dd15ee627bdf46a9b691a6ea1dddc9a1/892675d1737753df016fa9487c2b8e0ba4e13a39336917c2fbbe5683c823ad44?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/dd15ee627bdf46a9b691a6ea1dddc9a1/892675d1737753df016fa9487c2b8e0ba4e13a39336917c2fbbe5683c823ad44?placeholderIfAbsent=true&width=800 800w"
            alt="Profile"
          />
        </div>
        <div className={styles.textColumn}>
          <div className={styles.tagline}>
            <div className={styles.taglineText}>
              Judges a book
              <br />
              by its <span className={styles.highlight}>cover</span>...
            </div>
            <div className={styles.taglineSubtext}>
              Because if the cover does not impress you what else can?
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className={styles.introduction}>
        <div className={styles.role} ref={roleRef}>{text} <span className={styles.blink} >|</span></div>
        <div className={styles.bio}>
          A self-taught <span className={styles.highlight}>Frontend Developer</span>
          <br />
          I make meaningful and delightful digital products that create an
          equilibrium
          {/* <br /> */}
          between user needs and business goals.
        </div>
        
      </div>
    </div>
      
      
    </>
  );
};
