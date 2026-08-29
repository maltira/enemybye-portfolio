# Portfolio Project

Минималистичное и производительное веб-портфолио, построенное на архитектуре **Feature-Sliced Design (FSD)**

---

## 🛠 Стек технологий

- **Core:** React 19, TypeScript, Vite
- **Styles:** SCSS
- **Architecture:** Feature-Sliced Design (FSD)

---

## ✨ Ключевые особенности

- **Feature-Sliced Design:** Четкое разделение на слои (`app`, `pages`, `widgets`, `features`, `entities`, `shared`)
- **Плавные анимации:** Легковесный каскадный `fadeInUp / fadeInDown` на чистом CSS
- **100% Адаптив:** Оптимизировано под экраны от 360px

---

## 📂 Структура проекта (FSD)

```text
src/
├── app/          # Инициализация приложения, глобальные стили и переменные
├── pages/        # Страницы приложения (HomePage)
├── widgets/      # Крупные композиционные блоки (Header, Hero, Bio, Projects, Github, Footer)
├── features/     # Пользовательские сценарии (ProjectModal)
├── entities/     # Бизнес-сущности (Project, Skill)
└── shared/       # Переиспользуемый UI (Modal, Tag, LinkButton), хуки, ассеты и конфиги
```

---

## 🚀 Быстрый старт

### Установка зависимостей
```bash
npm install
```

### Запуск dev-сервера
```bash
npm run dev
```

### Сборка проекта
```bash
npm run build
```
