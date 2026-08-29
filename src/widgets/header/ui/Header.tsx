import { LinkButton } from '@/shared/ui'
import { telegramIcon, githubGrayIcon } from '@/shared/assets'
import { SITE_CONFIG } from '@/shared/config'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.appleControls}>
        <div style={{ backgroundColor: '#ff605c' }}></div>
        <div style={{ backgroundColor: '#ffbd44' }}></div>
        <div style={{ backgroundColor: '#00ca4e' }}></div>
      </div>
      <div className={styles.linkButtons}>
        <LinkButton href={SITE_CONFIG.telegram} iconSrc={telegramIcon}>
          <span>Telegram</span>
        </LinkButton>
        <LinkButton href={SITE_CONFIG.github} iconSrc={githubGrayIcon}>
          <span>Github</span>
        </LinkButton>
      </div>
    </header>
  )
}
