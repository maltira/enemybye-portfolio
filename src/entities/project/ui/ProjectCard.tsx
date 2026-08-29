import type { Project } from '../model/types'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <h3>{project.title}</h3>
  )
}
