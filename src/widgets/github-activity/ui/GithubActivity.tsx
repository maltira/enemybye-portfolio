import { lazy, Suspense, useEffect, useState } from 'react'
import type { Activity } from 'react-activity-calendar'
import { Container } from '@/shared/ui/container'
import { TextWithIcon, TitleContainer } from '@/shared/ui/title-container'
import { LinkButton } from '@/shared/ui/link-button'
import { githubBlackIcon, githubGrayIcon } from '@/shared/assets'
import { useDragScroll } from '@/shared/lib'
import { SITE_CONFIG } from '@/shared/config'
import styles from './GithubActivity.module.scss'

// The calendar library is below the fold — keep it out of the main bundle
const ActivityCalendar = lazy(() =>
  import('react-activity-calendar').then((m) => ({ default: m.ActivityCalendar }))
)

interface ApiResponse {
  total: Record<string, number>
  contributions: Activity[]
}

const API_URL = `https://github-contributions-api.jogruber.de/v4/${SITE_CONFIG.githubUsername}?y=last`
const CACHE_KEY = 'github-activity'
const REQUEST_TIMEOUT_MS = 8000

const readCache = (): Activity[] | null => {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY)
    return raw ? (JSON.parse(raw) as Activity[]) : null
  } catch {
    return null
  }
}

const writeCache = (data: Activity[]) => {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(data))
  } catch {
    // Storage unavailable (private mode, quota) — caching is optional
  }
}

export const GithubActivity = () => {
  const [data, setData] = useState<Activity[]>(() => readCache() ?? [])
  const [loading, setLoading] = useState(data.length === 0)
  const [hasError, setHasError] = useState(false)
  const { ref: calendarRef } = useDragScroll<HTMLDivElement>()

  useEffect(() => {
    if (!loading) return

    const controller = new AbortController()
    let unmounted = false
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

    fetch(API_URL, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch contributions: ${res.status}`)
        return res.json() as Promise<ApiResponse>
      })
      .then((res) => {
        setData(res.contributions)
        writeCache(res.contributions)
        setLoading(false)
      })
      .catch((err) => {
        // Unmounted (or StrictMode re-run) — nothing to update; a timeout still falls through
        if (unmounted) return
        console.error('Error fetching GitHub activity:', err)
        setHasError(true)
        setLoading(false)
      })
      .finally(() => clearTimeout(timeoutId))

    return () => {
      unmounted = true
      clearTimeout(timeoutId)
      controller.abort()
    }
  }, [loading])

  return (
    <Container className={styles.section}>
      {/* Title */}
      <TitleContainer as="h2">
        <TextWithIcon>
          <span>Github</span>{' '}
          <img src={githubBlackIcon} alt="" />{' '}
          <span>Activity</span>
        </TextWithIcon>
      </TitleContainer>

      {/* Activity Section */}
      <div className={styles.calendarWrapper} ref={calendarRef}>
        {hasError ? (
          <div className={styles.fallback}>
            <p className={styles.fallbackText}>Не удалось загрузить активность GitHub</p>
            <LinkButton href={SITE_CONFIG.github} iconSrc={githubGrayIcon}>
              Перейти в GitHub
            </LinkButton>
          </div>
        ) : (
          <Suspense fallback={<div className={styles.calendarPlaceholder} />}>
            <ActivityCalendar
              data={data}
              loading={loading}
              colorScheme="light"
              showMonthLabels={true}
              showWeekdayLabels={false}
              blockSize={16}
              blockRadius={4}
              blockMargin={4}
              fontSize={14}
              theme={{
                light: ['#e8eaee', '#93e7a2', '#3ebe5e', '#2f984a', '#216435'],
              }}
              labels={{
                totalCount: '{{count}} contributions in the last year',
                months: [
                  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                ],
                legend: {
                  less: 'Less',
                  more: 'More',
                },
              }}
            />
          </Suspense>
        )}
      </div>
    </Container>
  )
}
