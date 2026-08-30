import { useState, useRef, useEffect } from 'react'
import { Tag } from '@/shared/ui'
import styles from './ProjectCard.module.scss'

interface ProjectTagsProps {
  tags: string[]
}

export const ProjectTags = ({ tags }: ProjectTagsProps) => {
  const [visibleCount, setVisibleCount] = useState<number>(tags.length)
  const containerRef = useRef<HTMLDivElement>(null)
  const measureRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const calculate = () => {
      const measure = measureRef.current
      if (!measure) return

      const tagEls = Array.from(measure.querySelectorAll<HTMLElement>('[data-measure-tag]'))
      const plusEl = measure.querySelector<HTMLElement>('[data-measure-plus]')

      if (tagEls.length === 0) return

      const baseTop = tagEls[0].offsetTop
      let row2Top: number | null = null

      let countRow1 = 0
      let countRow2 = 0
      let countRow3Plus = 0

      const row2Elements: HTMLElement[] = []

      tagEls.forEach((el) => {
        if (Math.abs(el.offsetTop - baseTop) < 4) {
          countRow1++
        } else if (row2Top === null || Math.abs(el.offsetTop - row2Top) < 4) {
          if (row2Top === null) row2Top = el.offsetTop
          countRow2++
          row2Elements.push(el)
        } else {
          countRow3Plus++
        }
      })

      // If all tags fit in 1 or 2 rows
      if (countRow3Plus === 0) {
        setVisibleCount(tags.length)
        return
      }

      // Tags overflow into row 3+
      let fitCount = countRow1 + countRow2
      const plusWidth = plusEl ? plusEl.offsetWidth + 4 : 40
      const containerWidth = measure.clientWidth

      const lastRow2 = row2Elements[row2Elements.length - 1]
      const row2End = lastRow2 ? lastRow2.offsetLeft + lastRow2.offsetWidth : 0

      // If row 2 cannot fit the +N badge, remove the last tag from row 2
      if (row2End + plusWidth > containerWidth && countRow2 > 0) {
        fitCount--
      }

      setVisibleCount(Math.max(1, fitCount))
    }

    calculate()

    const container = containerRef.current
    if (!container) return

    const resizeObserver = new ResizeObserver(() => calculate())
    resizeObserver.observe(container)

    return () => resizeObserver.disconnect()
  }, [tags])

  const hiddenCount = tags.length - visibleCount
  const visibleTags = tags.slice(0, visibleCount)

  return (
    <div ref={containerRef} className={styles.tagsContainer}>
      <div className={styles.tags}>
        {visibleTags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
        {hiddenCount > 0 && <Tag>+{hiddenCount}</Tag>}
      </div>

      {/* Hidden container for accurate dimension calculations */}
      <div ref={measureRef} className={styles.measureTags} aria-hidden="true">
        {tags.map((tag, idx) => (
          <Tag key={idx} data-measure-tag="">
            {tag}
          </Tag>
        ))}
        <Tag data-measure-plus="">+99</Tag>
      </div>
    </div>
  )
}
