import styles from './Portfolio.module.css';
import { ProjectCard } from './ProjectCard';
import movieAppImage from '../assets/movieApp.png';

export default function Projects() {
  return (
    <section className={styles.container}>
      <header className={styles.heading}>
        <h1 className={styles.headingText} id="projects">
          <span className={styles.my}>My</span>
          <span className={styles.projects}>Projects</span>
        </h1>
      </header>
      
      <ProjectCard
        number="num1"
        title="Crypto Screener Application"
        description="I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
        imageSrc={movieAppImage}
        imagePosition="left"
        websiteUrl="https://movieappads.netlify.app/"
      />

      <ProjectCard
        number="num2"
        title="Euphoria - Ecommerce (Apparels) Website Template"
        description="I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book. when an unknown printer took a galley of type and scrambled it to specimen book."
        imageSrc="https://cdn.builder.io/api/v1/image/assets/dd15ee627bdf46a9b691a6ea1dddc9a1/76200726e63e16547e1c80dee9b699f85323ebb3a9506a92297a5570b58013a2?placeholderIfAbsent=true"
        imagePosition="right"
        websiteUrl="https://movieappads.netlify.app/"
      />

      <ProjectCard
        number="num3"
        title="Blog Website Template"
        description="I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
        imageSrc="https://cdn.builder.io/api/v1/image/assets/dd15ee627bdf46a9b691a6ea1dddc9a1/73a0742bd4cedd6ed245614ae5c3f037b8f0646dd23a6aaafd8a02519a5edd22?placeholderIfAbsent=true"
        imagePosition="left"
        websiteUrl="https://movieappads.netlify.app/"
      />
    </section>
  );
}
