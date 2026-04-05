# Iakuban Coaching Academy -- Website

Официальный сайт **Iakuban Coaching Academy** -- международной академии коучинга с сертификацией ICF. Платформа предоставляет информацию об образовательных программах, позволяет записаться на вебинар и найти квалифицированного коуча.

---

## Описание проекта

Iakuban Coaching Academy -- это образовательная платформа для обучения коучингу с международной сертификацией ICF (International Coaching Federation). Сайт включает:

- Каталог образовательных программ (от бесплатных до ICF Level 2)
- Страницу записи на вебинар с интеграцией GetCourse
- Информацию об академии, преподавателях и выпускниках
- Юридические документы (оферта, политика конфиденциальности и др.)
- Адаптивный дизайн с эффектом «жидкого стекла» и плавными анимациями

---

## Технологический стек

| Технология | Версия | Назначение |
|---|---|---|
| **Next.js** | ^15.4.9 | Фреймворк (App Router, SSR, standalone output) |
| **React** | ^19.2.1 | UI-библиотека |
| **TypeScript** | 5.9.3 | Типизация |
| **Tailwind CSS** | 4.1.11 | Утилитарные стили |
| **Framer Motion / Motion** | ^12.38.0 / ^12.23.24 | Анимации и переходы |
| **Radix UI** | -- | Примитивы (Avatar, Slot, Tooltip) |
| **Lucide React** | ^0.553.0 | Иконки |
| **class-variance-authority** | ^0.7.1 | Вариантные стили компонентов |
| **clsx + tailwind-merge** | ^2.1.1 / ^3.3.1 | Утилита объединения классов |
| **@paper-design/shaders-react** | ^0.0.72 | Шейдерные градиенты (MeshGradient) |
| **@tailwindcss/typography** | ^0.5.19 | Типографика для prose-контента |
| **tw-animate-css** | ^1.4.0 | CSS-анимации для Tailwind |
| **ESLint** | 9.39.1 | Линтинг |
| **Node.js** | 20 (Alpine) | Среда выполнения (Docker) |

---

## Структура проекта

```
iakuban/
├── app/                          # Next.js App Router -- страницы
│   ├── layout.tsx                # Корневой layout (метаданные, CookieBanner)
│   ├── page.tsx                  # Главная страница
│   ├── globals.css               # Глобальные стили и CSS-анимации
│   ├── about/
│   │   └── page.tsx              # Страница «О нас»
│   ├── academy/
│   │   └── page.tsx              # Академия (каталог программ)
│   ├── coaching-from-zero/
│   │   └── page.tsx              # Курс «Коучинг с нуля»
│   ├── profession-coach/
│   │   └── page.tsx              # Курс «Профессия коуч»
│   ├── icf-level-1/
│   │   └── page.tsx              # Программа ICF Level 1
│   ├── icf-level-2/
│   │   └── page.tsx              # Программа ICF Level 2
│   ├── webinar/
│   │   ├── page.tsx              # Запись на вебинар (форма GetCourse)
│   │   └── thanks/
│   │       └── page.tsx          # Страница благодарности после регистрации
│   └── legal/
│       ├── offer/page.tsx        # Публичная оферта
│       ├── privacy/page.tsx      # Политика конфиденциальности
│       ├── terms/page.tsx        # Условия использования
│       ├── cookies/page.tsx      # Политика cookies
│       ├── legal-notice/page.tsx # Юридическое уведомление
│       └── code-of-conduct/page.tsx # Кодекс поведения
├── components/
│   └── ui/
│       ├── avatar.tsx            # Компонент аватара (Radix UI)
│       ├── award-badge.tsx       # Анимированный бейдж награды
│       ├── card.tsx              # Карточка (Card, CardContent и др.)
│       ├── cookie-banner.tsx     # Баннер согласия на cookies
│       ├── liquid-glass.tsx      # Эффект «жидкого стекла» (GlassEffect, GlassFilter)
│       ├── mobile-menu.tsx       # Мобильное меню навигации
│       └── social-links.tsx      # Ссылки на соцсети (Telegram, Instagram, TikTok)
├── hooks/
│   └── use-mobile.ts            # Хук определения мобильного устройства
├── lib/
│   └── utils.ts                 # Утилита cn() для объединения Tailwind-классов
├── public/
│   └── images/                  # Статические изображения (hero, reviews, портреты)
├── Dockerfile                   # Многоэтапная сборка для production
├── next.config.ts               # Конфигурация Next.js
├── tsconfig.json                # Конфигурация TypeScript
├── postcss.config.mjs           # PostCSS (Tailwind)
├── eslint.config.mjs            # Конфигурация ESLint
├── package.json                 # Зависимости и скрипты
└── package-lock.json            # Фиксированные версии зависимостей
```

