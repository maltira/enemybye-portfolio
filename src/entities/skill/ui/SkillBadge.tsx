import type { Skill } from '../model/types'
import styles from './SkillBadge.module.scss'

interface SkillBadgeProps {
  skill: Skill
  className?: string
}

export const SkillBadge = ({ skill, className = '' }: SkillBadgeProps) => {
  return (
    <div className={`${styles.skillBadge} ${className}`} aria-label={skill.name}>
      <img src={skill.iconUrl} alt={skill.name} className={styles.icon} />
      <div className={styles.tooltip} role="tooltip">
        {skill.name}
      </div>
    </div>
  )
}
