import type { ReactNode } from 'react'
import styles from './TitleContainer.module.scss'

interface TitleContainerProps {
  children: ReactNode
  className?: string
}

export const TitleContainer = ({ children, className = '' }: TitleContainerProps) => {
  return <div className={`${styles.titleContainer} ${className}`}>{children}</div>
}

export const TextWithIcon = ({ children, className = '' }: TitleContainerProps) => {
  return <div className={`${styles.textWithIcon} ${className}`}>{children}</div>
}
