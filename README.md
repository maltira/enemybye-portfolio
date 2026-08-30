# Portfolio Project

Минималистичное и производительное веб-портфолио, построенное на архитектуре **Feature-Sliced Design (FSD)**.

---

## 🛠 Стек технологий

- **Frontend:** React 19, TypeScript, Vite
- **Стилизация:** SCSS
- **Архитектура:** Feature-Sliced Design (FSD)
- **Инфраструктура:** Docker, Nginx Alpine, Docker Compose

---

## ✨ Ключевые особенности

- **Feature-Sliced Design:** Масштабируемая структура с разделением на слои (`app`, `pages`, `widgets`, `features`, `entities`, `shared`)
- **Плавные CSS-анимации:** Каскадный `fadeInUp / fadeInDown` на чистом CSS
- **Production-Ready Docker:** Двухэтапная сборка (Node 22 -> Nginx Alpine)
- **100% Адаптивность:** Полная оптимизация под экраны от 360px до 4K

---

## 📂 Структура проекта (FSD)

```text
src/
├── app/          # Инициализация приложения, глобальные стили и переменные
├── pages/        # Страницы приложения (HomePage)
├── widgets/      # Крупные композиционные блоки (Header, Hero, Bio, ProjectsSection, GithubActivity, Footer)
├── features/     # Пользовательские фичи (ProjectModal)
├── entities/     # Бизнес-сущности и карточки (Project, Skill)
└── shared/       # Переиспользуемый UI (Modal, Tag, LinkButton), хуки, ассеты и конфиги
```

---

## 🚀 Команды управления (Makefile / npm)

### Локальная разработка
```bash
npm install
make dev        # или: npm run dev
```

### Сборка продакшен-бандла
```bash
make build      # или: npm run build
```

### Предпросмотр сборки
```bash
make preview    # или: npm run preview
```

### Docker
```bash
make up                 # Сборка и запуск контейнера в фоне (http://localhost:8080)
make down               # Остановка и удаление контейнера
make restart            # Пересборка и перезапуск
make logs               # Просмотр логов (или: make logs c=portfolio)
```
