import type { Skill } from './types'
import {
  golangIcon,
  pythonIcon,
  postgresIcon,
  redisIcon,
  tsIcon,
  reactIcon,
  vueIcon,
  dockerIcon,
  gitIcon,
  figmaSkillIcon,
} from '@/shared/assets'

export const SKILLS_DATA: Skill[] = [
  { id: 'golang', name: 'Go', category: 'backend', iconUrl: golangIcon },
  { id: 'python', name: 'Python', category: 'backend', iconUrl: pythonIcon },
  { id: 'ts', name: 'TypeScript', category: 'frontend', iconUrl: tsIcon },
  { id: 'react', name: 'React', category: 'frontend', iconUrl: reactIcon },
  { id: 'vue', name: 'Vue', category: 'frontend', iconUrl: vueIcon },
  { id: 'postgres', name: 'PostgreSQL', category: 'database', iconUrl: postgresIcon },
  { id: 'redis', name: 'Redis', category: 'database', iconUrl: redisIcon },
  { id: 'docker', name: 'Docker', category: 'tools', iconUrl: dockerIcon },
  { id: 'git', name: 'Git', category: 'tools', iconUrl: gitIcon },
  { id: 'figma', name: 'Figma', category: 'tools', iconUrl: figmaSkillIcon },
]
