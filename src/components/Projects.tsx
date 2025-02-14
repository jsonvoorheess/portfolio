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
        description="A web application with a review of films and TV series with the ability to leave your favorite ones in the cart. There are two themes: light and dark. There is also a modal window with the ability to leave your email"
        imageSrc={movieAppImage}
        imagePosition="left"
        websiteUrl="https://movieappads.netlify.app/"
      />

      <ProjectCard
        isDemo={false}
        number=""
        githubUrl="https://github.com/jsonvoorheess/Articles-App"
        title="Dev Clone"
        description="A simplified clone of the platform for developers with articles with the ability to leave comments and likes after successful OAuth GitHub authorization. There are also two topics on the site"
        imageSrc={artAppImage}
        imagePosition="right"
        websiteUrl="https://movieappads.netlify.app/"
      />

      <ProjectCard
        isDemo={false}
        number=""
        githubUrl="https://github.com/jsonvoorheess/shop-app"
        title="Сlothing store"
        description="A web application that is a clothing store with the ability to log in using a login and password, after which you can add clothes to your cart"
        imageSrc={shopAppImage}
        imagePosition="left"
        websiteUrl="https://movieappads.netlify.app/"
      />
    </section>
  );
}
