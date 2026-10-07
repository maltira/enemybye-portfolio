import type { AnchorHTMLAttributes, ReactNode } from 'react'
import styles from './LinkButton.module.scss'
import { cn } from '@/shared/lib'

export interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  iconSrc?: string
  iconAlt?: string
  iconTone?: 'mono' | 'color'
  children: ReactNode
  className?: string
}

export const LinkButton = ({
  href,
  iconSrc,
  iconAlt = '',
  iconTone = 'mono',
  children,
  className,
  ...props
}: LinkButtonProps) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={cn(styles.linkButton, className)}
      {...props}
    >
      {iconSrc && <img src={iconSrc} alt={iconAlt} className={cn(styles.icon, iconTone === 'mono' && styles.monoIcon)} />}
      <span>{children}</span>
    </a>
  )
}
