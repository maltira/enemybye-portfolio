import {
  Header,
  Hero,
  SkillsSection,
  Bio,
  ProjectsSection,
  GithubActivity,
  Footer,
} from '@/widgets'
import { InteractiveGrid } from '@/shared/ui'
import styles from './HomePage.module.scss'

export const HomePage = () => {
  return (
    <div className="pageContainer">
      <InteractiveGrid />
      <Header />
      <main className={styles.pageContent}>
        <Hero />
        <SkillsSection />
        <Bio />
        <ProjectsSection />
        <GithubActivity />
        <Footer />
      </main>
    </div>
  )
}