---

## Страницы

| Маршрут | Описание |
|---|---|
| `/` | **Главная** -- hero-секция, бегущая строка с достижениями, карточки услуг, FAQ, CTA |
| `/about` | **О нас** -- информация об академии, философия, команда, анимированные SVG-иконки |
| `/academy` | **Академия** -- каталог всех программ (бесплатные и платные), карточки курсов |
| `/coaching-from-zero` | **Коучинг с нуля** -- вводный бесплатный курс, шейдерный MeshGradient фон |
| `/profession-coach` | **Профессия коуч** -- программа обучения, расписание по дням, отзывы |
| `/icf-level-1` | **ICF Level 1** -- сертификационная программа, модули, FAQ, стоимость |
| `/icf-level-2` | **ICF Level 2** -- продвинутая сертификация, модули, FAQ, стоимость |
| `/webinar` | **Вебинар** -- форма регистрации с отправкой данных в GetCourse |
| `/webinar/thanks` | **Спасибо за регистрацию** -- подтверждение записи на вебинар |
| `/legal/offer` | **Публичная оферта** |
| `/legal/privacy` | **Политика конфиденциальности** |
| `/legal/terms` | **Условия использования** |
| `/legal/cookies` | **Политика cookies** |
| `/legal/legal-notice` | **Юридическое уведомление** |
| `/legal/code-of-conduct` | **Кодекс поведения** |

---

## Компоненты

### `/components/ui/`

| Компонент | Описание |
|---|---|
| `liquid-glass.tsx` | Ключевой визуальный компонент. `GlassFilter` -- SVG-фильтр для эффекта стекла. `GlassEffect` -- обертка с backdrop-blur, тенями и стеклянным стилем. Используется для навбара и карточек. |
| `mobile-menu.tsx` | Мобильная навигация с кнопкой-гамбургером. Анимированное появление/скрытие через Framer Motion (`AnimatePresence`). Содержит ссылки: Найти специалиста, О нас, Академия, Учиться бесплатно. |
| `cookie-banner.tsx` | Баннер согласия на использование cookies. Проверяет `localStorage`, показывается при первом визите. Анимированное появление снизу. |
| `award-badge.tsx` | Анимированный бейдж награды с 3D-эффектом отслеживания курсора мыши. Поддерживает типы: golden-kitty, product-of-the-day/week/month. |
| `card.tsx` | Переиспользуемые компоненты карточки: `Card`, `CardContent`, `CardHeader`, `CardTitle`, `CardDescription`, `CardFooter`. Стилизация с закругленными углами и тонкой рамкой. |
| `avatar.tsx` | Компонент аватара на основе `@radix-ui/react-avatar`. Поддерживает изображение и fallback-инициалы. |
| `social-links.tsx` | Ссылки на социальные сети: Telegram (`t.me/iakuban`), Instagram, TikTok. SVG-иконки с hover-эффектами. |

### `/hooks/`

| Хук | Описание |
|---|---|
| `use-mobile.ts` | `useIsMobile()` -- определяет мобильное устройство по ширине экрана (breakpoint: 768px). |

### `/lib/`

| Утилита | Описание |
|---|---|
| `utils.ts` | Функция `cn()` -- объединение CSS-классов через `clsx` + `tailwind-merge`. |

---

## Стилистика и дизайн-система

### Цветовая палитра

- **Основной градиент**: `linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)` -- голубой-синий, используется для логотипа и акцентных элементов
- **Фон**: `#fafafa` -- светло-серый
- **Текст**: `slate-600` (основной), `slate-900` (акцентный)
- **Выделение**: `indigo-500/20` с `indigo-900` текстом
- **Карточки программ**: индивидуальные градиенты (sky, violet, amber, emerald)

### Типографика

- Системный шрифт (`font-sans`)
- Tracking: `tracking-widest` для логотипа, `tracking-wide` для подзаголовков
- Размеры: от `text-[13px]` (навигация) до `text-5xl`/`text-7xl` (заголовки)

### Стиль карточек

- Закругленные углы: `rounded-2xl`, `rounded-3xl`
- Тонкая рамка: `border border-black/[0.05]`
- Тень: `shadow-sm`
- Hover-эффекты: смещение по Y, усиление тени

