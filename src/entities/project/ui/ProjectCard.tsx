import type { Project } from '../model/types'
import { ProjectThumbnail } from './ProjectThumbnail'
import { ProjectTags } from './ProjectTags'
import styles from './ProjectCard.module.scss'

export interface ProjectCardProps {
  project: Project
  onClick?: (project: Project) => void
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div className={styles.card} onClick={() => onClick?.(project)}>
      {/* Thumbnail */}
      <div className={styles.thumbnailWrapper}>
        <ProjectThumbnail src={project.thumbnailUrl} alt={project.title} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.information}>
          <div className={styles.header}>
            <h3 className={styles.title}>{project.title}</h3>
            {project.year && <span className={styles.year}>{project.year}</span>}
          </div>

          {project.subtitle && <p className={styles.subtitle}>{project.subtitle}</p>}
          <p className={styles.description}>{project.description}</p>
        </div>

        <ProjectTags tags={project.tags} />
      </div>
    </div>
  )
}
