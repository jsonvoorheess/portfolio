import styles from './Portfolio.module.css';
import { ProjectCard } from './ProjectCard';
import movieAppImage from '../assets/movieApp.png';
import artAppImage from '../assets/artApp.png';
import shopAppImage from '../assets/shopapp.png';

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
        isDemo={true}
        number=""
        githubUrl="https://github.com/jsonvoorheess/movieApp"
        title="Movie Reviewer"
        description="I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
        imageSrc={movieAppImage}
        imagePosition="left"
        websiteUrl="https://movieappads.netlify.app/"
      />

      <ProjectCard
        isDemo={false}
        number=""
        githubUrl="https://github.com/jsonvoorheess/Articles-App"
        title="Dev Clone"
        description="I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book. when an unknown printer took a galley of type and scrambled it to specimen book."
        imageSrc={artAppImage}
        imagePosition="right"
        websiteUrl="https://movieappads.netlify.app/"
      />

      <ProjectCard
        isDemo={false}
        number=""
        githubUrl="https://github.com/evrenshah/blog-website-template"
        title="Blog Website Template"
        description="I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
        imageSrc={shopAppImage}
        imagePosition="left"
        websiteUrl="https://movieappads.netlify.app/"
      />
    </section>
  );
}
