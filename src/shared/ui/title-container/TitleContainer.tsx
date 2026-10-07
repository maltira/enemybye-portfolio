import type { ReactNode } from 'react'
import styles from './TitleContainer.module.scss'
import { cn } from '@/shared/lib'

interface TitleContainerProps {
  children: ReactNode
  className?: string
}

interface TitleProps extends TitleContainerProps {
  as: 'h1' | 'h2'
}

export const TitleContainer = ({ as: Heading, children, className }: TitleProps) => {
  return <Heading className={cn(styles.titleContainer, className)}>{children}</Heading>
}

export const TextWithIcon = ({ children, className }: TitleContainerProps) => {
  return <span className={cn(styles.textWithIcon, className)}>{children}</span>
}
