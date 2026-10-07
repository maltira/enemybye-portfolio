import { albumNotFoundIcon } from '@/shared/assets'
import type { ProjectThumbnailSource } from '../model/types'
import styles from './ProjectThumbnail.module.scss'

interface ProjectThumbnailProps {
  source?: ProjectThumbnailSource
  sizes: string
  alt?: string
  className?: string
}

export const ProjectThumbnail = ({ source, sizes, alt = 'Project cover', className = '' }: ProjectThumbnailProps) => {
  return (
    <div className={`${styles.imageWrapper} ${className}`}>
      {source ? (
        <img
          src={source.large}
          srcSet={`${source.small} 600w, ${source.large} 1280w`}
          sizes={sizes}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={styles.image}
        />
      ) : (
        <div className={styles.placeholder}>
          <img src={albumNotFoundIcon} alt={alt} className={styles.placeholderIcon} />
        </div>
      )}
    </div>
  )
}
