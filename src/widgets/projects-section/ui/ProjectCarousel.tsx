import { useState, useEffect, useCallback } from 'react'
import type { Project } from '@/entities/project'
import { ProjectCard } from '@/entities/project'
import { arrowLeftIcon, arrowRightIcon } from '@/shared/assets'
import { useDragScroll } from '@/shared/lib'
import styles from './ProjectCarousel.module.scss'

interface ProjectCarouselProps {
  projects: Project[]
  onSelectProject: (project: Project) => void
}

export const ProjectCarousel = ({ projects, onSelectProject }: ProjectCarouselProps) => {
  const { ref: scrollRef, isDraggingRef } = useDragScroll<HTMLDivElement>()
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScrollBounds = useCallback(() => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 2)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2)
  }, [scrollRef])

  useEffect(() => {
    checkScrollBounds()
    window.addEventListener('resize', checkScrollBounds)
    return () => window.removeEventListener('resize', checkScrollBounds)
  }, [checkScrollBounds, projects])

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const scrollAmount = 332 // Card width + gap
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  const handleCardClick = (project: Project) => {
    if (isDraggingRef.current) return
    onSelectProject(project)
  }

  return (
    <div className={styles.carouselRoot}>
      <div className={styles.scrollTrack} ref={scrollRef} onScroll={checkScrollBounds}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={handleCardClick}
          />
        ))}
      </div>
      <div className={styles.controls}>
        <button
          className={`${styles.arrowButton} ${!canScrollLeft ? styles.disabled : ''}`}
          onClick={() => handleScroll('left')}
          disabled={!canScrollLeft}
          aria-label="Previous project"
        >
          <img src={arrowLeftIcon} alt="Previous" />
        </button>
        <button
          className={`${styles.arrowButton} ${!canScrollRight ? styles.disabled : ''}`}
          onClick={() => handleScroll('right')}
          disabled={!canScrollRight}
          aria-label="Next project"
        >
          <img src={arrowRightIcon} alt="Next" />
        </button>
      </div>
    </div>
  )
}
