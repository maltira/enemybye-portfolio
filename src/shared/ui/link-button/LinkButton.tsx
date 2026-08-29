import type { AnchorHTMLAttributes, ReactNode } from 'react'
import styles from './LinkButton.module.scss'

export interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  iconSrc?: string
  iconAlt?: string
  children: ReactNode
  className?: string
}

export const LinkButton = ({
  href,
  iconSrc,
  iconAlt = 'icon',
  children,
  className = '',
  ...props
}: LinkButtonProps) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`${styles.linkButton} ${className}`}
      {...props}
    >
      {iconSrc && <img src={iconSrc} alt={iconAlt} className={styles.icon} />}
      <span>{children}</span>
    </a>
  )
}
