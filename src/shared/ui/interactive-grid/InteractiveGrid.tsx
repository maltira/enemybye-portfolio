import { useEffect, useRef } from 'react'
import styles from './InteractiveGrid.module.scss'

export const InteractiveGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only attach mouse tracking on devices with pointer/mouse
    const isHoverDevice = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!isHoverDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return
      gridRef.current.style.setProperty('--mouse-x', `${e.clientX}px`)
      gridRef.current.style.setProperty('--mouse-y', `${e.clientY}px`)
      gridRef.current.style.setProperty('--mouse-opacity', '0.75')
    }

    const handleMouseLeave = () => {
      if (!gridRef.current) return
      gridRef.current.style.setProperty('--mouse-opacity', '0')
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.body.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return <div ref={gridRef} className={styles.gridOverlay} aria-hidden="true" />
}
