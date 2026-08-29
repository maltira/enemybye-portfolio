import { Fragment } from 'react'
import type { Skill } from '@/entities/skill'
import { SkillBadge } from '@/entities/skill'
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
import styles from './SkillsSection.module.scss'

const skills: Skill[] = [
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

export const SkillsSection = () => {
  return (
    <section id="skills" className={styles.section}>
      {skills.map((skill, index) => {
        const isNewCategory = index > 0 && skill.category !== skills[index - 1].category

        return (
          <Fragment key={skill.id}>
            {isNewCategory && <div className={styles.divider} />}
            <SkillBadge skill={skill} />
          </Fragment>
        )
      })}
    </section>
  )
}
