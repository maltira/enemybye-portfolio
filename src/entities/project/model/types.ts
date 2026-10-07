export interface ProjectThumbnailSource {
  small: string
  large: string
}

export type ProjectCategory = 'Frontend' | 'Backend' | 'Full-stack'

export interface Project {
  id: string
  title: string
  subtitle: string
  category: ProjectCategory
  description: string
  tags: string[]
  highlights: string[]
  githubUrl?: string
  figmaUrl?: string
  thumbnail?: ProjectThumbnailSource
  year: string
}
