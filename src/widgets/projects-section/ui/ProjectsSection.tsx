import { useState } from 'react'
import { Container, TextWithIcon, TitleContainer } from '@/shared/ui'
import { layerSparkleIcon } from '@/shared/assets'
import { PROJECTS_DATA, type Project } from '@/entities/project'
import { ProjectModal } from '@/features/project-modal'
import { ProjectCarousel } from './ProjectCarousel'
import styles from './ProjectsSection.module.scss'

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <Container className={styles.section}>
      {/* Title */}
      <TitleContainer as="h2">
        <span>Dev & Design</span>{' '}
        <TextWithIcon>
          <span>Selected</span>{' '}
          <img src={layerSparkleIcon} alt="" />{' '}
          <span>Projects</span>
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
