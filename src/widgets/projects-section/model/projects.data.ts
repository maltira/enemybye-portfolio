import type { Project } from '@/entities/project'
import { kktProjectThumbnail, liveProjectThumbnail, notelyProjectThumbnail, portfolioProjectThumbnail } from '@/shared/assets'


export const PROJECTS_DATA: Project[] = [
  {
    id: "enemybye-portfolio",
    title: "Enemybye Portfolio",
    subtitle: "Минималистичное портфолио full-stack разработчика и UX/UI дизайнера",
    category: "Frontend",
    description: "Персональное веб-портфолио для презентации проектов, навыков и опыта. Проект построен на React, TypeScript и Vite с использованием Feature-Sliced Design для разделения приложения на независимые и переиспользуемые слои.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "SCSS",
      "FSD"
    ],
    highlights: [
      "Архитектура Feature-Sliced Design с разделением приложения на независимые слои",
      "Адаптивная верстка с поддержкой мобильных устройств",
      "Плавные CSS-анимации без сторонних animation-библиотек",
      "Компонентная структура с переиспользуемыми UI-элементами",
    ],
    githubUrl: "https://github.com/maltira/enemybye-portfolio",
    figmaUrl: "https://www.figma.com/design/ZypndvHD18XS6fImiruqlg/Portfolio---Enemybye?node-id=1-2&t=taP3kCorgt5cSTHB-1",
    thumbnailUrl: portfolioProjectThumbnail,
    year: "2026"
  },
  {
    id: "kkt-project",
    title: "Fintech Dashboard",
    subtitle: "Распределённая платформа для обработки и аналитики кассовых чеков",
    category: "Full-stack",
    description: "Высоконагруженная микросервисная платформа для генерации, валидации, обработки и аналитики кассовых чеков. Система объединяет React-дашборд, набор Go-сервисов, потоковую обработку данных через Apache Kafka и Spark, а также PostgreSQL для хранения и аналитики.",
    tags: [
      "Go",
      "React",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "Apache Kafka",
      "Apache Spark",
      "Docker",
    ],
    highlights: [
      "Микросервисная архитектура с отдельными сервисами генерации, валидации, аналитики и REST API",
      "Потоковая обработка чеков через Apache Kafka и Apache Spark Structured Streaming",
      "Многоэтапная валидация чеков с дедупликацией, in-memory cache и проверкой бизнес-логики",
      "Интерактивный React-дашборд с Apache ECharts и обновлениями в реальном времени через WebSocket",
      "Мониторинг системы с Prometheus и Grafana и контейнеризация инфраструктуры через Docker Compose"
    ],
    githubUrl: "https://github.com/maltira/kkt-project",
    figmaUrl: "https://www.figma.com/design/LGPkrhYrMrJ3Fme7icyYnX/KKT?node-id=0-1&t=taP3kCorgt5cSTHB-1",
    thumbnailUrl: kktProjectThumbnail,
    year: "2026"
  },
  {
    id: "notely-backend",
    title: "Notely (backend)",
    subtitle: "Backend для социальной платформы публикаций",
    category: "Backend",
    description: "Backend-часть веб-платформы Notely, где пользователи могут создавать и публиковать оформленные записи, делиться контентом с сообществом и находить интересные публикации через систему подписок. Сервер реализован на Go и предоставляет API для работы с пользователями, публикациями и данными приложения.",
    tags: [
      "Go",
      "Gin",
      "GORM",
      "PostgreSQL",
      "JWT"
    ],
    highlights: [
      "REST API на Go с использованием Gin",
      "Работа с PostgreSQL через ORM GORM",
      "JWT-аутентификация и авторизация пользователей",
      "Разделение приложения на cmd, internal, pkg и configs",
      "Конфигурация приложения и базы данных через переменные окружения"
    ],
    githubUrl: "https://github.com/maltira/Notely_Backend",
    year: "2026"
  },
  {
    id: "notely",
    title: "Notely (frontend)",
    subtitle: "Социальная платформа для создания и обмена публикациями",
    category: "Frontend",
    description: "Веб-платформа для создания, публикации и просмотра пользовательского контента. Проект объединяет современный frontend с отдельным backend-сервисом и реализует полноценный пользовательский опыт работы с публикациями, профилями и социальной частью приложения.",
    tags: [
      "Vue",
      "TypeScript",
      "REST API"
    ],
    highlights: [
      "Полноценное full-stack приложение с отдельными frontend и backend частями",
      "Интерфейс на Vue с компонентной архитектурой и адаптивной версткой",
      "Интеграция frontend с REST API на Go",
      "Работа с пользовательскими публикациями и профилями",
      "Разделение клиентской и серверной логики для удобной поддержки и развития проекта"
    ],
    githubUrl: "https://github.com/maltira/Notely",
    figmaUrl: "https://www.figma.com/design/4PhDPjcNfz3QovyOKzgScL/Notely?node-id=7-794&t=taP3kCorgt5cSTHB-1",
    thumbnailUrl: notelyProjectThumbnail,
    year: "2026"
  },
  {
    id: "live-backend",
    title: "Live Messenger (backend)",
    subtitle: "Микросервисный backend для real-time мессенджера",
    category: "Backend",
    description: "Backend-часть мессенджера Live, построенная на микросервисной архитектуре. Система разделена на сервисы авторизации, пользователей, чатов и API Gateway, а для обмена сообщениями и работы в реальном времени использует RabbitMQ, Redis и WebSocket.",
    tags: [
      "Go",
      "Microservices",
      "RabbitMQ",
      "Redis",
      "WebSocket",
      "Docker",
      "PostgreSQL"
    ],
    highlights: [
      "Микросервисная архитектура с отдельными сервисами авторизации, пользователей и чатов",
      "Real-time обмен сообщениями через WebSocket",
      "Асинхронное взаимодействие сервисов через RabbitMQ",
      "Redis для высокопроизводительного хранения и обмена данными",
      "API Gateway как единая точка входа для клиентских запросов",
      "Контейнеризация сервисов и инфраструктуры с помощью Docker Compose"
    ],
    githubUrl: "https://github.com/maltira/LiveBackend",
    year: "2026"
  },
  {
    id: "live-messenger",
    title: "Live Messenger",
    subtitle: "Real-time мессенджер на Vue.js",
    category: "Frontend",
    description: "Клиентская часть real-time мессенджера, разработанная на Vue 3 и TypeScript. Приложение взаимодействует с backend через WebSocket и предоставляет интерфейс для обмена сообщениями в реальном времени.",
    tags: [
      "Vue 3",
      "TypeScript",
      "Pinia",
      "WebSocket",
      "Vite"
    ],
    highlights: [
      "Real-time обмен сообщениями через WebSocket",
      "Управление состоянием приложения с помощью Pinia",
      "Компонентная архитектура на Vue 3 и TypeScript",
      "Интеграция с отдельным backend-сервисом мессенджера",
      "Сборка и development workflow на Vite"
    ],
    githubUrl: "https://github.com/maltira/LiveMessenger",
    figmaUrl: "https://www.figma.com/design/AJ1GRYduabJrLfzYBETS4X/Chavo?node-id=0-1&t=taP3kCorgt5cSTHB-1",
    thumbnailUrl: liveProjectThumbnail,
    year: "2026"
  }
]