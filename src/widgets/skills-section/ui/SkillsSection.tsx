import { Fragment } from 'react'
import { SKILLS_DATA, SkillBadge } from '@/entities/skill'
import styles from './SkillsSection.module.scss'

export const SkillsSection = () => {
  return (
    <section id="skills" className={styles.section}>
      {SKILLS_DATA.map((skill, index) => {
        const isNewCategory = index > 0 && skill.category !== SKILLS_DATA[index - 1].category

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
