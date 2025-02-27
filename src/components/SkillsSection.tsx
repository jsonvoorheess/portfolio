import { SkillCard } from "./SkillCard";
import styles from "./Portfolio.module.css";
import nextIcon from '../assets/nextIcon.svg';
import htmlIcon from '../assets/htmlIcon.svg';
import sassIcon from '../assets/sassIcon.svg';
import gitIcon from '../assets/gitIcon.svg';
import jsIcon from '../assets/JsIcon.svg';
import cssIcon from '../assets/cssIcon.svg';
import eslintIcon from '../assets/eslintIcon.svg';
import githubIcon from '../assets/githubIcon.svg';
import jestIcon from '../assets/jestIcon.svg';
import jsonIcon from '../assets/JsonIcon.svg';
import npmIcon from '../assets/npmIcon.svg';
import reactIcon from '../assets/ReactIcon.svg';
import reduxIcon from '../assets/ReduxIcon.svg';
import typescriptIcon from '../assets/typescriptIcon.svg';
import webpackIcon from '../assets/webpackIcon.svg';
import antIcon from '../assets/antIcon.svg';
import babelIcon from '../assets/BabelIcon.svg';
import figmaIcon from '../assets/FigmaIcon.svg';
import { useEffect, useState } from "react";




interface Skill {
  name: string;
  iconUrl: string;
  isDark?: boolean;
}


const SKILLS_ROW_1: Skill[] = [
  {
    name: "Git",
    iconUrl:
    gitIcon,
  },
  {
    name: "javascript",
    iconUrl:
    jsIcon,

  },
  {
    name: "Sass/scss",
    iconUrl:
     sassIcon,
  },
  {
    name: "Next.Js",
    iconUrl:
      nextIcon,
  },
  {
    name: "HTML",
    iconUrl:
    htmlIcon,
  },
  {
    name: "CSS",
    iconUrl:
    cssIcon,

  },
  {
    name: "ESLint",
    iconUrl:
    eslintIcon,

  },
  {
    name: "Github Actions",
    iconUrl:
    githubIcon,
  },
  {
    name: "Jest",
    iconUrl:
      jestIcon,
  },
  {
    name: "Builder.io",
    iconUrl:"https://files.svgcdn.io/logos/builder-io-icon.svg"
  },

  {
    name: "JSON",
    iconUrl:
      jsonIcon,

  },
  {
    name: "npm",
    iconUrl:
    npmIcon,
  },
  {
    name: "React",
    iconUrl:
    reactIcon,
  },
  {
    name: "Redux Toolkit",
    iconUrl:
    reduxIcon,
  },
  {
    name: "Typescript",
    iconUrl:
    typescriptIcon,
  },
  {
    name: "Webpack",
    iconUrl:
    webpackIcon,
  },
  {
    name: "Ant Design",
    iconUrl:
    antIcon,
  },
    {
      name: "Cursor.io",
      iconUrl:"https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/cursor.png"
    },
    {
      name: "Babel",
      iconUrl: babelIcon,
    },
    {
      name: "Figma",
      iconUrl: figmaIcon,
    },
    {
      name: "Rest Api",
      iconUrl: "https://cdn-icons-png.flaticon.com/512/10169/10169724.png",
    },
    {
      name: "stylelint",
      iconUrl: "https://static-00.iconduck.com/assets.00/stylelint-icon-2048x1954-kkr67j6e.png",
    },
    {
      name: "React Router",
      iconUrl: "https://static-00.iconduck.com/assets.00/react-router-icon-1024x559-m9r1k9t4.png",
    },
    {
      name: "Next Auth",
      iconUrl: "https://camo.githubusercontent.com/243909f00e726430f4d7e31c0f5e5c87e3abde526714482c806445852907d319/68747470733a2f2f6e6578742d617574682e6a732e6f72672f696d672f6c6f676f2f6c6f676f2d736d2e706e67",
    },





];




export function SkillsSection() {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(Math.floor(Math.random() * SKILLS_ROW_1.length));
    }, 1500);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <header className={styles.titleRow} id="skills">
          <h1>
            <span className={styles.titleLight}>My</span>{" "}
            <span className={styles.titleBold}>Skills</span>
          </h1>
        </header>

        <div className={styles.skillsGrid}>
            {SKILLS_ROW_1.map((skill, index) => (
              <SkillCard
                key={`skill-1-${index}`}
                name={skill.name}
                iconUrl={skill.iconUrl}
                isDark={skill.isDark}
                isActive={index === activeIndex}
              />
            ))}
          </div>
      </div>
    </section>
  );
}