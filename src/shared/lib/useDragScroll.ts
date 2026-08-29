import { useRef, useEffect } from 'react'

export const useDragScroll = <T extends HTMLElement = HTMLDivElement>() => {
  const ref = useRef<T>(null)
  const isDraggingRef = useRef(false)

  useEffect(() => {
    const slider = ref.current
    if (!slider) return

    let isDown = false
    let startX = 0
    let scrollLeft = 0

    const onMouseDown = (e: MouseEvent) => {
      // Only handle main left click
      if (e.button !== 0) return
      isDown = true
      isDraggingRef.current = false
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
      slider.style.cursor = 'grabbing'
      slider.style.userSelect = 'none'
    }

    const onMouseLeave = () => {
      if (!isDown) return
      isDown = false
      slider.style.cursor = 'grab'
      slider.style.removeProperty('user-select')
    }

    const onMouseUp = () => {
      if (!isDown) return
      isDown = false
      slider.style.cursor = 'grab'
      slider.style.removeProperty('user-select')
      // Reset isDragging after click event has fired
      setTimeout(() => {
        isDraggingRef.current = false
      }, 60)
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX) * 1.3
      if (Math.abs(walk) > 4) {
        isDraggingRef.current = true
      }
      slider.scrollLeft = scrollLeft - walk
    }

    slider.addEventListener('mousedown', onMouseDown)
    slider.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('mousemove', onMouseMove)

    slider.style.cursor = 'grab'

    return () => {
      slider.removeEventListener('mousedown', onMouseDown)
      slider.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return { ref, isDraggingRef }
}
