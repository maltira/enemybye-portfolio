import type { Skill } from '../model/types'
import styles from './SkillBadge.module.scss'

interface SkillBadgeProps {
  skill: Skill
  className?: string
}

export const SkillBadge = ({ skill, className = '' }: SkillBadgeProps) => {
  return (
    <div className={`${styles.skillBadge} ${className}`} role="img" aria-label={skill.name} tabIndex={0}>
      <img src={skill.iconUrl} alt="" className={styles.icon} />
      <div className={styles.tooltip} aria-hidden="true">
        {skill.name}
      </div>
    </div>
  )
}