### Эффект «жидкое стекло» (Liquid Glass)

Навигационная панель и ряд компонентов используют кастомный SVG-фильтр с `backdrop-filter: blur()`, тенями и полупрозрачностью для создания эффекта стеклянной поверхности. Навбар закреплен сверху (`fixed top-6`) с формой `rounded-full`.

### Фоновые эффекты

- SVG-шум (fractalNoise) с низкой непрозрачностью
- Сетка (grid pattern) с маской градиентного затухания
- Шейдерный MeshGradient (на странице «Коучинг с нуля»)

---

## CSS-анимации

Все анимации определены в `app/globals.css`:

| Анимация | CSS-класс | Описание |
|---|---|---|
| `typing` + `typing-width` | `.typing-effect` | Эффект печатающегося текста с мигающим курсором |
| `blink-caret` | `.typing-effect` | Мигание курсора (синий `#3b82f6`) |
| `hide-caret` | `.typing-effect` | Скрытие курсора после завершения печати |
| `icon-pulse` | `.animate-icon-pulse` | Пульсация иконки (масштаб + прозрачность, 3s) |
| `icon-spin` | `.animate-icon-spin` | Покачивание иконки вправо-влево (4s) |
| `icon-wiggle` | `.animate-icon-wiggle` | Вибрация иконки (5s) |
| `icon-float` | `.animate-icon-float` | Парение иконки вверх-вниз (3.5s) |
| `draw-stroke` | `.draw-icon` | Анимация отрисовки SVG-контура (stroke-dashoffset, 4s) |
| `carousel-scroll` | `.animate-carousel` | Бесконечная прокрутка карусели (30s, пауза при hover) |

Дополнительно: `.scrollbar-hide` -- скрытие скроллбара в WebKit-браузерах.

---

## Интеграции

### GetCourse

Форма регистрации на вебинар (`/webinar`) отправляет данные на GetCourse через скрытый iframe:

- URL виджета: `https://academy.iakuban.com/pl/lite/widget/widget?id=1583627`
- Отправляемые поля: имя, контакт (email/телефон)
- После успешной отправки -- редирект на `/webinar/thanks`

### Социальные сети

- **Telegram**: [t.me/iakuban](https://t.me/iakuban)
- **Instagram**: [aleksei.iakuban](https://www.instagram.com/aleksei.iakuban/)
- **TikTok**: ссылка в компоненте `social-links.tsx`

### Unsplash

Разрешены удаленные изображения с `images.unsplash.com` (настроено в `next.config.ts`).

---

## Запуск

### Требования

- Node.js 20+
- npm

### Локальная разработка

```bash
npm install
npm run dev
```

Приложение будет доступно по адресу `http://localhost:3000`.

### Сборка для production

```bash
npm run build
npm start
```

### Дополнительные команды

```bash
npm run lint        # Проверка ESLint
npm run clean       # Очистка кэша Next.js
```

---

## Docker / Coolify деплой

Проект использует многоэтапную Docker-сборку, оптимизированную для production:

### Этапы сборки

1. **deps** -- установка зависимостей (`npm ci`) на `node:20-alpine`
2. **builder** -- сборка приложения (`npm run build`) с отключенной телеметрией Next.js
3. **runner** -- минимальный production-образ с standalone output

### Сборка и запуск

```bash
# Сборка образа
docker build -t iakuban .

# Запуск контейнера
docker run -p 3000:3000 iakuban
```

### Особенности конфигурации

- `output: 'standalone'` в `next.config.ts` -- автономная сборка для Docker
- Непривилегированный пользователь `nextjs` (UID 1001)
- Порт: `3000`, хост: `0.0.0.0`
- Телеметрия Next.js отключена (`NEXT_TELEMETRY_DISABLED=1`)

### Деплой на Coolify

Достаточно подключить Git-репозиторий к Coolify -- `Dockerfile` будет обнаружен и использован автоматически. Порт `3000` должен быть открыт.

---

## Переменные окружения

Проект не требует обязательных переменных окружения для базовой работы. Следующие переменные устанавливаются внутри Docker:

| Переменная | Значение | Описание |
|---|---|---|
| `NODE_ENV` | `production` | Режим работы |
| `NEXT_TELEMETRY_DISABLED` | `1` | Отключение телеметрии Next.js |
| `PORT` | `3000` | Порт приложения |
| `HOSTNAME` | `0.0.0.0` | Хост для прослушивания |

---

## Лицензия

Проект является частной собственностью (private). Все права защищены.
