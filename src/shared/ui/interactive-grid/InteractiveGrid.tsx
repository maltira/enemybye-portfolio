import { useEffect, useRef } from 'react'
import styles from './InteractiveGrid.module.scss'

export const InteractiveGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only attach mouse tracking on devices with pointer/mouse
    const isHoverDevice = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isHoverDevice || prefersReducedMotion) return

    const grid = gridRef.current
    if (!grid) return

    let frameId = 0
    let mouseX = 0
    let mouseY = 0
    let isVisible = false

    // Repaint the masked layer at most once per frame, not on every mousemove
    const applyPosition = () => {
      frameId = 0
      grid.style.setProperty('--mouse-x', `${mouseX}px`)
      grid.style.setProperty('--mouse-y', `${mouseY}px`)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!isVisible) {
        isVisible = true
        grid.style.setProperty('--mouse-opacity', '0.75')
      }
      if (!frameId) frameId = requestAnimationFrame(applyPosition)
    }

    const handleMouseLeave = () => {
      isVisible = false
      grid.style.setProperty('--mouse-opacity', '0')
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.body.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return <div ref={gridRef} className={styles.gridOverlay} aria-hidden="true" />
}
