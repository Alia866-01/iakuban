"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronRight, ChevronDown, Sparkles, Globe } from "lucide-react";
import { motion } from "motion/react";
import { AwardBadge } from "@/components/ui/award-badge";
import { GlassFilter, GlassEffect } from "@/components/ui/liquid-glass";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function ProfessionCoach() {
  const [openDay, setOpenDay] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-600 font-sans selection:bg-indigo-500/20 selection:text-indigo-900 relative overflow-hidden">
      <GlassFilter />

      {/* Complex Multi-level Gradient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Subtle Grid */}
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
                className="text-white border border-white/20 px-6 py-2.5 rounded-full text-[13px] font-semibold hover:opacity-90 transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
              >
                Начать
              </button>
            </div>
          </GlassEffect>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 pt-10 lg:pt-0 relative"
          >
            {/* Decorative elements */}
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
                Программа CCE ICF «Профессия коуч»
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-light leading-[1.1] mb-8 tracking-tight text-slate-900">
              Освойте базовые техники коучинга ICF <span className="typing-effect">за 3 дня</span>
            </h1>

            <p className="text-sm md:text-base text-slate-500 mb-12 font-light leading-relaxed max-w-md">
              Практические инструменты. Отработки в тройках. Сертификат CCE ICF.
            </p>

            <div className="flex flex-col items-start gap-8">
              <button
                className="relative group overflow-hidden rounded-full px-10 py-5 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
              >
                <div className="relative flex items-center gap-4">
                  <span className="text-sm uppercase tracking-[0.15em] font-semibold text-white">
                    Записаться на программу
                  </span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>

              <div className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity">
                <AwardBadge type="product-of-the-month" place={1} />
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-slate-400">Оценка</span>
                  <span className="text-xs font-medium text-slate-800">ICF CCE</span>
                </div>
              </div>
            </div>

            <p className="mt-8 text-[11px] text-slate-400 font-light tracking-wide">
              Старт потока: 17 июня 2026 16:00 МСК
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative h-[500px] md:h-[600px] w-full rounded-[2rem] overflow-hidden bg-white border border-black/[0.04] p-2 shadow-[0_0_60px_-15px_rgba(147,197,253,0.4),0_4px_20px_-5px_rgba(0,0,0,0.04)]"
          >
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
              <Image src="/images/hero-profession.png" alt="Онлайн обучение коучингу" fill className="object-cover" />

              {/* Decorative UI elements on image */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="bg-white/80 backdrop-blur-md border border-black/[0.05] rounded-2xl p-4 flex items-center gap-4 shadow-lg">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center border border-indigo-100">
                    <Sparkles className="w-4 h-4 text-indigo-500" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Формат</div>
                    <div className="text-xs font-medium text-slate-900">Онлайн практика</div>
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

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* Для кого */}
      <section id="for-whom" className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <div
                className="text-[20px] uppercase tracking-[0.2em] text-transparent bg-clip-text font-semibold mb-6"
                style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
              >
                [ 01 — Аудитория ]
              </div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900">Для кого эти уроки</h2>
            </div>
            <p className="text-sm text-slate-500 font-light max-w-xs leading-relaxed">
              Программа адаптирована для специалистов разного профиля, стремящихся к росту.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                id: "01",
                title: "Психолог или практик",
                desc: "Расширить инструменты и быстрее переводить клиентов в результат",
                img: "/images/psychologist.jpeg",
              },
              {
                id: "02",
                title: "Предприниматель",
                desc: "Строить сильную команду и выйти на новый масштаб",
                img: "/images/entrepreneur.jpeg",
              },
              {
                id: "03",
                title: "HR или эксперт",
                desc: "Добавить коучинговые техники в свою работу",
                img: "/images/hr-expert.jpeg",
              },
              {
                id: "04",
                title: "Новая профессия",
                desc: "Зарабатывать, профессионально помогая людям",
                img: "/images/new-profession.jpeg",
              },
            ].map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white border border-black/[0.05] rounded-[1.5rem] p-4 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
              >
                <div className="relative h-64 rounded-xl overflow-hidden mb-6 bg-slate-100">
                  <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80"></div>
                  <div className="absolute bottom-4 left-4 text-[10px] tracking-[0.2em] text-white/80 font-medium">
                    {item.id}
                  </div>
                </div>
                <div className="px-2 pb-2">
                  <h3 className="font-medium text-sm mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* Что вы получите */}
      <section id="benefits" className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div
              className="text-[20px] uppercase tracking-[0.2em] text-transparent bg-clip-text font-semibold mb-6"
              style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
            >
              [ 02 — Содержание ]
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-12 tracking-tight text-slate-900">
              Не лекции. <br />
              <span className="text-slate-400">Практика с первого дня.</span>
            </h2>
            <ul className="space-y-4 max-w-md">
              {[
                "Узнаете, как работает коуч по стандартам ICF и почему он не советует, не лечит и не мотивирует.",
                "Освоите техники, которые продвигают клиента.",
                "Проведёте 3 мини-сессии в тройках и получите обратную связь.",
                "Получите международный сертификат CCE ICF. Часы засчитываются для сертификации ACC/PCC.",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex gap-5 items-start group bg-white rounded-2xl px-5 py-3.5 border border-black/[0.05] shadow-sm hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-md hover:shadow-blue-100/50 transition-all duration-300 cursor-default"
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold text-transparent bg-clip-text group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
                  >
                    0{i + 1}
                  </div>
                  <span className="text-sm text-slate-600 leading-relaxed font-light group-hover:text-slate-900 transition-colors duration-300">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div
              className="relative rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-indigo-900/10 overflow-hidden h-full flex flex-col justify-center border border-white/10"
              style={{
                background:
                  "radial-gradient(ellipse at 20% 50%, #93c5fd 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #60a5fa 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #818cf8 0%, transparent 45%), linear-gradient(135deg, #1e40af 0%, #2563eb 30%, #3b82f6 50%, #1d4ed8 70%, #1e3a8a 100%)",
              }}
            >
              <h3 className="text-2xl md:text-3xl font-light mb-4 z-10 tracking-tight leading-tight text-white">
                Начните свой <br />
                путь в коучинге
              </h3>

              <div className="flex items-center gap-3 mb-6 z-10 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2.5 w-fit border border-white/20">
                <div className="flex -space-x-2">
                  <Avatar className="size-8 ring-2 ring-white/30">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
                      alt="User"
                    />
                    <AvatarFallback>АК</AvatarFallback>
                  </Avatar>
                  <Avatar className="size-8 ring-2 ring-white/30">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                      alt="User"
                    />
                    <AvatarFallback>МИ</AvatarFallback>
                  </Avatar>
                  <Avatar className="size-8 ring-2 ring-white/30">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
                      alt="User"
                    />
                    <AvatarFallback>ЕС</AvatarFallback>
                  </Avatar>
                  <Avatar className="size-8 ring-2 ring-white/30">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
                      alt="User"
                    />
                    <AvatarFallback>ДВ</AvatarFallback>
                  </Avatar>
                </div>
                <span className="text-xs text-white font-medium">700+ выпускников</span>
              </div>

              <p className="text-sm text-white mb-8 max-w-sm z-10 leading-relaxed font-light">
                Получите доступ к программе прямо сейчас и сделайте первый шаг к новой востребованной профессии.
              </p>

              <button className="group relative overflow-hidden rounded-full bg-white text-slate-900 px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold w-fit transition-all duration-300 hover:bg-white/90 z-10 flex items-center gap-4 shadow-lg shadow-black/20">
                <span>Получить доступ</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* Программа */}
      <section id="program" className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <div
              className="text-[20px] uppercase tracking-[0.2em] text-transparent bg-clip-text font-semibold mb-6"
              style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
            >
              [ 03 — Программа ]
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900">
              3 дня. От понимания к действию.
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left — 3 days */}
            <div className="space-y-4">
              {[
                {
                  day: "День 1",
                  title: "Основы коучинга",
                  content:
                    "Что такое коучинг ICF и чем он отличается от психотерапии, консультирования и наставничества. 5 принципов коучинга. Структура коуч-сессии по ICF. Демонстрационная сессия. Практика в тройках.",
                },
                {
                  day: "День 2",
                  title: "Его величество контракт",
                  content:
                    "Как заключать сильный контракт на сессию. Пирамида энергетических уровней Якубана. Демонстрационная сессия. Практика в тройках.",
                },
                {
                  day: "День 3",
                  title: "Пространство вариантов",
                  content:
                    "Ценности. Миссия как ценности в действии. Техника «Мой лучший год». Практика в тройках. Стратегическая встреча с коучем Iakuban Coaching Academy.",
                },
              ].map((item, i) => {
                const isOpen = openDay === i;
                return (
                  <motion.div
                    key={item.day}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`bg-white border rounded-[1.5rem] p-6 md:p-8 cursor-pointer transition-all duration-500 ${isOpen ? 'border-blue-200 shadow-xl shadow-blue-100/30' : 'border-black/[0.05] hover:border-blue-100 shadow-sm'}`}
                    onClick={() => setOpenDay(isOpen ? null : i)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div
                          className="text-[10px] uppercase tracking-[0.2em] font-semibold text-transparent bg-clip-text shrink-0"
                          style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
                        >
                          {item.day}
                        </div>
                        <h3 className="font-medium text-base text-slate-900">{item.title}</h3>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : ''}`} />
                    </div>
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 pt-5">
                        {item.content.split(". ").filter(Boolean).map((sentence, j) => (
                          <li key={j} className="flex items-start gap-2.5">
                            <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 100%)' }} />
                            <span className="text-slate-500 text-sm leading-relaxed font-light">{sentence.replace(/\.$/, "")}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                );
              })}

            </div>

            {/* Right — Result (35%) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className=""
            >
              <div
                className="rounded-[1.5rem] p-8 md:p-10 h-full flex flex-col justify-center border border-white/10 shadow-2xl shadow-indigo-900/10"
                style={{ background: 'radial-gradient(ellipse at 20% 50%, #93c5fd 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #60a5fa 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #818cf8 0%, transparent 45%), linear-gradient(135deg, #1e40af 0%, #2563eb 30%, #3b82f6 50%, #1d4ed8 70%, #1e3a8a 100%)' }}
              >
                <div className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-6">
                  Результат
                </div>

                <ul className="space-y-5 mb-8">
                  {[
                    "Владение коучингом ICF на начальном уровне",
                    "Сертификат CCE ICF",
                    "Карта вашего профессионального пути",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-white shrink-0 mt-1.5" />
                      <span className="text-sm text-white font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10 mb-6" />

                <p className="text-xs text-white font-light leading-relaxed italic">
                  Это вводная программа. Для профессиональной практики и сертификации ICF следующий шаг — программа Level 1.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* Отзывы */}
      <section id="reviews" className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <div
              className="text-[20px] uppercase tracking-[0.2em] text-transparent bg-clip-text font-semibold mb-6"
              style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
            >
              [ 04 — Отзывы ]
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900">
              Отзывы участников «Профессия коуч»
            </h2>
          </motion.div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>div]:mb-4">
            {[1, 4, 6, 2, 5, 7, 3].map((num, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="break-inside-avoid"
              >
                <Card className="overflow-hidden hover:shadow-md hover:border-blue-200 transition-all duration-300">
                  <CardContent className="p-0">
                    <img src={`/images/review-${num}.png`} alt={`Отзыв ${num}`} className="w-full h-auto" loading="lazy" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* Кто ведёт */}
      <section id="author" className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
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
              [ 05 — Ведущий ]
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-12 tracking-tight text-slate-900">Алексей Якубан</h2>

            <div className="space-y-8">
              {[
                "Коуч PCC ICF. 2200 часов практики.",
                "Основатель Iakuban Coaching Academy (3 программы аккредитованы ICF) и ментор-программы Алхимия.",
                "700+ выпускников, среди которых психологи с опытом от 5 до 15 лет.",
                "Лично ведёт все 3 дня тренинга.",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="text-xs font-mono text-slate-400 mt-0.5">0{i + 1}</div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light group-hover:text-slate-900 transition-colors">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-black/[0.05]">
              <div className="text-[10px] uppercase tracking-widest text-slate-400">Основатель академии</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 py-24 px-6 md:px-12 lg:px-24">
        <div
          className="max-w-7xl mx-auto rounded-[2rem] py-16 px-8 md:px-12"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, #93c5fd 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #60a5fa 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #818cf8 0%, transparent 45%), linear-gradient(135deg, #1e40af 0%, #2563eb 30%, #3b82f6 50%, #1d4ed8 70%, #1e3a8a 100%)",
          }}
        >
          <div className="grid md:grid-cols-3 gap-16 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            {[
              { val: "1000+", label: "участников «Профессия коуч»", sub: "Iakuban Academy" },
              { val: "100+", label: "стали коучами Level 1", sub: "Выпускники" },
              { val: "20+", label: "стали коучами Level 2", sub: "Выпускники" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="pt-8 md:pt-0 px-4 flex flex-col items-center justify-center"
              >
                <div className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">{stat.val}</div>
                <div className="text-white text-xs tracking-wide uppercase leading-relaxed max-w-[180px] mb-2">
                  {stat.label}
                </div>
                <div className="text-[9px] tracking-[0.2em] text-white uppercase">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* Формат */}
      <section id="format" className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-[2rem] overflow-hidden bg-white border border-black/[0.04] shadow-[0_0_60px_-15px_rgba(147,197,253,0.4),0_4px_20px_-5px_rgba(0,0,0,0.04)]"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left — text */}
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
                    "3 живых встречи с практикой",
                    "Отработки в тройках с обратной связью",
                    "Сертификат CCE ICF по итогам",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ background: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 100%)' }} />
                      <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02] w-fit shadow-lg shadow-blue-500/20" style={{ background: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)' }}>
                  <span>Записаться</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              {/* Right — image placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative min-h-[300px] md:min-h-0"
              >
                <Image src="/images/format-zoom.jpeg" alt="Онлайн обучение в Zoom" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA & Footer */}
      <footer className="relative z-10 pt-32 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden mt-10 bg-[#fafafa]">
        {/* CTA section */}
        <div
          className="relative rounded-3xl mb-32 overflow-hidden"
          style={{
            background: [
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(147,197,253,0.35) 0%, transparent 70%)",
              "radial-gradient(ellipse 60% 50% at 20% 100%, rgba(99,102,241,0.2) 0%, transparent 65%)",
              "radial-gradient(ellipse 50% 40% at 80% 90%, rgba(59,130,246,0.18) 0%, transparent 60%)",
              "linear-gradient(180deg, rgba(219,234,254,0.4) 0%, rgba(250,250,250,0) 100%)",
            ].join(", "),
          }}
        >
          {/* Faint top edge highlight */}
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(147,197,253,0.35) 50%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          <div className="max-w-4xl mx-auto text-center py-24 px-6 relative z-10">
            <div
              className="text-[20px] uppercase tracking-[0.2em] text-transparent bg-clip-text font-semibold mb-8"
              style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
            >
              [ Записаться ]
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl font-light mb-6 tracking-tight leading-tight text-slate-900"
            >
              Начните свой путь в коучинг прямо сейчас
            </motion.h2>
            <p className="text-sm text-slate-500 font-light mb-12 max-w-2xl mx-auto leading-relaxed whitespace-nowrap">
              Откройте для себя профессию, которая соединяет призвание и доход
            </p>
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-full px-12 py-6 text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] inline-flex items-center gap-4 text-white"
              style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
            >
              <span className="relative z-10">Записаться на программу</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>

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
                    >
                      <svg
                        className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors"
                        viewBox="0 0 24 24"
                        fill="currentColor"
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
                    >
                      <svg
                        className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors"
                        viewBox="0 0 24 24"
                        fill="currentColor"
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
                    >
                      <svg
                        className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors"
                        viewBox="0 0 24 24"
                        fill="currentColor"
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
              <button className="font-medium text-slate-900 hover:text-indigo-600 transition-colors">RU</button>
              <span className="text-slate-300">/</span>
              <button className="text-slate-400 hover:text-indigo-600 transition-colors">EN</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
