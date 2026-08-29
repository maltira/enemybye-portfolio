import type { Project } from '../model/types'
import { LinkButton, Tag } from '@/shared/ui'
import { githubGrayIcon, figmaIcon } from '@/shared/assets'
import { ProjectThumbnail } from './ProjectThumbnail'
import styles from './ProjectDetails.module.scss'

interface ProjectDetailsProps {
  project: Project
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <div className={styles.details}>
      {/* Thumbnail */}
      <div className={styles.thumbnailWrapper}>
        <ProjectThumbnail src={project.thumbnailUrl} alt={project.title} />
      </div>

      {/* Header / Title */}
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>{project.title}</h2>
          {project.subtitle && <p className={styles.subtitle}>{project.subtitle}</p>}
        </div>
        {project.year && <Tag>{project.year}</Tag>}
      </div>

      {/* About project */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>О проекте</h4>
        <p className={styles.description}>{project.description}</p>
      </div>

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Ключевые особенности</h4>
          <ul className={styles.highlights}>
            {project.highlights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Стек технологий</h4>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className={styles.actions}>
        {project.githubUrl && (
          <LinkButton href={project.githubUrl} iconSrc={githubGrayIcon}>
            GitHub
          </LinkButton>
        )}
        {project.figmaUrl && (
          <LinkButton href={project.figmaUrl} iconSrc={figmaIcon}>
            Figma
          </LinkButton>
        )}
      </div>
    </div>
  )
}
