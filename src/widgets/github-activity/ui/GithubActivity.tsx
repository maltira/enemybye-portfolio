import { useEffect, useState } from 'react'
import { ActivityCalendar, type Activity } from 'react-activity-calendar'
import { Container } from '@/shared/ui/container'
import { TextWithIcon, TitleContainer } from '@/shared/ui/title-container'
import { LinkButton } from '@/shared/ui/link-button'
import { githubBlackIcon, githubGrayIcon } from '@/shared/assets'
import { useDragScroll } from '@/shared/lib'
import { SITE_CONFIG } from '@/shared/config'
import styles from './GithubActivity.module.scss'

interface ApiResponse {
  total: {
    [year: string]: number
    lastYear: number
  }
  contributions: Array<{
    date: string
    count: number
    level: 0 | 1 | 2 | 3 | 4
  }>
}

export const GithubActivity = () => {
  const [data, setData] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const { ref: calendarRef } = useDragScroll<HTMLDivElement>()

  const fetchActivity = () => {
    setLoading(true)
    setHasError(false)
    fetch(`https://github-contributions-api.jogruber.de/v4/${SITE_CONFIG.githubUsername}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch contributions')
        return res.json() as Promise<ApiResponse>
      })
      .then((res) => {
        setData(res.contributions)
      })
      .catch((err) => {
        console.error('Error fetching GitHub activity:', err)
        setHasError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchActivity()
  }, [])

  return (
    <Container className={styles.section}>
      {/* Title */}
      <TitleContainer>
        <TextWithIcon>
          <h1>Github</h1>
          <img src={githubBlackIcon} alt="icon" />
          <h1>Activity</h1>
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
        )}
      </div>
    </Container>
  )
}
