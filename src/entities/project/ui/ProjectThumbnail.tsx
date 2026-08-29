import { albumNotFoundIcon } from '@/shared/assets'
import styles from './ProjectThumbnail.module.scss'

interface ProjectThumbnailProps {
  src?: string
  alt?: string
  className?: string
}

export const ProjectThumbnail = ({ src, alt = 'Project cover', className = '' }: ProjectThumbnailProps) => {
  return (
    <div className={`${styles.imageWrapper} ${className}`}>
      {src ? (
        <img src={src} alt={alt} className={styles.image} />
      ) : (
        <div className={styles.placeholder}>
          <img src={albumNotFoundIcon} alt={alt} className={styles.placeholderIcon} />
        </div>
      )}
    </div>
  )
}
