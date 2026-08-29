import { Container, TitleContainer, TextWithIcon } from '@/shared/ui'
import styles from './Hero.module.scss'
import { stackPlusIcon, avatarImg } from '@/shared/assets'

export const Hero = () => {
  return (
    <Container className={styles.hero}>
      {/* Avatar Section */}
      <div className={styles.avatarContainer}>
        <img className={styles.avatar} src={avatarImg} alt="avatar" />
        <p className={styles.author}>@enemybye.dev</p>
      </div>

      {/* Title */}
      <TitleContainer>
        <TextWithIcon>
          <h1>Full-stack</h1>
          <img src={stackPlusIcon} alt="icon" />
          <h1>developer</h1>
        </TextWithIcon>
        <h1>& UX/UI Designer</h1>
      </TitleContainer>
    </Container>
  )
}
