import styles from './Portfolio.module.css';
import ReadMoreIcon from '../assets/ReadMore.svg?react';
import GithubIcon from "../assets/github_seeklogo.svg?react"

interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imagePosition: 'left' | 'right';
  websiteUrl: string;
  githubUrl: string;
  isDemo: boolean;
}

export function ProjectCard({ number, title, description, imageSrc, imagePosition, websiteUrl, githubUrl, isDemo }: ProjectCardProps) {
  const ImageSection = (
    <div className={imagePosition === 'right' ? styles.image2 : styles.image}>
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className={styles.img}
      />
    </div>
  );

  const ContentSection = (
    <article className={styles.details}>
      <div className={styles.div}>
        <h2 className={styles[number]}>{number}</h2>
        <h3 className={styles.cryptoScreenerApplication}>
          {title}
        </h3>
        <p className={styles.imEvrenShahLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe1500SWhenAnUnknownPrinterTookAGalleyOfTypeAndScrambledItToSpecimenBook}>
          {description}
        </p>
        <div className={styles.div2}>
        {isDemo && <a target="_blank" rel="noopener noreferrer" href={websiteUrl} aria-label="Read More" className={styles.readMore}>
          <ReadMoreIcon />
         
        </a>}
        <a target="_blank" rel="noopener noreferrer" href={githubUrl} aria-label="Read More" className={styles.readMore}>
          <GithubIcon />
         
        </a>
        </div>
        
      </div>
    </article>
  );

  return (
    <section className={styles.project1}>
      {imagePosition === 'left' ? (
        <>
          {ImageSection}
          {ContentSection}
        </>
      ) : (
        <>
          {ContentSection}
          {ImageSection}
        </>
      )}
    </section>
  );
}
