"use client";

import { useState } from "react";
import { ArrowRight, Globe, Check, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { GlassFilter, GlassEffect } from "@/components/ui/liquid-glass";
import { AwardBadge } from "@/components/ui/award-badge";

const marqueeRow1 = [
  "Сертифицированные коучи ICF",
  "300+ клиентов по всему миру",
  "30+ стран",
  "700+ часов коуч-сессий",
  "Онлайн-сессии",
];

const marqueeRow2 = [
  "Карьерный коучинг",
  "Лайф-коучинг",
  "Бизнес-коучинг",
  "Коучинг лидерства",
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAwLCAwLCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"
          style={{
            maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
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
                <a href="#specialist" className="hover:text-slate-900 transition-colors">
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
            </div>
          </GlassEffect>
        </div>
      </div>

      {/* ─── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative z-10 pt-40 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-white border border-black/[0.05] shadow-sm mb-8">
              <span
                className="text-sm font-bold tracking-[0.15em] uppercase text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
              >
                Iakuban Coaching Platform
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-6 tracking-tight text-slate-900">
              Найдите своего коуча
            </h1>

            <p className="text-base md:text-lg text-slate-500 mb-10 font-light leading-relaxed max-w-lg">
              Создайте легендарные результаты в жизни, бизнесе и карьере с помощью квалифицированного коуча ICF
            </p>

            <a
              href="#specialist"
              className="group relative overflow-hidden rounded-full px-10 py-5 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] inline-flex items-center gap-4 text-white"
              style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
            >
              <span className="text-sm uppercase tracking-[0.15em] font-semibold">Найти коуча</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <div className="mt-8 opacity-80 hover:opacity-100 transition-opacity">
              <AwardBadge type="product-of-the-month" place={1} />
            </div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border border-black/[0.04] p-2 shadow-[0_0_80px_-15px_rgba(147,197,253,0.5),0_4px_25px_-5px_rgba(0,0,0,0.05)] bg-white"
          >
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
              <img src="/images/hero-main.png" alt="Коуч-сессия онлайн" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. INFINITE MARQUEE ─────────────────────────────────────────────── */}
      <section className="relative z-10 py-10 overflow-hidden" aria-hidden="true">
        {/* Row 1 — scrolls left */}
        <div className="relative flex overflow-hidden mb-4">
          <div className="flex gap-3 animate-carousel whitespace-nowrap">
            {[...marqueeRow1, ...marqueeRow1].map((item, i) => (
              <span
                key={`r1-${i}`}
                className="rounded-full px-5 py-2.5 bg-white border border-black/[0.05] text-sm text-slate-600 font-light whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right (reversed direction) */}
        <div className="relative flex overflow-hidden">
          <div
            className="flex gap-3 animate-carousel whitespace-nowrap"
            style={{ animationDirection: "reverse" }}
          >
            {[...marqueeRow2, ...marqueeRow2].map((item, i) => (
              <span
                key={`r2-${i}`}
                className="rounded-full px-5 py-2.5 bg-white border border-black/[0.05] text-sm text-slate-600 font-light whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 3. ПОЧЕМУ МЫ ────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <div
              className="text-[20px] uppercase tracking-[0.2em] text-transparent bg-clip-text font-semibold mb-6"
              style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
            >
              [ Почему мы ]
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-[1.2] max-w-3xl mx-auto mb-4">
              Вы придёте к результату с нашими коучами
            </h2>
            <p className="text-base text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
              Мы сами обучаем коучей по золотым стандартам ICF, поэтому в нашей команде только результативные специалисты.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "ICF", title: "International Coaching Federation" },
              { label: "Level 1", title: "ICF-Accredited Coaching Education" },
              { label: "Level 2", title: "ICF-Accredited Coaching Education" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[1.5rem] p-8 text-center shadow-[0_0_60px_-15px_rgba(147,197,253,0.4),0_4px_20px_-5px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300"
                style={{ background: 'radial-gradient(ellipse at 20% 50%, #dbeafe 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #bfdbfe 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #e0f2fe 0%, transparent 45%), linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 30%, #f0f9ff 50%, #dbeafe 70%, #f0f9ff 100%)', border: '1px solid rgba(147,197,253,0.3)' }}
              >
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">{item.label}</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 4. ВАМ НУЖЕН КУЧ, ЕСЛИ ─────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <div
              className="text-[20px] uppercase tracking-[0.2em] text-transparent bg-clip-text font-semibold mb-6"
              style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
            >
              [ Вам нужен коуч, если ]
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-[1.2]">
              Вам нужен коуч, если
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: "Вы готовы к большему",
                desc: "Чувствуете, что способны на большее, но что-то тормозит.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7 draw-icon text-blue-500">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Вы хотите расти",
                desc: "Масштабировать бизнес, выйти на новый доход, вырасти в должности.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7 draw-icon text-blue-500">
                    <path d="M3 20L8 14L12 17L21 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 8H21V12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Вы хотите изменить качество жизни",
                desc: "Состояние, уровень энергии, отношения с близкими, баланс между работой и жизнью.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7 draw-icon text-blue-500">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 2L4 6M16 2L20 6" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white border border-black/[0.05] rounded-[1.5rem] p-8 shadow-[0_0_60px_-15px_rgba(147,197,253,0.4),0_4px_20px_-5px_rgba(0,0,0,0.04)] hover:border-blue-200 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, rgba(147,197,253,0.3) 0%, rgba(59,130,246,0.15) 100%)' }}>
                  {item.icon}
                </div>
                <p className="text-lg font-semibold text-slate-900 mb-3">{item.title}</p>
                <p className="text-sm text-slate-500 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 5. 3 ШАГА ───────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <div
              className="text-[20px] uppercase tracking-[0.2em] text-transparent bg-clip-text font-semibold mb-6"
              style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
            >
              [ 3 шага ]
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-[1.2] max-w-3xl mx-auto">
              Начните двигаться к вашим целям за 3 шага
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Выберите коуча",
                desc: "Изучите профили коучей на платформе: специализация, опыт, стиль работы.",
                cta: true,
              },
              {
                step: "2",
                title: "Установочная сессия",
                desc: "Познакомьтесь с коучем, обсудите ваш запрос и убедитесь, что между вами есть контакт и доверие.",
                cta: false,
              },
              {
                step: "3",
                title: "Контракт",
                desc: "Определите цели, количество сессий и график. Коуч будет с вами на каждом шаге до результата.",
                cta: false,
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-black/[0.05] rounded-[1.5rem] p-8 shadow-[0_0_60px_-15px_rgba(147,197,253,0.4),0_4px_20px_-5px_rgba(0,0,0,0.04)] hover:border-blue-200 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white text-base font-semibold"
                  style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
                >
                  {item.step}
                </div>
                <p className="text-lg font-semibold text-slate-900 mb-3">{item.title}</p>
                <p className="text-sm text-slate-500 font-light leading-relaxed flex-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <a
              href="#specialist"
              className="group inline-flex items-center gap-3 rounded-full px-10 py-5 text-white text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-lg shadow-blue-500/20"
              style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
            >
              Выбрать коуча
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Найдите своего коуча — заголовок ──────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900"
          >
            Найдите своего коуча
          </motion.h2>
        </div>
      </section>

      <div className="h-4" />

      {/* ─── Coach profile cards ─────────────────────────────────────────────── */}
      <section className="relative z-10 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                initials: "ЕН",
                name: "Елизавета Новикова",
                langs: "🇷🇺 Русский 🇬🇧 English",
                rating: "5.0",
                reviews: 197,
                badge: true,
                desc: "Бизнес-коуч и ментор. 10 лет опыта в развития команд. Работаю с командами и их...",
                icf: { dots: 3, label: "ICF Level 2" },
                tags: ["Communication"],
                price: "от 110 €",
                btnStyle: "green" as const,
              },
              {
                initials: "ТА",
                name: "Татьяна Андреева",
                langs: "🇷🇺 Русский 🇬🇧 English",
                rating: "5.0",
                reviews: 32,
                badge: true,
                desc: "Сертифицированный коуч с 14-летним опытом работы в области осознанности и...",
                icf: { dots: 6, label: "ICF MCC" },
                tags: ["Conflicts"],
                price: "от 12 240 ₽",
                btnStyle: "outline" as const,
              },
              {
                initials: "АА",
                name: "Алина Алексеева",
                langs: "🇷🇺 Русский 🇬🇧 English",
                rating: "4.9",
                reviews: 169,
                badge: false,
                desc: "Коуч по эмоционального интеллекта с 9-летним стажем. Помогаю профессионалам н...",
                icf: { dots: 6, label: "ICF MCC" },
                tags: ["Perfectionism"],
                price: "от 70 €",
                btnStyle: "blue" as const,
              },
              {
                initials: "ВС",
                name: "Вера Соколова",
                langs: "🇷🇺 Русский 🇬🇧 English",
                rating: "4.9",
                reviews: 154,
                badge: false,
                desc: "Сертифицированный коуч с 17-летним опытом работы в области...",
                icf: { dots: 2, label: "ICF ACC" },
                tags: ["Teamwork", "Self-esteem"],
                price: "от 9 800 ₽",
                btnStyle: "green" as const,
              },
              {
                initials: "ДФ",
                name: "Дмитрий Фёдоров",
                langs: "🇷🇺 Русский",
                rating: "4.9",
                reviews: 65,
                badge: false,
                desc: "Коуч-практик с опытом работы 10 лет. Основное направление — развития команд...",
                icf: { dots: 2, label: "ICF ACC" },
                tags: ["Business", "Finance"],
                price: "от 60 €",
                btnStyle: "outline" as const,
              },
              {
                initials: "ТФ",
                name: "Татьяна Фёдорова",
                langs: "🇷🇺 Русский 🇬🇧 English",
                rating: "4.8",
                reviews: 165,
                badge: true,
                desc: "Бизнес-коуч и ментор. 18 лет опыта в карьерного развития. Работаю с лидерам и...",
                icf: { dots: 2, label: "ICF Level 1" },
                tags: ["Investments", "Management"],
                price: "от 6 790 ₽",
                btnStyle: "blue" as const,
              },
              {
                initials: "ИА",
                name: "Ирина Андреева",
                langs: "🇷🇺 Русский",
                rating: "4.8",
                reviews: 122,
                badge: true,
                desc: "Лайф-коуч с фокусом на бизнес-стратегии. Помогаю лидерам и менеджерам среднего...",
                icf: { dots: 2, label: "ICF ACC" },
                tags: ["Job search", "Money mindset"],
                price: null,
                btnStyle: "green" as const,
              },
              {
                initials: "ОЛ",
                name: "Олег Лебедев",
                langs: "🇷🇺 Русский 🇬🇧 English",
                rating: "4.8",
                reviews: 68,
                badge: true,
                desc: "Бизнес-коуч и ментор. 5 лет опыта в осознанности и баланса. Работаю с...",
                icf: { dots: 6, label: "ICF MCC" },
                tags: ["Purpose", "Inspiration"],
                price: null,
                btnStyle: "outline" as const,
              },
              {
                initials: "ДН",
                name: "Даниил Новиков",
                langs: "🇷🇺 Русский 🇬🇧 English",
                rating: "4.8",
                reviews: 33,
                badge: false,
                desc: "Коуч-практик с опытом работы 10 лет. Основное направление — развития команд...",
                icf: { dots: 4, label: "ICF PCC" },
                tags: ["Health", "Relationships"],
                price: null,
                btnStyle: "blue" as const,
              },
            ].map((coach) => (
              <div
                key={coach.name}
                className="bg-white rounded-2xl border border-black/[0.06] p-6 hover:shadow-lg transition-all duration-300 flex flex-col gap-4"
              >
                {/* Top row */}
                <div className="flex items-start gap-3">
                  <div className="w-[42px] h-[42px] rounded-full bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-600 text-sm font-bold flex items-center justify-center shrink-0">
                    {coach.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-900 leading-tight">{coach.name}</p>
                    <p className="text-[11px] text-slate-400 font-light mt-0.5">{coach.langs}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      ⭐ {coach.rating} <span className="text-slate-400">({coach.reviews})</span>
                    </p>
                  </div>
                  {coach.badge && (
                    <span className="text-emerald-500 text-xs font-medium bg-emerald-50 rounded-full px-2 py-0.5 shrink-0 whitespace-nowrap">
                      1-я бесплатно +
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-500 font-light line-clamp-2">{coach.desc}</p>

                {/* Tags row */}
                <div className="flex flex-wrap gap-1.5">
                  {/* ICF badge */}
                  <span className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-600 text-[10px] font-medium px-2 py-0.5 rounded-full">
                    <span className="inline-flex gap-[-4px]">
                      {Array.from({ length: coach.icf.dots }).map((_, di) => (
                        <span
                          key={di}
                          className="w-[7px] h-[7px] rounded-full bg-indigo-500 inline-block"
                          style={{ marginLeft: di > 0 ? "-2px" : "0" }}
                        />
                      ))}
                    </span>
                    <span className="ml-0.5">{coach.icf.label}</span>
                  </span>
                  {/* Topic tags */}
                  {coach.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-slate-200 text-slate-500 text-[10px] px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom row */}
                <div className="flex items-center justify-between mt-auto pt-1">
                  {coach.price ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-slate-400 text-xs">от</span>
                      <span className="text-slate-900 text-xl font-semibold">
                        {coach.price.replace("от ", "")}
                      </span>
                    </div>
                  ) : (
                    <div />
                  )}
                  <button
                    type="button"
                    className="rounded-full px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
                  >
                    Записаться
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <a
              href="#specialist"
              className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold text-slate-700 bg-white border border-black/[0.08] hover:border-blue-200 hover:shadow-md transition-all duration-300"
            >
              Посмотреть всех коучей
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── Результаты ─────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <div
              className="text-[20px] uppercase tracking-[0.2em] text-transparent bg-clip-text font-semibold mb-6"
              style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
            >
              [ Результаты ]
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-[1.2]">
              Результаты работы с нашими коучами
            </h2>
          </motion.div>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-carousel" style={{ width: 'max-content' }}>
              {[
                {
                  name: "Светлана Бухмиллер",
                  role: "Экономист. Фитнес-тренер",
                  quote: "За месяц я пересобрала формат работы, увидела ценность своего труда, запустила новый проект и получила первые заявки ещё до старта продаж.",
                  photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop&crop=face",
                  bg: "linear-gradient(135deg, rgba(254,226,226,0.7) 0%, rgba(254,202,202,0.4) 50%, rgba(255,255,255,0.95) 100%)",
                  border: "rgba(252,165,165,0.35)",
                },
                {
                  name: "Дарья Деревягина",
                  role: "Диспетчер, ОАО «РЖД»",
                  quote: "Мне предложили две новые должности на выбор с повышением оклада и удобным графиком. Доход вырос, а баланс работы и жизни стал реальностью.",
                  photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=600&fit=crop&crop=face",
                  bg: "linear-gradient(135deg, rgba(224,231,255,0.7) 0%, rgba(199,210,254,0.4) 50%, rgba(255,255,255,0.95) 100%)",
                  border: "rgba(165,180,252,0.35)",
                },
                {
                  name: "Анна Ковалёва",
                  role: "Маркетолог, основатель агентства",
                  quote: "После 3 сессий я наконец определилась с позиционированием, подняла чек на 40% и перестала работать с клиентами, которые не ценят мою экспертизу.",
                  photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=face",
                  bg: "linear-gradient(135deg, rgba(220,252,231,0.7) 0%, rgba(187,247,208,0.4) 50%, rgba(255,255,255,0.95) 100%)",
                  border: "rgba(134,239,172,0.35)",
                },
                {
                  name: "Михаил Романов",
                  role: "CEO технологического стартапа",
                  quote: "Коучинг помог мне выстроить систему делегирования. Команда стала работать автономно, а я наконец сфокусировался на стратегии роста компании.",
                  photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
                  bg: "linear-gradient(135deg, rgba(255,251,235,0.7) 0%, rgba(254,243,199,0.4) 50%, rgba(255,255,255,0.95) 100%)",
                  border: "rgba(252,211,77,0.35)",
                },
                {
                  name: "Елена Морозова",
                  role: "HR-директор, международная компания",
                  quote: "Пришла с выгоранием и мыслями об уходе. Через 5 сессий вернула энергию, пересмотрела приоритеты и получила повышение, о котором даже не думала.",
                  photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop&crop=face",
                  bg: "linear-gradient(135deg, rgba(237,233,254,0.7) 0%, rgba(221,214,254,0.4) 50%, rgba(255,255,255,0.95) 100%)",
                  border: "rgba(196,181,253,0.35)",
                },
                {
                  name: "Олег Петров",
                  role: "Предприниматель, e-commerce",
                  quote: "Коуч помог увидеть слепые зоны в бизнесе. За 2 месяца выручка выросла на 35% — просто потому что я перестал тратить энергию не туда.",
                  photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
                  bg: "linear-gradient(135deg, rgba(254,226,226,0.7) 0%, rgba(254,202,202,0.4) 50%, rgba(255,255,255,0.95) 100%)",
                  border: "rgba(252,165,165,0.35)",
                },
                {
                  name: "Ирина Волкова",
                  role: "Психолог, частная практика",
                  quote: "Я добавила коучинговые инструменты в свою работу и средний чек вырос вдвое. Клиенты стали приходить по рекомендациям — сарафанное радио заработало.",
                  photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&crop=face",
                  bg: "linear-gradient(135deg, rgba(224,231,255,0.7) 0%, rgba(199,210,254,0.4) 50%, rgba(255,255,255,0.95) 100%)",
                  border: "rgba(165,180,252,0.35)",
                },
                {
                  name: "Алексей Сидоров",
                  role: "Руководитель отдела продаж",
                  quote: "Коучинг изменил мой стиль управления. Команда перестала ждать указаний и начала предлагать решения сама. Результаты квартала превзошли план на 20%.",
                  photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&crop=face",
                  bg: "linear-gradient(135deg, rgba(220,252,231,0.7) 0%, rgba(187,247,208,0.4) 50%, rgba(255,255,255,0.95) 100%)",
                  border: "rgba(134,239,172,0.35)",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[85vw] sm:w-[420px] rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                  style={{ background: item.bg, border: `1px solid ${item.border}` }}
                >
                  <div className="flex h-full">
                    <div className="w-36 sm:w-40 shrink-0 relative">
                      <img src={item.photo} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 p-5 flex flex-col justify-center">
                      <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                      <p className="text-[10px] text-slate-400 font-light mt-0.5 mb-3">{item.role}</p>
                      <p className="text-xs text-slate-600 leading-relaxed font-light">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── CTA — Ваши цели ближе ──────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 mb-4">
              Ваши цели ближе, чем кажутся
            </h2>
            <p className="text-base text-slate-500 font-light mb-10">
              Выберите коуча и начните двигаться к результату уже сейчас.
            </p>
            <a
              href="#specialist"
              className="group inline-flex items-center gap-3 rounded-full px-10 py-5 text-white text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-lg shadow-blue-500/20"
              style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
            >
              Выбрать коуча
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── FAQ ─────────────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <div
              className="text-[20px] uppercase tracking-[0.2em] text-transparent bg-clip-text font-semibold mb-6"
              style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
            >
              [ FAQ ]
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900">
              Часто задаваемые вопросы
            </h2>
          </motion.div>

          <div className="space-y-3">
            {[
              { q: "Как проходит сессия и нужно ли к ней готовиться?", a: "Сессия проходит онлайн в Zoom, длится 60 минут. Специальной подготовки не требуется — коуч поможет сформулировать запрос в начале встречи." },
              { q: "Можно ли работать с коучем из другой страны и часового пояса?", a: "Да, все сессии проходят онлайн. Наши коучи работают с клиентами из 30+ стран и гибко подстраиваются под ваш часовой пояс." },
              { q: "Сколько сессий нужно, чтобы увидеть результат?", a: "Первые инсайты часто появляются уже на первой сессии. Для устойчивых изменений рекомендуем от 5 до 10 сессий." },
              { q: "Что означает сертификация ICF и почему она важна?", a: "ICF (International Coaching Federation) — международный золотой стандарт в коучинге. Сертификация гарантирует, что коуч прошёл аккредитованное обучение и следует этическому кодексу." },
              { q: "Конфиденциальна ли работа с коучем?", a: "Абсолютно. Все разговоры с коучем строго конфиденциальны. Это закреплено в этическом кодексе ICF, которому следуют все наши коучи." },
            ].map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className={`bg-white border rounded-[1.5rem] px-6 py-5 cursor-pointer transition-all duration-300 ${isOpen ? "border-blue-200 shadow-md" : "border-black/[0.05] shadow-sm hover:border-blue-100"}`}
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-medium text-slate-900">{item.q}</p>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-500" : ""}`} />
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-slate-500 font-light leading-relaxed pt-4">{item.a}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 6. FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2rem] p-12 md:p-16 text-center border border-white/10 shadow-2xl shadow-indigo-900/10"
            style={{
              background:
                "radial-gradient(ellipse at 20% 50%, #93c5fd 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #60a5fa 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #818cf8 0%, transparent 45%), linear-gradient(135deg, #1e40af 0%, #2563eb 30%, #3b82f6 50%, #1d4ed8 70%, #1e3a8a 100%)",
            }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.2] tracking-tight mb-4">
              Готовы найти своего коуча?
            </h2>
            <p className="text-base text-blue-100 font-light mb-10 max-w-md mx-auto">
              Начните путь к вашим целям прямо сейчас
            </p>
            <a
              href="#specialist"
              className="group inline-flex items-center gap-4 rounded-full px-10 py-5 bg-white text-slate-900 text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              Найти коуча
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────────────────────── */}
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
                    <a href="#" className="hover:text-slate-900 transition-colors">
                      Политика конфиденциальности
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-slate-900 transition-colors">
                      Условия использования платформы
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-slate-900 transition-colors">
                      Правовая информация (Aviso Legal)
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-slate-900 transition-colors">
                      Договор оферты на предоставление услуг платформы
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-slate-900 transition-colors">
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
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group"
                      style={{ background: "rgba(219,234,254,0.25)", border: "1px solid rgba(147,197,253,0.2)" }}
                      aria-label="Telegram"
                    >
                      <svg
                        className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group"
                      style={{ background: "rgba(219,234,254,0.25)", border: "1px solid rgba(147,197,253,0.2)" }}
                      aria-label="Instagram"
                    >
                      <svg
                        className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group"
                      style={{ background: "rgba(219,234,254,0.25)", border: "1px solid rgba(147,197,253,0.2)" }}
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
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
