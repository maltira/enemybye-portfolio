import { useState } from 'react'
import { Container, TextWithIcon, TitleContainer } from '@/shared/ui'
import { layerSparkleIcon } from '@/shared/assets'
import type { Project } from '@/entities/project'
import { ProjectModal } from '@/features/project-modal'
import { ProjectCarousel } from './ProjectCarousel'
import { PROJECTS_DATA } from '../model/projects.data'
import styles from './ProjectsSection.module.scss'

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <Container className={styles.section}>
      {/* Title */}
      <TitleContainer>
        <h1>Dev & Design</h1>
        <TextWithIcon>
          <h1>Selected</h1>
          <img src={layerSparkleIcon} alt="icon" />
          <h1>Projects</h1>
        </TextWithIcon>
      </TitleContainer>

      {/* Projects Carousel */}
      <ProjectCarousel
        projects={PROJECTS_DATA}
        onSelectProject={setSelectedProject}
      />

      {/* Project Details Modal Feature */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Container>
  )
}
