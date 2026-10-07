import { Container, TitleContainer, TextWithIcon } from '@/shared/ui'
import styles from './Hero.module.scss'
import { stackPlusIcon, avatarImg } from '@/shared/assets'

export const Hero = () => {
  return (
    <Container className={styles.hero}>
      {/* Avatar Section */}
      <div className={styles.avatarContainer}>
        <img className={styles.avatar} src={avatarImg} alt="Аватар enemybye" width={160} height={160} />
        <p className={styles.author}>@enemybye.dev</p>
      </div>

      {/* Title */}
      <div className={styles.titleWrapper}>
        <TitleContainer as="h1">
          <TextWithIcon>
            <span>Full-stack</span>{' '}
            <img src={stackPlusIcon} alt="" />{' '}
            <span>developer</span>
          </TextWithIcon>{' '}
          <span>& UX/UI Designer</span>
        </TitleContainer>
      </div>
    </Container>
  )
}
