import { useRef, useEffect } from 'react'

export const useDragScroll = <T extends HTMLElement = HTMLDivElement>() => {
  const ref = useRef<T>(null)
  const isDraggingRef = useRef(false)

  useEffect(() => {
    const slider = ref.current
    if (!slider) return

    let startX = 0
    let scrollLeft = 0
    let resetTimeoutId = 0

    const onMouseMove = (e: MouseEvent) => {
      const walk = (e.clientX - startX) * 1.3
      if (Math.abs(walk) > 4) {
        isDraggingRef.current = true
      }
      slider.scrollLeft = scrollLeft - walk
    }

    const endDrag = () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      slider.style.cursor = 'grab'
      slider.style.removeProperty('user-select')
    }

    const onMouseUp = () => {
      endDrag()
      // Reset isDragging after click event has fired
      resetTimeoutId = window.setTimeout(() => {
        isDraggingRef.current = false
      }, 60)
    }

    // Window listeners live only for the duration of a drag
    const onMouseDown = (e: MouseEvent) => {
      // Only handle main left click
      if (e.button !== 0) return
      clearTimeout(resetTimeoutId)
      isDraggingRef.current = false
      startX = e.clientX
      scrollLeft = slider.scrollLeft
      slider.style.cursor = 'grabbing'
      slider.style.userSelect = 'none'
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    }

    slider.addEventListener('mousedown', onMouseDown)
    slider.style.cursor = 'grab'

    return () => {
      clearTimeout(resetTimeoutId)
      endDrag()
      slider.removeEventListener('mousedown', onMouseDown)
    }
  }, [])

  return { ref, isDraggingRef }
}
