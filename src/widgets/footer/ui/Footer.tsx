import { LinkButton } from '@/shared/ui'
import styles from './Footer.module.scss'
import { SITE_CONFIG } from '@/shared/config'
import { githubGrayIcon, telegramIcon } from '@/shared/assets'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        Built & designed by enemybye.dev
      </p>
      <div className={styles.contactLinks}>
        <LinkButton href={SITE_CONFIG.telegram} iconSrc={telegramIcon} className={styles.contactLink}>Telegram</LinkButton>
        <LinkButton href={SITE_CONFIG.github} iconSrc={githubGrayIcon} className={styles.contactLink}>Github</LinkButton>
      </div>
      <p className={styles.footerText}>
        © 2026 enemybye. All rights reserved
      </p>
    </footer>
  )
}
