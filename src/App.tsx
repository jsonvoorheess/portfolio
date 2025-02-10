import './App.css'
import { builder } from '@builder.io/react';
import { Header } from './components/Header';
import styles from './components/Portfolio.module.css';
import { Hero } from './components/Hero';
import Projects from './components/Projects';
import { Contact } from './components/Contact';
import { SkillsSection } from './components/SkillsSection';

builder.init('dd15ee627bdf46a9b691a6ea1dddc9a1')

function App() {

  return (
    <>
  
    <main className={styles.portfolio}>
    <Header />
      <section className={styles.background}>
        <div className={styles.content}>
          <Hero />
          <SkillsSection />
          <Projects />
          <Contact />
        </div>
      </section>
    </main>
    </>
    
  )
}

export default App
