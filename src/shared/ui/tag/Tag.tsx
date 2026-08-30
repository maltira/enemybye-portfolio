import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Tag.module.scss'

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  className?: string
}

export const Tag = ({ children, className = '', ...props }: TagProps) => {
  return (
    <span className={`${styles.tag} ${className}`} {...props}>
      {children}
    </span>
  )
}
