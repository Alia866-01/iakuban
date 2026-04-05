"use client";

import { ArrowRight, Globe, Check, GraduationCap, Users, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { GlassFilter, GlassEffect } from "@/components/ui/liquid-glass";
import { MobileMenuButton } from "@/components/ui/mobile-menu";
import { SocialLinks } from "@/components/ui/social-links";

// ─── Data ──────────────────────────────────────────────────────────────────

const freeCourses = [
  {
    id: "free-1",
    label: "Коучинг с нуля",
    desc: "Вводный курс для тех, кто хочет понять, что такое коучинг и подходит ли он вам как профессия.",
    items: [
      "5 видеоуроков по основам коучинга",
      "Практические упражнения с обратной связью",
      "Доступ к закрытому сообществу",
      "Сертификат о прохождении курса",
    ],
    price: "Бесплатно",
    bg: "linear-gradient(135deg, rgba(224,242,254,0.7) 0%, rgba(186,230,253,0.4) 50%, rgba(255,255,255,0.95) 100%)",
    border: "rgba(125,211,252,0.35)",
    hoverBorder: "hover:border-sky-200",
    hoverShadow: "hover:shadow-sky-100/50",
  },
  {
    id: "free-2",
    label: "Профессия коуч",
    desc: "Глубокое погружение в профессию: навыки, инструменты и первые клиенты.",
    items: [
      "12 модулей с теорией и практикой",
      "Менторские сессии с действующими коучами",
      "Работа с реальными клиентами под супервизией",
      "Персональный план развития карьеры коуча",
    ],
    price: "Бесплатно",
    bg: "linear-gradient(135deg, rgba(224,231,255,0.7) 0%, rgba(199,210,254,0.4) 50%, rgba(255,255,255,0.95) 100%)",
    border: "rgba(165,180,252,0.35)",
    hoverBorder: "hover:border-indigo-200",
    hoverShadow: "hover:shadow-indigo-100/50",
  },
];

const icfCourses = [
  {
    id: "icf-1",
    label: "ICF Level 1 (ACC)",
    desc: "Программа аккредитации первого уровня ICF. Фундамент профессионального коучинга.",
    items: [
      "60+ часов аккредитованного обучения",
      "Практика с реальными клиентами",
      "Супервизия и менторинг",
      "Подготовка к экзамену ICF",
    ],
    price: "от 150 000 ₽",
    priceSub: "возможна рассрочка",
    badge: null,
    bg: "linear-gradient(135deg, rgba(255,251,235,0.7) 0%, rgba(254,243,199,0.4) 50%, rgba(255,255,255,0.95) 100%)",
    border: "rgba(252,211,77,0.35)",
    hoverBorder: "hover:border-amber-200",
    hoverShadow: "hover:shadow-amber-100/50",
  },
  {
    id: "icf-2",
    label: "ICF Level 2 (PCC)",
    desc: "Продвинутая программа для коучей, стремящихся к уровню PCC. Глубина, мастерство, результаты.",
    items: [
      "125+ часов аккредитованного обучения",
      "Глубокая работа с коучинговыми компетенциями",
      "Групповой и индивидуальный менторинг",
      "Полное сопровождение до получения PCC",
    ],
    price: "от 300 000 ₽",
    priceSub: "возможна рассрочка",
    badge: "Популярное",
    bg: "linear-gradient(135deg, rgba(245,243,255,0.7) 0%, rgba(237,233,254,0.4) 50%, rgba(255,255,255,0.95) 100%)",
    border: "rgba(196,181,253,0.35)",
    hoverBorder: "hover:border-violet-200",
    hoverShadow: "hover:shadow-violet-100/50",
  },
];

const testimonials = [
  {
    id: "t1",
    name: "Светлана Бухмиллер",
    initials: "СБ",
    role: "ICF ACC, карьерный коуч",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    quote:
      "После обучения в академии я получила сертификацию ICF ACC и за 3 месяца набрала полную практику. Сейчас провожу 20+ сессий в месяц.",
    bg: "linear-gradient(135deg, rgba(254,226,226,0.6) 0%, rgba(254,202,202,0.3) 50%, rgba(255,255,255,0.9) 100%)",
    border: "rgba(252,165,165,0.3)",
    avatarBg: "linear-gradient(135deg, #fca5a5 0%, #f87171 100%)",
    hoverBorder: "hover:border-rose-200",
    hoverShadow: "hover:shadow-rose-100/50",
  },
  {
    id: "t2",
    name: "Дарья Деревягина",
    initials: "ДД",
    role: "ICF PCC, лайф-коуч",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    quote:
      "Путь от нуля до PCC занял 2 года. Академия сопровождала на каждом этапе. Сейчас мой средний чек — 15 000 ₽ за сессию.",
    bg: "linear-gradient(135deg, rgba(224,231,255,0.6) 0%, rgba(199,210,254,0.3) 50%, rgba(255,255,255,0.9) 100%)",
    border: "rgba(165,180,252,0.3)",
    avatarBg: "linear-gradient(135deg, #a5b4fc 0%, #818cf8 100%)",
    hoverBorder: "hover:border-indigo-200",
    hoverShadow: "hover:shadow-indigo-100/50",
  },
  {
    id: "t3",
    name: "Алексей Волков",
    initials: "АВ",
    role: "ICF ACC, бизнес-коуч",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    quote:
      "Пришёл из корпоративного мира. Обучение дало не только навыки, но и первых клиентов через платформу. Доход вырос в 2 раза.",
    bg: "linear-gradient(135deg, rgba(220,252,231,0.6) 0%, rgba(187,247,208,0.3) 50%, rgba(255,255,255,0.9) 100%)",
    border: "rgba(134,239,172,0.3)",
    avatarBg: "linear-gradient(135deg, #6ee7b7 0%, #34d399 100%)",
    hoverBorder: "hover:border-emerald-200",
    hoverShadow: "hover:shadow-emerald-100/50",
  },
  {
    id: "t4",
    name: "Марина Козлова",
    initials: "МК",
    role: "ICF PCC, executive-коуч",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    quote:
      "Академия — это не просто обучение, это сообщество. Здесь я нашла коллег, менторов и партнёров для совместных проектов.",
    bg: "linear-gradient(135deg, rgba(255,251,235,0.6) 0%, rgba(254,243,199,0.3) 50%, rgba(255,255,255,0.9) 100%)",
    border: "rgba(252,211,77,0.3)",
    avatarBg: "linear-gradient(135deg, #fcd34d 0%, #f59e0b 100%)",
    hoverBorder: "hover:border-amber-200",
    hoverShadow: "hover:shadow-amber-100/50",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-600 font-sans selection:bg-indigo-500/20 selection:text-indigo-900 relative overflow-hidden">
      <GlassFilter />

      {/* Background: noise texture + subtle grid */}
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
            WebkitMaskImage:
              "linear-gradient(to bottom, black 40%, transparent 100%)",
          }}
        />
      </div>

      {/* ─── Navbar ────────────────────────────────────────────────────────── */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-7xl">
          <GlassEffect className="rounded-full px-8 py-3 w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <span
                  className="text-sm font-bold tracking-widest uppercase text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)",
                  }}
                >
                  Iakuban
                </span>
              </div>
              <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-slate-600">
                <a href="/" className="hover:text-slate-900 transition-colors">
                  Найти специалиста
                </a>
                <a href="/about" className="hover:text-slate-900 transition-colors">
                  О нас
                </a>
                <a href="/academy" className="hover:text-slate-900 transition-colors text-slate-900">
                  Академия
                </a>
                <a href="#free" className="hover:text-slate-900 transition-colors">
                  Учиться бесплатно
                </a>
                <a href="#login" className="hover:text-slate-900 transition-colors">
                  Войти
                </a>
              </div>
              <button
                className="hidden sm:inline-flex text-white border border-white/20 px-6 py-2.5 rounded-full text-[13px] font-semibold hover:opacity-90 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)",
                }}
                type="button"
              >
                Начать
              </button>
              <MobileMenuButton />
            </div>
          </GlassEffect>
        </div>
      </div>

      {/* ─── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative z-10 pt-40 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6">
          {/* Left — Title card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="relative rounded-[2rem] p-8 md:p-10 overflow-hidden border shadow-xl h-full flex flex-col justify-center"
              style={{ background: 'radial-gradient(ellipse at 20% 50%, #dbeafe 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #bfdbfe 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #e0f2fe 0%, transparent 45%), linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 30%, #f0f9ff 50%, #dbeafe 70%, #f0f9ff 100%)', border: '1px solid rgba(147,197,253,0.3)' }}
            >
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-white border border-black/[0.05] shadow-sm">
                  <GraduationCap className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-bold tracking-[0.15em] uppercase text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)' }}>
                    Iakuban Academy
                  </span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-light text-slate-900 leading-[1.2] tracking-tight">
                Получите профессиональный<br />статус сертифицированного<br />коуча ICF
              </h1>
            </div>
          </motion.div>

          {/* Right — Features card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="relative rounded-[2rem] p-8 md:p-10 overflow-hidden border border-white/10 shadow-2xl shadow-indigo-900/10 h-full flex flex-col justify-center"
              style={{
                background:
                  "radial-gradient(ellipse at 20% 50%, #93c5fd 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #60a5fa 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #818cf8 0%, transparent 45%), linear-gradient(135deg, #1e40af 0%, #2563eb 30%, #3b82f6 50%, #1d4ed8 70%, #1e3a8a 100%)",
              }}
            >
              <ul className="flex flex-col gap-0">
                {[
                  "Обучаем коучингу по золотым стандартам ICF",
                  "Сопровождаем до получения профессионального уровня ICF PCC",
                  "Предоставляем клиентов и обучаем построению личного бренда коуча и продажам",
                ].map((item, i) => (
                  <li key={item}>
                    <div className="flex items-start gap-4 py-5">
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-7 h-7 rounded-full bg-white/15 border border-white/20 flex items-center justify-center shrink-0 mt-0.5"
                      >
                        <motion.div
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.4, delay: 0.7 + i * 0.2 }}
                        >
                          <Check className="w-4 h-4 text-white" />
                        </motion.div>
                      </motion.div>
                      <span className="text-base text-white font-light leading-relaxed">
                        {item}
                      </span>
                    </div>
                    {i < 2 && <div className="w-full h-px bg-gradient-to-r from-white/5 via-white/15 to-white/5" />}
                  </li>
                ))}
                <li>
                  <div className="w-full h-px bg-gradient-to-r from-white/5 via-white/15 to-white/5" />
                  <p className="text-xs text-white font-light pt-4 italic">
                    Наша миссия: делать людей смелыми и открытыми к большим деньгам
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── Section: Бесплатное обучение ──────────────────────────────────── */}
      <section id="free" className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24 scroll-mt-24">
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
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)",
              }}
            >
              [ Бесплатное обучение ]
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-[1.2] max-w-3xl mx-auto text-center">
              Начните путь в коучинг без вложений — изучите основы и примите
              осознанное решение
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {freeCourses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group rounded-[1.5rem] p-8 border border-blue-100/50 shadow-sm hover:shadow-xl hover:shadow-blue-200/40 hover:border-blue-200 transition-all duration-500"
                style={{ background: 'radial-gradient(ellipse at 20% 50%, #dbeafe 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #bfdbfe 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #e0f2fe 0%, transparent 45%), linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 30%, #f0f9ff 50%, #dbeafe 70%, #f0f9ff 100%)' }}
              >
                <div className="flex gap-6 items-start">
                  {/* Left: text content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-medium text-slate-900 tracking-tight mb-4">
                      {course.label}
                    </h3>

                    <p className="text-sm text-slate-500 leading-relaxed font-light mb-6">
                      {course.desc}
                    </p>

                    <div className="w-full h-px bg-gradient-to-r from-black/[0.06] via-black/[0.04] to-transparent mb-5" />

                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium mb-3">
                      Что входит
                    </p>
                    <ul className="space-y-3">
                      {course.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)' }}>
                            <Check className="w-2.5 h-2.5 text-white" />
                          </div>
                          <span className="text-sm text-slate-700 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                  </div>

                  {/* Right: illustration */}
                  <div className="hidden md:flex flex-col items-center shrink-0 gap-3">
                    {i === 0 ? (
                      <svg viewBox="0 0 160 100" className="w-44 h-28 draw-icon text-blue-300 group-hover:text-blue-400 transition-colors duration-500">
                        <rect x="30" y="8" width="100" height="60" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <line x1="30" y1="18" x2="130" y2="18" stroke="currentColor" strokeWidth="1" />
                        <circle cx="38" cy="13" r="2" fill="currentColor" />
                        <circle cx="45" cy="13" r="2" fill="currentColor" />
                        <circle cx="52" cy="13" r="2" fill="currentColor" />
                        <rect x="40" y="24" width="45" height="30" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
                        <polygon points="57,34 57,48 68,41" fill="currentColor" opacity="0.6" />
                        <line x1="95" y1="26" x2="120" y2="26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        <line x1="95" y1="33" x2="115" y2="33" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        <line x1="95" y1="40" x2="118" y2="40" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        <line x1="95" y1="47" x2="112" y2="47" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        <line x1="95" y1="54" x2="116" y2="54" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        <rect x="40" y="58" width="45" height="3" rx="1.5" stroke="currentColor" strokeWidth="0.8" fill="none" />
                        <rect x="40" y="58" width="25" height="3" rx="1.5" fill="currentColor" opacity="0.3" />
                        <path d="M20 68 L30 68 L130 68 L140 68 L140 72 Q140 76 136 76 L24 76 Q20 76 20 72 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <text x="80" y="92" textAnchor="middle" className="text-[8px] fill-current opacity-50" fontFamily="sans-serif">5 видеоуроков</text>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 160 100" className="w-44 h-28 draw-icon text-blue-300 group-hover:text-blue-400 transition-colors duration-500">
                        <rect x="20" y="5" width="120" height="70" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <line x1="20" y1="17" x2="140" y2="17" stroke="currentColor" strokeWidth="1" />
                        <circle cx="28" cy="11" r="2" fill="currentColor" />
                        <circle cx="35" cy="11" r="2" fill="currentColor" />
                        <circle cx="42" cy="11" r="2" fill="currentColor" />
                        <rect x="55" y="9" width="50" height="5" rx="2.5" stroke="currentColor" strokeWidth="0.8" fill="none" />
                        <rect x="28" y="23" width="35" height="20" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
                        <rect x="68" y="23" width="35" height="20" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
                        <rect x="108" y="23" width="25" height="20" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
                        <polyline points="32,39 38,33 44,36 50,28 56,31" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                        <circle cx="85" cy="29" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
                        <path d="M79 39 Q85 35 91 39" stroke="currentColor" strokeWidth="1" fill="none" />
                        <rect x="28" y="50" width="105" height="5" rx="2.5" stroke="currentColor" strokeWidth="0.8" fill="none" />
                        <rect x="28" y="50" width="70" height="5" rx="2.5" fill="currentColor" opacity="0.2" />
                        <rect x="28" y="60" width="105" height="5" rx="2.5" stroke="currentColor" strokeWidth="0.8" fill="none" />
                        <rect x="28" y="60" width="90" height="5" rx="2.5" fill="currentColor" opacity="0.2" />
                        <text x="80" y="92" textAnchor="middle" className="text-[8px] fill-current opacity-50" fontFamily="sans-serif">12 модулей</text>
                      </svg>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-black/[0.06] flex items-center justify-between">
                  <span className="text-lg font-semibold text-slate-900">
                    {course.price}
                  </span>
                  <a href={i === 0 ? "/coaching-from-zero" : "/profession-coach"} className="group/btn inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shrink-0" style={{ background: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)' }}>
                    <span>Подробнее</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── Section: Сертификация ICF ──────────────────────────────────────── */}
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
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)",
              }}
            >
              [ Сертификация ICF ]
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-[1.2] max-w-3xl mx-auto text-center">
              Профессиональные программы с международной сертификацией ICF
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {icfCourses.map((course, i) => {
              const isACC = i === 0;
              const cardBg = isACC
                ? 'radial-gradient(ellipse at 20% 50%, #fef3c7 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #fde68a 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #fef9c3 0%, transparent 45%), linear-gradient(135deg, #fffbeb 0%, #fef3c7 30%, #fffbeb 50%, #fde68a40 70%, #fffbeb 100%)'
                : 'radial-gradient(ellipse at 20% 50%, #ede9fe 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #ddd6fe 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #e9d5ff 0%, transparent 45%), linear-gradient(135deg, #faf5ff 0%, #ede9fe 30%, #faf5ff 50%, #ddd6fe40 70%, #faf5ff 100%)';
              const borderColor = isACC ? 'rgba(252,211,77,0.35)' : 'rgba(196,181,253,0.35)';
              const accentColor = isACC
                ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)'
                : 'linear-gradient(135deg, #c4b5fd 0%, #8b5cf6 50%, #6d28d9 100%)';
                            const iconColor = isACC ? 'text-amber-400 group-hover:text-amber-500' : 'text-violet-400 group-hover:text-violet-500';
              const hoverBorder = isACC ? 'hover:border-amber-200' : 'hover:border-violet-200';
              const hoverShadow = isACC ? 'hover:shadow-amber-100/50' : 'hover:shadow-violet-100/50';

              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group relative rounded-[1.5rem] p-8 shadow-sm ${hoverBorder} hover:shadow-xl ${hoverShadow} transition-all duration-500`}
                  style={{ background: cardBg, border: `1px solid ${borderColor}` }}
                >
                  {course.badge !== null && (
                    <div
                      className="absolute top-4 right-4 text-white text-[10px] uppercase tracking-[0.15em] font-semibold px-3 py-1 rounded-full z-10"
                      style={{ background: accentColor }}
                    >
                      {course.badge}
                    </div>
                  )}

                  <div className="flex gap-6 items-start">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-medium text-slate-900 tracking-tight mb-4">
                        {course.label}
                      </h3>

                      <p className="text-sm text-slate-500 leading-relaxed font-light mb-6">
                        {course.desc}
                      </p>

                      <div className="w-full h-px bg-gradient-to-r from-black/[0.06] via-black/[0.04] to-transparent mb-5" />

                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium mb-3">
                        Что входит
                      </p>
                      <ul className="space-y-3">
                        {course.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: accentColor }}>
                              <Check className="w-2.5 h-2.5 text-white" />
                            </div>
                            <span className="text-sm text-slate-700 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                    </div>

                    {/* Illustration */}
                    <div className="hidden md:flex flex-col items-center shrink-0">
                      {isACC ? (
                        <svg viewBox="0 0 140 120" className={`w-40 h-32 draw-icon ${iconColor} transition-colors duration-500`}>
                          {/* Certificate */}
                          <rect x="20" y="10" width="100" height="70" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
                          <line x1="20" y1="22" x2="120" y2="22" stroke="currentColor" strokeWidth="1.5" />
                          {/* ICF text lines */}
                          <line x1="45" y1="34" x2="95" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <line x1="50" y1="42" x2="90" y2="42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          {/* Star/badge */}
                          <circle cx="70" cy="58" r="11" stroke="currentColor" strokeWidth="2" fill="none" />
                          <path d="M70 49 L72.5 54.5 L78.5 54.5 L73.5 58.5 L75.5 64.5 L70 61 L64.5 64.5 L66.5 58.5 L61.5 54.5 L67.5 54.5 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.5" />
                          {/* Ribbon */}
                          <path d="M62 69 L58 85 L70 78 L82 85 L78 69" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
                          {/* ACC label */}
                          <text x="70" y="100" textAnchor="middle" className="text-[10px] fill-current opacity-60" fontFamily="sans-serif" fontWeight="600">ACC Level 1</text>
                        </svg>
                      ) : (
                        <svg viewBox="0 0 140 120" className={`w-40 h-32 draw-icon ${iconColor} transition-colors duration-500`}>
                          {/* Shield */}
                          <path d="M70 8 L110 22 L110 55 Q110 85 70 100 Q30 85 30 55 L30 22 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
                          {/* Inner shield */}
                          <path d="M70 18 L100 29 L100 52 Q100 76 70 88 Q40 76 40 52 L40 29 Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" opacity="0.5" />
                          {/* Checkmark */}
                          <path d="M55 55 L65 65 L88 40" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          {/* Stars */}
                          <circle cx="55" cy="35" r="3" fill="currentColor" opacity="0.6" />
                          <circle cx="70" cy="28" r="3.5" fill="currentColor" opacity="0.6" />
                          <circle cx="85" cy="35" r="3" fill="currentColor" opacity="0.6" />
                          {/* PCC label */}
                          <text x="70" y="115" textAnchor="middle" className="text-[10px] fill-current opacity-60" fontFamily="sans-serif" fontWeight="600">PCC Level 2</text>
                        </svg>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-black/[0.06] flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-semibold text-slate-900">
                        {course.price}
                      </span>
                      {course.priceSub && (
                        <span className="text-xs text-slate-400 font-light">
                          {course.priceSub}
                        </span>
                      )}
                    </div>
                    <a href={isACC ? "/icf-level-1" : "/icf-level-2"} className="group/btn inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shrink-0" style={{ background: accentColor }}>
                      <span>Подробнее</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── Section: Наши выпускники ───────────────────────────────────────── */}
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
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)",
              }}
            >
              [ Наши выпускники ]
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-[1.2] max-w-3xl mx-auto text-center">
              Истории тех, кто прошёл наше обучение и построил успешную практику
            </h2>
          </motion.div>

          <div className="overflow-hidden">
            <div className="flex gap-6 animate-carousel" style={{ width: 'max-content' }}>
              {[...testimonials, ...testimonials].map((item, i) => (
                <motion.div
                  key={`${item.id}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: (i % 4) * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group flex-shrink-0 w-[85vw] sm:w-[420px] rounded-2xl overflow-hidden shadow-sm ${item.hoverBorder} hover:shadow-md ${item.hoverShadow} transition-all duration-300 cursor-default`}
                  style={{
                    background: item.bg,
                    border: `1px solid ${item.border}`,
                  }}
                >
                  <div className="flex h-full">
                    {/* Photo left */}
                    <div className="w-36 sm:w-44 shrink-0 relative">
                      <img
                        src={item.photo}
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    {/* Content right */}
                    <div className="flex-1 p-5 flex flex-col justify-center">
                      <p className="text-sm font-medium text-slate-900">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-slate-400 font-light mt-0.5 mb-4">
                        {item.role}
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed font-light group-hover:text-slate-900 transition-colors duration-300">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── CTA Cards ─────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Выбрать коуча",
                desc: "Откройте витрину сертифицированных коучей и запишитесь на сессию",
                href: "#",
                icon: Users,
              },
              {
                title: "Задать вопрос по обучению",
                desc: "Напишите нам в Телеграм — ответим на любые вопросы об обучении",
                href: "#",
                icon: MessageCircle,
              },
            ].map((cta, i) => {
              const Icon = cta.icon;
              return (
                <motion.a
                  key={cta.title}
                  href={cta.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group bg-white rounded-2xl border border-black/[0.05] shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-300 px-7 py-8 flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-2xl shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, rgba(147,197,253,0.3) 0%, rgba(59,130,246,0.15) 100%)' }}>
                    <Icon className="w-5 h-5 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-medium text-slate-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      {cta.title}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed font-light">
                      {cta.desc}
                    </p>
                  </div>
                  <div className="shrink-0 mt-1">
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── Final CTA ──────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="relative rounded-[2rem] p-10 md:p-16 overflow-hidden border border-white/10 shadow-2xl shadow-indigo-900/10 text-center"
              style={{
                background:
                  "radial-gradient(ellipse at 20% 50%, #93c5fd 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #60a5fa 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #818cf8 0%, transparent 45%), linear-gradient(135deg, #1e40af 0%, #2563eb 30%, #3b82f6 50%, #1d4ed8 70%, #1e3a8a 100%)",
              }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.2] tracking-tight mb-6 max-w-2xl mx-auto">
                Готовы начать путь к сертификации ICF?
              </h2>
              <p className="text-white text-sm font-light leading-relaxed max-w-xl mx-auto mb-10">
                Присоединяйтесь к сообществу профессиональных коучей. Мы поможем
                на каждом этапе — от первого урока до получения сертификата.
              </p>
              <button
                className="group relative overflow-hidden rounded-full bg-white text-slate-900 px-10 py-4 text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300 hover:bg-white/90 inline-flex items-center gap-4 shadow-lg shadow-black/20 hover:shadow-xl hover:scale-[1.02] mx-auto"
                type="button"
              >
                <span>Написать в Телеграм</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Footer ────────────────────────────────────────────────────────── */}
      <footer className="relative z-10 pt-0 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#fafafa]">
        {/* Decorative gradient divider above footer columns */}
        <div
          className="max-w-7xl mx-auto h-px mb-16"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(147,197,253,0.6) 30%, rgba(99,102,241,0.5) 70%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Footer columns */}
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
              {/* Company Info */}
              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-slate-900 mb-6">
                  Iakuban
                </h3>
                <div className="space-y-2 text-xs text-slate-500 font-light leading-relaxed">
                  <p className="font-medium text-slate-700">
                    Iakuban Coaching Academy, S.L.
                  </p>
                  <p>
                    Avda Pau Casals, Num 4, Portal A,
                    <br />
                    08513 Prats de Lluçanès (Barcelona)
                  </p>
                  <p className="pt-2">
                    <a
                      href="mailto:info@iakuban.com"
                      className="hover:text-slate-900 transition-colors"
                    >
                      info@iakuban.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+34641461550"
                      className="hover:text-slate-900 transition-colors"
                    >
                      +34 641 461 550
                    </a>
                  </p>
                  <p>NIF B22895676</p>
                </div>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-slate-900 mb-6">
                  Правовая информация
                </h3>
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

              {/* Contacts */}
              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-slate-900 mb-6">
                  Контакты
                </h3>
                <div className="space-y-4">
                  <div className="text-xs text-slate-500 font-light">
                    <a
                      href="mailto:info@iakuban.com"
                      className="hover:text-slate-900 transition-colors"
                    >
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
              <button
                className="font-medium text-slate-900 hover:text-indigo-600 transition-colors"
                type="button"
              >
                RU
              </button>
              <span className="text-slate-300">/</span>
              <button
                className="text-slate-400 hover:text-indigo-600 transition-colors"
                type="button"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
