export interface ProjectThumbnailSource {
  small: string
  large: string
}

export interface Project {
  id: string
  title: string
  subtitle: string
  category: string
  description: string
  tags: string[]
  highlights: string[]
  githubUrl?: string
  figmaUrl?: string
  thumbnail?: ProjectThumbnailSource
  year: string
}
