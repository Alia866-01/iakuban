"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, Sparkles, Globe, Check, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { GlassFilter, GlassEffect } from "@/components/ui/liquid-glass";
import { Card, CardContent } from "@/components/ui/card";

export default function IcfLevel1Page() {
  const [openModule, setOpenModule] = useState<number | null>(0);
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
                <span
                  className="text-sm font-bold tracking-widest uppercase text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
                >
                  Iakuban
                </span>
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
      <section className="relative z-10 pt-40 pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 pt-10 lg:pt-0 relative"
          >
            <div className="absolute -top-10 -left-10 w-20 h-20 border-t border-l border-black/[0.05] rounded-tl-3xl opacity-50" />

            <div className="flex items-center gap-3 mb-8">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
              </span>
              <span
                className="text-[20px] uppercase tracking-[0.2em] text-transparent bg-clip-text font-semibold"
                style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
              >
                Программа ICF Level 1<br />«Магия и Наука Коучинга»
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-light leading-[1.1] mb-8 tracking-tight text-slate-900">
              Освойте коучинг по стандартам ICF{" "}
              <span className="typing-effect">за 3 месяца</span>
            </h1>

            <ul className="space-y-3 mb-12 max-w-md">
              {["Сертификат ICF Level 1", "Платная практика с первого месяца", "Сильное окружение"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 100%)' }} />
                  <span className="text-sm md:text-base text-slate-500 font-light">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-start gap-4">
              <button
                type="button"
                className="relative group overflow-hidden rounded-full px-10 py-5 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
              >
                <div className="relative flex items-center gap-4">
                  <span className="text-sm uppercase tracking-[0.15em] font-semibold text-white">
                    Поступить в Iakuban Level 1
                  </span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>

              <div className="inline-flex items-center rounded-full px-4 py-2 bg-white border border-black/[0.05] shadow-sm">
                <span className="text-xs text-slate-600 font-medium tracking-wide">NPS = +100 | 83% студентов ставят 10/10</span>
              </div>
            </div>

            <p className="mt-6 text-[11px] text-slate-400 font-light tracking-wide">
              Старт потока: 25 апреля 2026 10:00 МСК
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative h-[500px] md:h-[600px] w-full rounded-[2rem] overflow-hidden bg-white border border-black/[0.04] p-2 shadow-[0_0_60px_-15px_rgba(147,197,253,0.4),0_4px_20px_-5px_rgba(0,0,0,0.04)]"
          >
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
              <Image src="/images/hero-level1.jpeg" alt="ICF Level 1 обучение" fill className="object-cover" />
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="bg-white/80 backdrop-blur-md border border-black/[0.05] rounded-2xl p-4 flex items-center gap-4 shadow-lg">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center border border-indigo-100">
                    <Sparkles className="w-4 h-4 text-indigo-500" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Программа</div>
                    <div className="text-xs font-medium text-slate-900">ICF Level 1</div>
                  </div>
                </div>
                <div className="text-[10px] tracking-[0.2em] text-slate-400 rotate-90 origin-bottom-right font-medium">
                  VOL. 01
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 2. БОЛЬ ─────────────────────────────────────────────────────────── */}
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
              [ Проблема ]
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-[1.2] max-w-3xl mx-auto">
              У вас есть опыт, амбиции и потенциал. Нужен только один инструмент.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                audience: "Помогающие практики",
                problem: "Чеки не растут, клиенты уходят к коучам за ростом.",
                solution: "Коучинг ICF позволяет зарабатывать больше на той же аудитории.",
                avatars: [
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
                ],
              },
              {
                audience: "Предприниматели и руководители",
                problem: "Команда ждёт от вас готовых решений.",
                solution: "Коучинг ICF даёт инструмент партнёрского диалога, который меняет и команду, и масштаб влияния.",
                avatars: [
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
                ],
              },
              {
                audience: "С нуля",
                problem: "Чувствуете призвание помогать людям, но нет твёрдых навыков и профессии.",
                solution: "Коучинг ICF даёт и то, и другое.",
                avatars: [
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
                ],
              },
            ].map((item, i) => (
              <motion.div
                key={item.audience}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white border border-black/[0.05] rounded-[1.5rem] p-8 shadow-[0_0_60px_-15px_rgba(147,197,253,0.4),0_4px_20px_-5px_rgba(0,0,0,0.04)] hover:border-blue-200 transition-all duration-300"
              >
                <div className="flex -space-x-2 mb-5">
                  {item.avatars.map((src, j) => (
                    <img key={j} src={src} alt="User" className="w-10 h-10 rounded-full ring-2 ring-white object-cover" />
                  ))}
                </div>
                <p className="text-xl font-semibold text-slate-900 mb-3">{item.audience}</p>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-4">{item.problem}</p>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent mb-4" />
                <p
                  className="text-sm font-medium leading-relaxed text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
                >
                  {item.solution}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 3. КОУЧИНГ КАК ПРОФЕССИЯ ────────────────────────────────────────── */}
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
              [ Профессия ]
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900">
              Коучинг — самая удовлетворяющая профессия
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Фокус на будущем",
                desc: "Клиенты приходят за ростом. Вы помогаете строить будущее.",
              },
              {
                title: "Глубина без тяжести",
                desc: "Вы работаете с ценностями и мышлением клиента, и после сессии подъём чувствуют оба.",
              },
              {
                title: "Навык, который усиливает жизнь",
                desc: "Коучинг встраивается в управление командой, в отношения, в бизнес.",
              },
              {
                title: "Клиенты как бриллиант",
                desc: "Клиенты будут передавать вас как бриллиант своим друзьям.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-black/[0.05] rounded-[1.5rem] p-8 shadow-[0_0_60px_-15px_rgba(147,197,253,0.4),0_4px_20px_-5px_rgba(0,0,0,0.04)] hover:border-blue-200 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-2.5 h-2.5 rounded-full shrink-0 mt-1.5" style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 100%)" }} />
                <div>
                  <p className="text-base font-semibold text-slate-900 mb-2">{item.title}</p>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 4. РЫНОК ────────────────────────────────────────────────────────── */}
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
              [ Рынок ]
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900">
              Как получить результаты и не остаться просто с сертификатом
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-base text-slate-600 leading-relaxed font-light">
                ICF — золотой стандарт. Но большинство программ учат компетенциям и оставляют коуча с сертификатом один на один с рынком.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="rounded-[1.5rem] p-8 border border-white/10 shadow-2xl shadow-indigo-900/10"
                style={{
                  background:
                    "radial-gradient(ellipse at 20% 50%, #93c5fd 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #60a5fa 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #818cf8 0%, transparent 45%), linear-gradient(135deg, #1e40af 0%, #2563eb 30%, #3b82f6 50%, #1d4ed8 70%, #1e3a8a 100%)",
                }}
              >
                <p className="text-white text-base font-light leading-relaxed">
                  Результат даёт система: обучение, практика с первого месяца, маркетинг, продажи и проявленность.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 5. РЕШЕНИЕ ──────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <div
              className="text-[20px] uppercase tracking-[0.2em] text-transparent bg-clip-text font-semibold mb-6"
              style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
            >
              [ Решение ]
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900 mb-4">
              Iakuban Coaching Academy создаёт коучей с клиентами, доходом и масштабом
            </h2>
            <p className="text-base text-slate-500 font-light max-w-2xl mx-auto">
              75 часов за 3 месяца. Все 8 компетенций ICF. Личная трансформация.
            </p>
            <p className="mt-4 text-sm text-slate-500 font-light max-w-2xl mx-auto">
              Но главное: инфраструктура, которая делает вас коучем, который зарабатывает.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              "Тренинги, менторинги, супервизия, рефлексия",
              "Практика в тройках с обратной связью от ассистентов",
              "15+ коуч-сессий в качестве клиента",
              "Модули по маркетингу и продажам в коучинге",
              "Мастермайнды по продажам после выпуска",
              "Клуб выпускников",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-black/[0.05] rounded-2xl p-5 shadow-sm hover:border-blue-200 hover:shadow-md hover:shadow-blue-100/50 transition-all duration-300 flex items-start gap-4"
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
                >
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[1.5rem] p-8 md:p-10 text-center mb-8 shadow-[0_0_60px_-15px_rgba(147,197,253,0.4),0_4px_20px_-5px_rgba(0,0,0,0.04)]"
            style={{
              background: 'radial-gradient(ellipse at 20% 50%, #dbeafe 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #bfdbfe 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #e0f2fe 0%, transparent 45%), linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 30%, #f0f9ff 50%, #dbeafe 70%, #f0f9ff 100%)',
              border: '1px solid rgba(147,197,253,0.3)',
            }}
          >
            <p className="text-slate-900 text-xl md:text-2xl font-light leading-relaxed tracking-tight">
              Начало платной практики через 1 месяц. Окупаете программу через 2. Выходите в плюс через 3.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <button
              type="button"
              className="group relative overflow-hidden rounded-full px-10 py-5 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] inline-flex items-center gap-4 text-white"
              style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
            >
              <span className="text-sm uppercase tracking-[0.15em] font-semibold">
                Начать путь в коучинг ICF
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 6. КЕЙСЫ ────────────────────────────────────────────────────────── */}
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
              [ Кейсы ]
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900">
              Результаты, которые говорят сами за себя
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                name: "Тамилла Бухмиллер",
                role: "клинический психолог",
                headline: "«Всё сложилось в 10 раз ярче, чем я ожидала»",
                text: "500 000₽ за первый месяц на коучинге...",
                photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop&crop=face",
                bg: "linear-gradient(135deg, rgba(254,226,226,0.7) 0%, rgba(254,202,202,0.4) 50%, rgba(255,255,255,0.95) 100%)",
                border: "rgba(252,165,165,0.35)",
              },
              {
                name: "Яромила Юланова",
                role: "предприниматель",
                headline: "«Я реально сорвала куш»",
                text: "Встроила коучинг в практику, запустила YouTube...",
                photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=400&fit=crop&crop=face",
                bg: "linear-gradient(135deg, rgba(224,231,255,0.7) 0%, rgba(199,210,254,0.4) 50%, rgba(255,255,255,0.95) 100%)",
                border: "rgba(165,180,252,0.35)",
              },
              {
                name: "Ольга Тимонина",
                role: "предприниматель и психолог",
                headline: "«Если бы я не пошла, я бы затормозила свой рост на три года»",
                text: "Собрала группу на 300 000₽...",
                photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop&crop=face",
                bg: "linear-gradient(135deg, rgba(220,252,231,0.7) 0%, rgba(187,247,208,0.4) 50%, rgba(255,255,255,0.95) 100%)",
                border: "rgba(134,239,172,0.35)",
              },
              {
                name: "Андрей Коновалов",
                role: "",
                headline: "«Использовал скрипт установочной сессии»",
                text: "В первый месяц закрыл клиента на 80 000 руб",
                photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop&crop=face",
                bg: "linear-gradient(135deg, rgba(255,251,235,0.7) 0%, rgba(254,243,199,0.4) 50%, rgba(255,255,255,0.95) 100%)",
                border: "rgba(252,211,77,0.35)",
              },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                style={{ background: item.bg, border: `1px solid ${item.border}` }}
              >
                <div className="flex h-full">
                  <div className="w-36 sm:w-44 shrink-0 relative">
                    <img src={item.photo} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 p-6">
                    <p className="text-sm font-bold text-slate-900">{item.name}</p>
                    {item.role && <p className="text-[11px] text-slate-400 font-light mb-3">{item.role}</p>}
                    {!item.role && <div className="mb-3" />}
                    <p className="text-base font-medium text-slate-900 mb-2 leading-snug">{item.headline}</p>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 7. ВИДЕООТЗЫВЫ ──────────────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <div
              className="text-[20px] uppercase tracking-[0.2em] text-transparent bg-clip-text font-semibold mb-6"
              style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
            >
              [ Видеоотзывы ]
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900">
              Отзывы студентов Level 1
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card className="overflow-hidden border-black/[0.05] shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="bg-slate-100 h-48 flex items-center justify-center">
                      <span className="text-sm text-slate-400 font-light">Видеоотзыв скоро</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 8. ЦЕННОСТЬ ─────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <div
              className="text-[20px] uppercase tracking-[0.2em] text-transparent bg-clip-text font-semibold mb-6"
              style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
            >
              [ Ценность ]
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900">
              Рыночная стоимость компонентов нашей программы
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mx-auto bg-white rounded-[1.5rem] border border-black/[0.05] shadow-[0_0_60px_-15px_rgba(147,197,253,0.4),0_4px_20px_-5px_rgba(0,0,0,0.04)] overflow-hidden mb-8"
          >
            {[
              { label: "65ч тренинга", value: "€2,000" },
              { label: "7ч менторинга", value: "€135" },
              { label: "3ч инд. менторинга", value: "€300" },
              { label: "Супервизия", value: "€50" },
              { label: "Рефлексия", value: "€50" },
              { label: "Ассесмент", value: "€100" },
              { label: "Клуб выпускников", value: "€7,000" },
              { label: "Мастермайнд", value: "€7,000" },
            ].map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center justify-between px-8 py-4 ${i % 2 === 0 ? "bg-slate-50/50" : "bg-white"}`}
              >
                <span className="text-sm text-slate-600 font-light">{row.label}</span>
                <span className="text-base text-slate-900 font-semibold">{row.value}</span>
              </div>
            ))}
            <div className="flex items-center justify-between px-8 py-6 border-t-2 border-black/[0.08] bg-white">
              <span className="text-lg font-semibold text-slate-900">Итого</span>
              <span
                className="text-2xl font-bold text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
              >
                €16,635
              </span>
            </div>
          </motion.div>

          <div className="text-center">
            <p className="text-sm text-slate-500 font-light mb-8">
              Всё это входит в программу. Узнайте, сколько это стоит у нас.
            </p>
            <button
              type="button"
              className="group relative overflow-hidden rounded-full px-10 py-5 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] inline-flex items-center gap-4 text-white"
              style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
            >
              <span className="text-sm uppercase tracking-[0.15em] font-semibold">
                Узнать стоимость
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 9. ПРОГРАММА ────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="text-[20px] uppercase tracking-[0.2em] text-transparent bg-clip-text font-semibold mb-6"
                style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
              >
                [ Программа ]
              </div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900">
                Идеальная программа Level 1
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block"
            >
              <div
                className="text-[20px] uppercase tracking-[0.2em] text-transparent bg-clip-text font-semibold mb-6"
                style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
              >
                [ Аккредитация ]
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              {
                title: "Вдохновение (23ч)",
                points: [
                  "Коучинг ICF: стандарты, этика, компетенции",
                  "Структура коуч-сессии. Демонстрации",
                  "Контракт как основа коучинговых отношений",
                  "Активное слушание — первый уровень и второй уровень",
                  "Мощные вопросы. Техники продвижения",
                  "Практика в тройках с обратной связью",
                ],
              },
              {
                title: "Глубина (23ч)",
                points: [
                  "Ценности клиента: выявление и работа с ними",
                  "Убеждения и ограничивающие установки",
                  "Пирамида нейрологических уровней в коучинге",
                  "Инструменты масштабирования и визуализации",
                  "Работа с сопротивлением и прокрастинацией",
                  "Менторинг и супервизия первой сессии",
                ],
              },
              {
                title: "Магия (29ч)",
                points: [
                  "Все 8 компетенций ICF: глубокое погружение",
                  "Ассесмент коуч-сессии по стандартам ICF",
                  "Маркетинг коуча: личный бренд и позиционирование",
                  "Продажи в коучинге: установочная сессия и воронка",
                  "Мастермайнд по построению практики",
                  "Выпускной: защита и получение сертификата",
                ],
              },
            ].map((module, i) => {
              const isOpen = openModule === i;
              return (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`bg-white border rounded-[1.5rem] p-6 md:p-8 cursor-pointer transition-all duration-500 ${isOpen ? "border-blue-200 shadow-xl shadow-blue-100/30" : "border-black/[0.05] hover:border-blue-100 shadow-sm"}`}
                  onClick={() => setOpenModule(isOpen ? null : i)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-medium text-base text-slate-900">{module.title}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-500" : ""}`}
                    />
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2 pt-5">
                      {module.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <div
                            className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                            style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 100%)" }}
                          />
                          <span className="text-slate-500 text-sm leading-relaxed font-light">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Right — Аккредитация */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div
              className="rounded-[1.5rem] p-8 md:p-10 h-full flex flex-col justify-center border border-white/10 shadow-2xl shadow-indigo-900/10"
              style={{ background: 'radial-gradient(ellipse at 20% 50%, #93c5fd 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #60a5fa 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #818cf8 0%, transparent 45%), linear-gradient(135deg, #1e40af 0%, #2563eb 30%, #3b82f6 50%, #1d4ed8 70%, #1e3a8a 100%)' }}
            >
              <h3 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-tight leading-tight">
                Программа аккредитована ICF
              </h3>
              <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10 mb-6" />
              <p className="text-sm text-white font-light leading-relaxed mb-8">
                Iakuban Coaching Academy — аккредитованный провайдер обучения коучингу по стандартам International Coaching Federation. Сертификат Level 1 признаётся по всему миру.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">ICF Level 1</p>
                  <p className="text-white text-xs font-light">Accredited Coaching Education</p>
                </div>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 11. ОСНОВАТЕЛЬ ──────────────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 relative h-[600px] rounded-[2rem] overflow-hidden border border-black/[0.05] p-2 bg-white shadow-2xl shadow-slate-200/50"
          >
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-slate-100">
              <Image src="/images/yakuban.png" alt="Алексей Якубан" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 lg:pl-12"
          >
            <div
              className="text-[20px] uppercase tracking-[0.2em] text-transparent bg-clip-text font-semibold mb-6"
              style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
            >
              [ Основатель ]
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-12 tracking-tight text-slate-900">Алексей Якубан</h2>

            <div className="space-y-8">
              {[
                "Коуч PCC ICF. 2200+ часов практики.",
                "Основатель Iakuban Coaching Academy — 3 программы аккредитованы ICF.",
                "700+ выпускников программ, включая Level 1.",
                "Лично ведёт ключевые тренинги и демо-сессии программы.",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="text-xs font-mono text-slate-400 mt-0.5">0{i + 1}</div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light group-hover:text-slate-900 transition-colors">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-black/[0.05] grid grid-cols-3 gap-8">
              {[
                { val: "2200+", label: "часов практики" },
                { val: "700+", label: "выпускников" },
                { val: "3", label: "программы ICF" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-light text-transparent bg-clip-text mb-1"
                    style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
                  >
                    {stat.val}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 12. КОМАНДА ─────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <div
              className="text-[20px] uppercase tracking-[0.2em] text-transparent bg-clip-text font-semibold mb-6"
              style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
            >
              [ Наша команда ]
            </div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-12">
            {[
              { initials: "АЯ", name: "Алексей Якубан", role: "Основатель, тренер ICF PCC" },
              { initials: "СБ", name: "Саша Баранова", role: "PCC ICF, со-автор, тренер" },
              { initials: "ОВ", name: "Ольга Вильковская", role: "PCC ICF, супервизор" },
              { initials: "ЕЗ", name: "Елена Зарудаева", role: "PCC ICF, ментор" },
              { initials: "ОБ", name: "Ольга Буданова", role: "PCC ICF, супервизор" },
              { initials: "ЕС", name: "Екатерина Снеткова", role: "ICF Level 1, куратор" },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white border border-black/[0.05] rounded-[1.5rem] overflow-hidden shadow-sm hover:border-blue-200 hover:shadow-md hover:shadow-blue-100/50 transition-all duration-300"
              >
                <div className="aspect-square relative bg-slate-100">
                  <div
                    className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-white"
                    style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
                  >
                    {member.initials}
                  </div>
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-medium text-slate-900">{member.name}</p>
                  <p className="text-[11px] text-slate-400 font-light mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}

            {/* Quote card — spans 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-2 rounded-[1.5rem] overflow-hidden bg-white border border-black/[0.04] shadow-[0_0_60px_-15px_rgba(148,163,184,0.4),0_4px_20px_-5px_rgba(0,0,0,0.04)]"
            >
              <div className="p-8 flex flex-col justify-center h-full text-center">
                <p className="text-xl md:text-2xl text-slate-700 font-light leading-relaxed italic mb-4">
                  &ldquo;Просто идеально. Ни одного сбоя. Выстроенный процесс. Всё чётко и ясно. Атмосфера взрослых, принимающих людей.&rdquo;
                </p>
                <p className="text-xs text-slate-400 font-light">— Яромила Юланова, выпускница Level 1</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 13. ФОРМАТ ──────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2rem] overflow-hidden bg-white border border-black/[0.04] shadow-[0_0_60px_-15px_rgba(147,197,253,0.4),0_4px_20px_-5px_rgba(0,0,0,0.04)]">
            <div className="grid md:grid-cols-2 gap-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 md:p-12 flex flex-col justify-center"
              >
                <div
                  className="text-[20px] uppercase tracking-[0.2em] text-transparent bg-clip-text font-semibold mb-4"
                  style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
                >
                  [ Формат ]
                </div>
                <h2 className="text-2xl md:text-3xl font-light tracking-tight text-slate-900 mb-8">
                  Как устроена программа
                </h2>

                <ul className="space-y-5 mb-8">
                  {[
                    "Онлайн, Zoom — из любой точки мира",
                    "3 месяца интенсивной практики",
                    "10 суббот — живые тренинги",
                    "Нагрузка ~10 часов в неделю",
                    "Служба заботы о студентах",
                    "Демо-сессии с Алексеем Якубаном",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 100%)" }} />
                      <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02] w-fit shadow-lg shadow-blue-500/20"
                  style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
                >
                  <span>Записаться</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative min-h-[300px] md:min-h-0"
              >
                <Image src="/images/format-level1.jpeg" alt="Формат обучения" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 14. ПОДДЕРЖКА ───────────────────────────────────────────────────── */}
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
              [ Поддержка ]
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900">
              Поддержка, которая не заканчивается с программой
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Клуб выпускников",
                points: ["Закрытое сообщество после выпуска", "Обмен клиентами и рекомендации", "Совместные проекты"],
                iconType: "community",
              },
              {
                title: "Мастермайнды по продажам",
                points: ["Ежемесячные встречи после выпуска", "Разбор реальных кейсов и сделок", "Поддержка выхода на доход"],
                iconType: "chart",
              },
              {
                title: "Служба заботы",
                points: ["Куратор на весь период обучения", "Ответы на вопросы 24ч", "Помощь с организацией"],
                iconType: "heart",
              },
              {
                title: "Путь на Level 2",
                points: ["Прямой путь на PCC", "Программа «Путь Алхимика»", "Сертификация ACC ICF"],
                iconType: "rocket",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white border border-black/[0.05] rounded-[1.5rem] p-6 shadow-[0_0_60px_-15px_rgba(147,197,253,0.4),0_4px_20px_-5px_rgba(0,0,0,0.04)] hover:border-blue-200 transition-all duration-300 text-center"
              >
                {/* Animated icon */}
                <div className="flex justify-center mb-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-all duration-500" style={{ background: 'linear-gradient(135deg, rgba(147,197,253,0.3) 0%, rgba(59,130,246,0.15) 100%)' }}>
                    <svg viewBox="0 0 24 24" className="w-7 h-7 draw-icon text-blue-500 group-hover:text-blue-600 transition-colors duration-500">
                      {card.iconType === "community" && (
                        <>
                          <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                          <circle cx="17" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                          <path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                          <path d="M17 11a3 3 0 0 1 3 3v2" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                        </>
                      )}
                      {card.iconType === "chart" && (
                        <>
                          <path d="M3 20L8 14L12 17L21 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M17 8H21V12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          <line x1="3" y1="22" x2="21" y2="22" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                        </>
                      )}
                      {card.iconType === "heart" && (
                        <path d="M12 21C12 21 3 13.5 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.91 3.81 12 5C12.09 3.81 13.76 3 15.5 3C18.58 3 21 5.42 21 8.5C21 13.5 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      )}
                      {card.iconType === "rocket" && (
                        <>
                          <path d="M12 2C12 2 8 6 8 12C8 15 9.5 17.5 12 20C14.5 17.5 16 15 16 12C16 6 12 2 12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
                          <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                          <path d="M5 18L8 15M19 18L16 15" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                        </>
                      )}
                    </svg>
                  </div>
                </div>

                <p className="text-sm font-semibold text-slate-900 mb-4">{card.title}</p>
                <ul className="space-y-2">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-left">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 100%)" }} />
                      <span className="text-xs text-slate-500 font-light leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 15. ОТБОР ───────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="rounded-[2rem] p-10 md:p-14 border border-white/10 shadow-2xl shadow-indigo-900/10 text-center"
              style={{
                background:
                  "radial-gradient(ellipse at 20% 50%, #93c5fd 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #60a5fa 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #818cf8 0%, transparent 45%), linear-gradient(135deg, #1e40af 0%, #2563eb 30%, #3b82f6 50%, #1d4ed8 70%, #1e3a8a 100%)",
              }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-white mb-6 leading-snug">
                Мы берём не всех
              </h2>
              <p className="text-sm text-white/80 font-light leading-relaxed max-w-xl mx-auto mb-8">
                Каждый участник проходит короткое собеседование. Мы отбираем тех, кто готов вкладываться и расти — чтобы уровень группы оставался высоким.
              </p>
              <button
                type="button"
                className="group relative overflow-hidden rounded-full bg-white text-slate-900 px-10 py-4 text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300 hover:bg-white/90 inline-flex items-center gap-4 shadow-lg shadow-black/20 hover:shadow-xl hover:scale-[1.02]"
              >
                <span>Записаться на собеседование</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 16. FAQ ─────────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
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

          <div className="space-y-4">
            {[
              {
                q: "Нужен ли опыт в коучинге для поступления?",
                a: "Нет. Программа подходит как для тех, кто только начинает, так и для практиков смежных профессий. Главное — готовность учиться и практиковать.",
              },
              {
                q: "Когда можно начать зарабатывать?",
                a: "Первые платные сессии студенты проводят уже в первый месяц обучения. Мы даём инструменты продаж и скрипты с первого модуля.",
              },
              {
                q: "Что включает сертификат Level 1?",
                a: "Сертификат ICF Level 1 (ACC Level) подтверждает прохождение аккредитованной программы объёмом 60+ часов. Он засчитывается для официальной сертификации ICF ACC.",
              },
              {
                q: "Возможна ли рассрочка?",
                a: "Да, мы предлагаем гибкие варианты оплаты. Детали обсуждаются на собеседовании.",
              },
              {
                q: "Что происходит после окончания программы?",
                a: "Выпускники получают доступ в клуб, продолжают участвовать в мастермайндах и получают поддержку при прохождении официальной сертификации ICF.",
              },
            ].map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`bg-white border rounded-[1.5rem] p-6 cursor-pointer transition-all duration-500 ${isOpen ? "border-blue-200 shadow-xl shadow-blue-100/30" : "border-black/[0.05] hover:border-blue-100 shadow-sm"}`}
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-medium text-sm text-slate-900">{item.q}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-500" : ""}`}
                    />
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-sm text-slate-500 leading-relaxed font-light">{item.a}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 17. КОНТАКТ ─────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="rounded-[2rem] p-10 md:p-14 text-center border border-white/10 shadow-2xl shadow-indigo-900/10"
              style={{ background: 'radial-gradient(ellipse at 20% 50%, #dbeafe 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #bfdbfe 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #e0f2fe 0%, transparent 45%), linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 30%, #f0f9ff 50%, #dbeafe 70%, #f0f9ff 100%)', border: '1px solid rgba(147,197,253,0.3)' }}
            >
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900 mb-4">
                Остались вопросы?
              </h2>
              <p className="text-3xl md:text-4xl text-slate-900 font-light mb-10 tracking-tight">
                Пишите, мы на связи!
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-lg shadow-blue-500/20"
                  style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
                >
                  <span>AI Assistant</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#"
                  className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-lg shadow-blue-500/20"
                  style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Telegram</span>
                </a>

                <a
                  href="#"
                  className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-lg shadow-blue-500/20"
                  style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="relative z-10 pt-0 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#fafafa]">
        <div
          className="max-w-7xl mx-auto h-px mb-16"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(147,197,253,0.6) 30%, rgba(99,102,241,0.5) 70%, transparent 100%)",
          }}
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
              {/* Company Info */}
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

              {/* Legal */}
              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-slate-900 mb-6">
                  Правовая информация
                </h3>
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

              {/* Contacts */}
              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-slate-900 mb-6">Контакты</h3>
                <div className="space-y-4">
                  <div className="text-xs text-slate-500 font-light">
                    <a href="mailto:info@iakuban.com" className="hover:text-slate-900 transition-colors">
                      info@iakuban.com
                    </a>
                  </div>
                  <div className="flex gap-3">
                    {/* Telegram */}
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group"
                      style={{ background: "rgba(219,234,254,0.25)", border: "1px solid rgba(147,197,253,0.2)" }}
                      aria-label="Telegram"
                      rel="noopener noreferrer"
                      target="_blank"
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
                    {/* Instagram */}
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group"
                      style={{ background: "rgba(219,234,254,0.25)", border: "1px solid rgba(147,197,253,0.2)" }}
                      aria-label="Instagram"
                      rel="noopener noreferrer"
                      target="_blank"
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
                    {/* LinkedIn */}
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group"
                      style={{ background: "rgba(219,234,254,0.25)", border: "1px solid rgba(147,197,253,0.2)" }}
                      aria-label="LinkedIn"
                      rel="noopener noreferrer"
                      target="_blank"
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
              <button
                type="button"
                className="font-medium text-slate-900 hover:text-indigo-600 transition-colors"
              >
                RU
              </button>
              <span className="text-slate-300">/</span>
              <button
                type="button"
                className="text-slate-400 hover:text-indigo-600 transition-colors"
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
