import type { ReactNode } from 'react'
import styles from './Tag.module.scss'

export interface TagProps {
  children: ReactNode
  className?: string
}

export const Tag = ({ children, className = '' }: TagProps) => {
  return <span className={`${styles.tag} ${className}`}>{children}</span>
}
