import { Modal } from '@/shared/ui'
import { ProjectDetails, type Project } from '@/entities/project'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <Modal isOpen={Boolean(project)} onClose={onClose}>
      {project && <ProjectDetails project={project} />}
    </Modal>
  )
}
