import styles from './Portfolio.module.css';


interface SkillCardProps {
    name: string;
    iconUrl: string;
    isDark?: boolean;
    className?: string;
    isActive?: boolean;
  }

  
  export function SkillCard({ name, iconUrl, isActive }: SkillCardProps) {

    return (
      <article  className={`${styles.skillCard} ${isActive ? styles.active : ''}`}>
        <img
          loading="lazy"
          src={iconUrl}
          alt={`${name} icon`}
          className={styles.skillIcon}
        />

        <h3 className={styles.skillName}>
          {name}
        </h3>
      </article>
    );
  }