import { Header, Hero, SkillsSection, ProjectsSection, GithubActivity, Footer } from '@/widgets'
import styles from './HomePage.module.scss'

export const HomePage = () => {
  return (
    <div className="pageContainer">
      <Header />
      <main className={styles.pageContent}>
        <Hero />
        <SkillsSection />
        <ProjectsSection />
        <GithubActivity />
        <Footer />
      </main>
    </div>
  )
}
