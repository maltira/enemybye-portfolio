import type { ReactNode } from 'react'
import styles from './Container.module.scss'
import { cn } from '@/shared/lib'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={cn(styles.container, className)}>{children}</div>
}
