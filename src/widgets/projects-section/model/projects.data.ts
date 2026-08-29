import type { Project } from '@/entities/project'
import { avatarImg } from '@/shared/assets'

export const PROJECTS_DATA: Project[] = [
  {
    id: 'api-gateway',
    title: 'Go Microservices Gateway',
    subtitle: 'Высоконагруженный шлюз микросервисов',
    category: 'backend',
    tags: ['Go', 'gRPC', 'Redis', 'PostgreSQL', 'Docker'],
    year: '2026',
    description:
      'Масштабируемый API Gateway с аутентификацией по JWT/OAuth2, распределенным rate limiting и трейсингом запросов.',
    highlights: [
      'Архитектура на микросервисах с коммуникацией по gRPC',
      'Кэширование сессий и лимитирование запросов в Redis',
      'Автоматизированный CI/CD пайплайн в Docker',
    ],
    githubUrl: 'https://github.com/maltira',
    figmaUrl: 'https://github.com/maltira',
    thumbnailUrl: avatarImg,
  },
  {
    id: 'portfolio-fsd',
    title: 'Minimal Portfolio & Design System',
    subtitle: 'Портфолио на архитектуре FSD',
    category: 'fullstack',
    tags: ['React', 'TypeScript', 'SCSS', 'FSD', 'Vite'],
    year: '2026',
    description:
      'Современное минималистичное веб-приложение с чистой архитектурой Feature-Sliced Design и плавной анимацией.',
    highlights: [
      'Модульная масштабируемая архитектура Feature-Sliced Design',
      'Дизайн-система на SCSS с типографикой SF Pro Display',
      'Интеграция с GitHub Contributions API в реальном времени',
    ],
    githubUrl: 'https://github.com/maltira/enemybye-portfolio',
  },
  {
    id: 'ai-telegram-bot',
    title: 'AI Telegram Assistant',
    subtitle: 'Умный ассистент с интеграцией LLM',
    category: 'ai',
    tags: ['Python', 'AsyncIO', 'PostgreSQL', 'LLM', 'Docker'],
    year: '2025',
    description:
      'Асинхронный телеграм-бот для суммаризации контента, генерации ответов и управления задачами с контекстной памятью.',
    highlights: [
      'Асинхронная неблокирующая обработка сообщений на Python AsyncIO',
      'Контекстное хранение истории диалогов в PostgreSQL',
      'Интеграция со сторонними API языковых моделей',
    ],
    githubUrl: 'https://github.com/maltira',
  },
  {
    id: 'fintech-ui-ux',
    title: 'Fintech Dashboard UI/UX',
    subtitle: 'Интерфейс финансовой аналитики',
    category: 'design',
    tags: ['Figma', 'UI/UX', 'Design System', 'Prototyping'],
    year: '2025',
    description:
      'Комплексный UI/UX проект веб-платформы с интерактивным прототипом, дизайн-токенами и микро-анимациями.',
    highlights: [
      'Полноценная дизайн-система из 40+ компонентов в Figma',
      'Продуманный UX онбординга и дашборда графиков',
      'Адаптивные лейауты под десктоп и мобильные устройства',
    ],
    githubUrl: 'https://github.com/maltira',
  },
]
