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
  thumbnailUrl?: string
  year: string
}
