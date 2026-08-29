import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.scss'
import { closeIcon } from '@/shared/assets'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  className?: string
}

export const Modal = ({ isOpen, onClose, title = 'О проекте', children, className = '' }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={`${styles.modal} ${className}`} onClick={(e) => e.stopPropagation()} aria-modal="true">
        <div className={styles.modalTitle}>
          <h4 className={styles.modalTitleText}>{title}</h4>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
            <img src={closeIcon} alt="Close" />
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>,
    document.body
  )
}
