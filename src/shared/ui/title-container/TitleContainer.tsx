import type { ReactNode } from 'react'
import styles from './TitleContainer.module.scss'

interface TitleContainerProps {
  children: ReactNode
  className?: string
}

interface TitleProps extends TitleContainerProps {
  as: 'h1' | 'h2'
}

export const TitleContainer = ({ as: Heading, children, className = '' }: TitleProps) => {
  return <Heading className={`${styles.titleContainer} ${className}`}>{children}</Heading>
}

export const TextWithIcon = ({ children, className = '' }: TitleContainerProps) => {
  return <span className={`${styles.textWithIcon} ${className}`}>{children}</span>
}
