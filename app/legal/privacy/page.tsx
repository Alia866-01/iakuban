"use client";

import { GlassFilter, GlassEffect } from "@/components/ui/liquid-glass";
import { MobileMenuButton } from "@/components/ui/mobile-menu";
import { Globe } from "lucide-react";
import { SocialLinks } from "@/components/ui/social-links";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-600 font-sans selection:bg-indigo-500/20 selection:text-indigo-900 relative overflow-hidden">
      <GlassFilter />

      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Navbar */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-7xl">
          <GlassEffect className="rounded-full px-8 py-3 w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <a href="/">
                  <span
                    className="text-sm font-bold tracking-widest uppercase text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
                  >
                    Iakuban
                  </span>
                </a>
              </div>
              <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-slate-600">
                <a href="/#specialist" className="hover:text-slate-900 transition-colors">
                  Найти специалиста
                </a>
                <a href="/about" className="hover:text-slate-900 transition-colors">
                  О нас
                </a>
                <a href="/academy" className="hover:text-slate-900 transition-colors">
                  Академия
                </a>
                <a href="/academy#free" className="hover:text-slate-900 transition-colors">
                  Учиться бесплатно
                </a>
                <a href="#login" className="hover:text-slate-900 transition-colors">
                  Войти
                </a>
              </div>
              <button
                type="button"
                className="text-white border border-white/20 px-6 py-2.5 rounded-full text-[13px] font-semibold hover:opacity-90 transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
              >
                Начать
              </button>
              <MobileMenuButton />
            </div>
          </GlassEffect>
        </div>
      </div>

      {/* Content */}
      <section className="relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900 mb-10">
            Политика конфиденциальности
          </h1>
          <div className="prose prose-slate prose-sm max-w-none space-y-4 text-slate-600 font-light leading-relaxed">
              <p>Последнее обновление: 23.02.2026</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">1. ВВЕДЕНИЕ</h2>
              <p>IAKUBAN COACHING ACADEMY, SOCIETAT LIMITADA (далее — «Платформа», «мы», «наш») серьезно относится к защите персональных данных пользователей. Настоящая Политика конфиденциальности объясняет, как мы собираем, используем, храним и защищаем вашу персональную информацию в соответствии с:</p>
              <p>Регламентом (ЕС) 2016/679 Европейского парламента и Совета от 27 апреля 2016 года об защите физических лиц при обработке персональных данных и о свободном обращении таких данных (GDPR)</p>
              <p>Органическим законом 3/2018 от 5 декабря о защите персональных данных и гарантии цифровых прав (LOPDGDD)</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">2. КОНТРОЛЁР ДАННЫХ</h2>
              <p>Ответственный за обработку данных:</p>
              <p>Наименование: IAKUBAN COACHING ACADEMY, SOCIETAT LIMITADA CIF/NIF: B22895676 Адрес: Avinguda Pau Casals, 4 A, 08513-Prats de Lluçanès (Barcelona), España Электронная почта: info@iakuban.com Телефон: +34 614 206 809Назначение DPO: В настоящее время Платформа не обязана назначать Ответственного за защиту данных (DPO) согласно ст. 37 GDPR, поскольку не осуществляет обработку данных в особо крупных масштабах. По вопросам защиты данных обращайтесь по адресу: info@iakuban.com</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">3. КАКИЕ ДАННЫЕ МЫ СОБИРАЕМ</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">3.1 Данные, предоставляемые пользователями</h3>
              <p>Для клиентов (пользователей услуг коучинга):</p>
              <p>Имя и фамилия</p>
              <p>Адрес электронной почты</p>
              <p>Номер телефона</p>
              <p>Данные для выставления счетов (при необходимости)</p>
              <p>Информация о бронированях и сессиях</p>
              <p>Предпочтения и интересы (добровольно)</p>
              <p>Для коучей (поставщиков услуг):</p>
              <p>Полное имя</p>
              <p>Адрес электронной почты</p>
              <p>Номер телефона</p>
              <p>Профессиональная квалификация и сертификаты</p>
              <p>Опыт работы и специализация</p>
              <p>Фотографии и профессиональная биография</p>
              <p>Банковские реквизиты для выплат</p>
              <p>Налоговая информация (NIF/NIE)</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">3.2 Автоматически собираемые данные</h3>
              <p>IP-адрес</p>
              <p>Тип браузера и устройства</p>
              <p>Операционная система</p>
              <p>Страницы, которые вы посещаете на нашем сайте</p>
              <p>Время и дата посещений</p>
              <p>Источник перехода на сайт</p>
              <p>Cookies и аналогичные технологии (см. Политику использования cookies)</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">3.3 Платёжные данные</h3>
              <p>Платформа использует сторонние платёжные системы (Stripe, LavaTop) для обработки платежей. Мы не храним полные данные банковских карт. Платёжные системы обрабатывают финансовую информацию в соответствии с PCI DSS стандартами безопасности.</p>
              <p>Мы можем сохранять:</p>
              <p>Последние 4 цифры карты (для идентификации)</p>
              <p>Информацию о транзакциях (суммы, даты)</p>
              <p>Статус платежей</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">4. ЦЕЛИ ОБРАБОТКИ И ПРАВОВЫЕ ОСНОВАНИЯ</h2>
              <p>Цель обработки</p>
              <p>Правовое основание</p>
              <p>Категория данных</p>
              <p>Регистрация и управление учетной записью</p>
              <p>Исполнение договора (ст. 6.1.b GDPR)</p>
              <p>Идентификационные и контактные данные</p>
              <p>Предоставление услуг платформы</p>
              <p>Исполнение договора (ст. 6.1.b GDPR)</p>
              <p>Все данные пользователя</p>
              <p>Обработка платежей и выставление счетов</p>
              <p>Исполнение договора (ст. 6.1.b GDPR) и правовые обязательства (ст. 6.1.c GDPR)</p>
              <p>Платёжные данные, данные для выставления счетов</p>
              <p>Коммуникация с пользователями</p>
              <p>Исполнение договора (ст. 6.1.b GDPR)</p>
              <p>Контактные данные</p>
              <p>Улучшение услуг и анализ использования</p>
              <p>Законный интерес (ст. 6.1.f GDPR)</p>
              <p>Данные об использовании, технические данные</p>
              <p>Маркетинг и рекламные рассылки</p>
              <p>Согласие (ст. 6.1.a GDPR)</p>
              <p>Контактные данные</p>
              <p>Соблюдение правовых обязательств</p>
              <p>Правовые обязательства (ст. 6.1.c GDPR)</p>
              <p>Данные для выставления счетов, налоговая информация</p>
              <p>Предотвращение мошенничества и обеспечение безопасности</p>
              <p>Законный интерес (ст. 6.1.f GDPR)</p>
              <p>IP-адреса, технические данные</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">5. КАК МЫ ИСПОЛЬЗУЕМ ВАШИ ДАННЫЕ</h2>
              <p>Мы используем собранные данные для следующих целей:</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">5.1 Основные функции платформы</h3>
              <p>Создание и управление учетными записями</p>
              <p>Организация и координация коучинговых сессий</p>
              <p>Связь между коучами и клиентами</p>
              <p>Обработка платежей и финансовые операции</p>
              <p>Предоставление технической поддержки</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">5.2 Улучшение услуг</h3>
              <p>Анализ использования платформы</p>
              <p>Разработка новых функций</p>
              <p>Персонализация пользовательского опыта</p>
              <p>Контроль качества услуг</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">5.3 Коммуникация</h3>
              <p>Отправка подтверждений бронирований</p>
              <p>Уведомления о статусе сессий</p>
              <p>Техническая и административная информация</p>
              <p>Ответы на запросы пользователей</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">5.4 Маркетинг (с вашего согласия)</h3>
              <p>Информационные рассылки</p>
              <p>Специальные предложения и акции</p>
              <p>Новости платформы</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">5.5 Правовые обязательства</h3>
              <p>Выполнение налоговых и бухгалтерских требований</p>
              <p>Соблюдение законодательства о защите данных</p>
              <p>Ответ на официальные запросы властей</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">6. С КЕМ МЫ ДЕЛИМСЯ ВАШИМИ ДАННЫМИ</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">6.1 Другие пользователи платформы</h3>
              <p>Клиенты видят информацию коучей:</p>
              <p>Имя и фотография</p>
              <p>Профессиональная биография</p>
              <p>Квалификация и опыт</p>
              <p>Специализация и услуги</p>
              <p>Отзывы и рейтинги</p>
              <p>Коучи видят информацию клиентов:</p>
              <p>Имя и контактные данные (для проведения сессий)</p>
              <p>Информация о бронированиях</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">6.2 Поставщики услуг (обработчики данных)</h3>
              <p>Мы передаем данные следующим категориям обработчиков:</p>
              <p>Платёжные системы:</p>
              <p>Stripe (обработка платежей)</p>
              <p>LavaTop (обработка платежей)</p>
              <p>Технические поставщики:</p>
              <p>Хостинг-провайдер Hostinger</p>
              <p>Услуги облачного хранения</p>
              <p>Инструменты аналитики (например, Google Analytics)</p>
              <p>Службы электронной почты</p>
              <p>Коммуникационные сервисы:</p>
              <p>Провайдеры email-рассылок</p>
              <p>SMS-сервисы (при использовании)</p>
              <p>Службы поддержки клиентов</p>
              <p>Все обработчики связаны с нами договорами об обработке данных в соответствии со ст. 28 GDPR.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">6.3 Правоохранительные органы</h3>
              <p>Мы можем раскрывать данные в ответ на законные запросы государственных органов, судов или для:</p>
              <p>Соблюдения правовых обязательств</p>
              <p>Защиты прав и безопасности пользователей</p>
              <p>Предотвращения мошенничества</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">6.4 Мы НЕ продаём ваши данные третьим лицам</h3>
              <p>Платформа не продает, не сдает в аренду и не передает персональные данные третьим лицам в коммерческих целях.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">7. МЕЖДУНАРОДНАЯ ПЕРЕДАЧА ДАННЫХ</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">7.1 Передача за пределы ЕС</h3>
              <p>Некоторые наши поставщики услуг могут находиться за пределами Европейской экономической зоны (ЕЭЗ). В таких случаях мы обеспечиваем надлежащую защиту ваших данных посредством:</p>
              <p>Стандартных договорных положений (Standard Contractual Clauses), утвержденных Европейской комиссией</p>
              <p>Передачи данных в страны с решением о достаточном уровне защиты (adequacy decision)</p>
              <p>Других законных механизмов передачи, предусмотренных GDPR</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">7.2 Конкретные передачи</h3>
              <p>Google Analytics (США) — Standard Contractual Clauses</p>
              <p>AWS/Azure (может включать серверы за пределами ЕС) — Standard Contractual Clauses</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">8. СРОКИ ХРАНЕНИЯ ДАННЫХ</h2>
              <p>Мы храним ваши персональные данные только в течение необходимого срока для достижения целей, указанных в настоящей Политике:</p>
              <p>Категория данных</p>
              <p>Срок хранения</p>
              <p>Данные учетной записи активных пользователей</p>
              <p>До удаления учетной записи</p>
              <p>Данные неактивных учетных записей</p>
              <p>5 лет после последней активности</p>
              <p>Данные о транзакциях и счетах</p>
              <p>10 лет (налоговые обязательства согласно испанскому законодательству)</p>
              <p>Налоговые данные коучей (NIF, банковские реквизиты)</p>
              <p>4 года с момента последней операции (в соответствии с Ley General Tributaria)</p>
              <p>Маркетинговые данные</p>
              <p>До отзыва согласия + 1 год</p>
              <p>Данные для предотвращения мошенничества</p>
              <p>До 10 лет после закрытия дела</p>
              <p>Cookies и технические данные</p>
              <p>Согласно Политике использования cookies</p>
              <p>Переписка со службой поддержки</p>
              <p>1 год после решения вопроса</p>
              <p>После истечения сроков хранения данные удаляются или анонимизируются.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">9. ВАШИ ПРАВА</h2>
              <p>В соответствии с GDPR и LOPDGDD вы имеете следующие права:</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">9.1 Право на доступ (ст. 15 GDPR)</h3>
              <p>Вы можете запросить информацию о том, обрабатываем ли мы ваши данные, и получить копию обрабатываемых данных.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">9.2 Право на исправление (ст. 16 GDPR)</h3>
              <p>Вы можете исправить неточные или неполные данные.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">9.3 Право на удаление (ст. 17 GDPR)</h3>
              <p>Вы можете запросить удаление ваших данных в определенных случаях (&quot;право на забвение&quot;).</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">9.4 Право на ограничение обработки (ст. 18 GDPR)</h3>
              <p>Вы можете запросить ограничение обработки ваших данных в определенных обстоятельствах.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">9.5 Право на переносимость данных (ст. 20 GDPR)</h3>
              <p>Вы можете получить данные в структурированном, широко используемом и машиночитаемом формате или запросить передачу их другому контролёру.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">9.6 Право на возражение (ст. 21 GDPR)</h3>
              <p>Вы можете возразить против обработки данных, основанной на законном интересе, включая профилирование.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">9.7 Право на отзыв согласия</h3>
              <p>Если обработка основана на согласии, вы можете отозвать его в любое время.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">9.8 Право не подвергаться автоматизированному принятию решений (ст. 22 GDPR)</h3>
              <p>Вы имеете право не подвергаться решениям, основанным исключительно на автоматизированной обработке, включая профилирование.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">9.9 Как реализовать свои права</h3>
              <p>Для реализации любого из этих прав, свяжитесь с нами:</p>
              <p>Электронная почта: info@iakuban.comПочтовый адрес: Avinguda Pau Casals, 4 A, 08513-Prats de Lluçanès (Barcelona), España</p>
              <p>Мы ответим на ваш запрос в течение одного месяца с момента получения (этот срок может быть продлен до двух месяцев в сложных случаях).</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">9.10 Право на подачу жалобы</h3>
              <p>Если вы считаете, что обработка ваших данных нарушает законодательство, вы имеете право подать жалобу в:</p>
              <p>Agencia Española de Protección de Datos (AEPD) Адрес: C/ Jorge Juan, 6, 28001 Madrid, España Телефон: +34 901 100 099 / +34 912 663 517 Веб-сайт: https://www.aepd.es Электронная почта: https://sedeagpd.gob.es</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">10. БЕЗОПАСНОСТЬ ДАННЫХ</h2>
              <p>Мы применяем соответствующие технические и организационные меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения:</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">10.1 Технические меры</h3>
              <p>Шифрование данных при передаче (SSL/TLS)</p>
              <p>Шифрование данных при хранении</p>
              <p>Защищенные серверы и базы данных</p>
              <p>Регулярные резервные копии</p>
              <p>Межсетевые экраны и системы обнаружения вторжений</p>
              <p>Регулярные обновления безопасности</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">10.2 Организационные меры</h3>
              <p>Ограниченный доступ к данным (принцип минимальных привилегий)</p>
              <p>Обучение персонала по защите данных</p>
              <p>Политики безопасности и конфиденциальности</p>
              <p>Договоры о неразглашении с сотрудниками</p>
              <p>Регулярный аудит безопасности</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">10.3 Ваша ответственность</h3>
              <p>Вы несете ответственность за сохранение конфиденциальности своих учетных данных (логин и пароль). Не сообщайте свой пароль третьим лицам.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">11. ДАННЫЕ НЕСОВЕРШЕННОЛЕТНИХ</h2>
              <p>Наша платформа не предназначена для лиц младше 18 лет. Мы сознательно не собираем персональные данные несовершеннолетних. Если вы считаете, что мы непреднамеренно собрали данные несовершеннолетнего, немедленно свяжитесь с нами.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">12. ИЗМЕНЕНИЯ В ПОЛИТИКЕ КОНФИДЕНЦИАЛЬНОСТИ</h2>
              <p>Мы можем периодически обновлять настоящую Политику конфиденциальности. О существенных изменениях мы уведомим вас по электронной почте или через уведомление на сайте. Дата последнего обновления указана в начале документа.</p>
              <p>Продолжение использования платформы после внесения изменений означает принятие обновленной Политики.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">13. КОНТАКТНАЯ ИНФОРМАЦИЯ</h2>
              <p>По всем вопросам, связанным с обработкой персональных данных и настоящей Политикой конфиденциальности:</p>
              <p>Электронная почта: info@iakuban.com Почтовый адрес: Avinguda Pau Casals, 4 A, 08513-Prats de Lluçanès (Barcelona), España Телефон: +34 614 206 809</p>
              <p>Дата последнего обновления: 23.02.2026</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 pt-24 pb-12 px-6 md:px-12 lg:px-24 bg-[#fafafa]">
        <div
          className="max-w-7xl mx-auto h-px mb-16"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(147,197,253,0.6) 30%, rgba(99,102,241,0.5) 70%, transparent 100%)" }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className="rounded-2xl px-8 py-10 mb-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(219,234,254,0.35) 0%, rgba(238,242,255,0.25) 50%, rgba(219,234,254,0.2) 100%)",
              border: "1px solid rgba(147,197,253,0.3)",
            }}
          >
            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-slate-900 mb-6">Iakuban</h3>
                <div className="space-y-2 text-xs text-slate-500 font-light leading-relaxed">
                  <p className="font-medium text-slate-700">Iakuban Coaching Academy, S.L.</p>
                  <p>
                    Avda Pau Casals, Num 4, Portal A,
                    <br />
                    08513 Prats de Lluçanès (Barcelona)
                  </p>
                  <p className="pt-2">
                    <a href="mailto:info@iakuban.com" className="hover:text-slate-900 transition-colors">
                      info@iakuban.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+34641461550" className="hover:text-slate-900 transition-colors">
                      +34 641 461 550
                    </a>
                  </p>
                  <p>NIF B22895676</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-slate-900 mb-6">Правовая информация</h3>
                <ul className="space-y-3 text-xs text-slate-500 font-light">
                  <li>
                    <a href="/legal/privacy" className="hover:text-slate-900 transition-colors">
                      Политика конфиденциальности
                    </a>
                  </li>
                  <li>
                    <a href="/legal/terms" className="hover:text-slate-900 transition-colors">
                      Условия использования платформы
                    </a>
                  </li>
                  <li>
                    <a href="/legal/legal-notice" className="hover:text-slate-900 transition-colors">
                      Правовая информация (Aviso Legal)
                    </a>
                  </li>
                  <li>
                    <a href="/legal/offer" className="hover:text-slate-900 transition-colors">
                      Договор оферты на предоставление услуг платформы
                    </a>
                  </li>
                  <li>
                    <a href="/legal/code-of-conduct" className="hover:text-slate-900 transition-colors">
                      Кодекс поведения для коучей
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-slate-900 mb-6">Контакты</h3>
                <div className="space-y-4">
                  <div className="text-xs text-slate-500 font-light">
                    <a href="mailto:info@iakuban.com" className="hover:text-slate-900 transition-colors">
                      info@iakuban.com
                    </a>
                  </div>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-black/[0.05] pt-8 pb-2 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[10px] tracking-[0.15em] uppercase text-slate-400">
              &copy; 2026 iakuban. Все права защищены.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <button type="button" className="font-medium text-slate-900 hover:text-indigo-600 transition-colors">
                RU
              </button>
              <span className="text-slate-300">/</span>
              <button type="button" className="text-slate-400 hover:text-indigo-600 transition-colors">
                EN
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
