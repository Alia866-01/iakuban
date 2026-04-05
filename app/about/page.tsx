"use client";

import Image from "next/image";
import { ArrowRight, Globe } from "lucide-react";
import { motion } from "motion/react";
import { GlassFilter, GlassEffect } from "@/components/ui/liquid-glass";

function AnimatedIcon({ type, className }: { type: string; className?: string }) {
  const strokeProps = {
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    fill: "none",
  };

  return (
    <svg viewBox="0 0 24 24" className={`draw-icon ${className}`}>
      {type === "love" && (
        <path d="M12 21C12 21 3 13.5 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.91 3.81 12 5C12.09 3.81 13.76 3 15.5 3C18.58 3 21 5.42 21 8.5C21 13.5 12 21 12 21Z" {...strokeProps} />
      )}
      {type === "depth" && (
        <>
          <circle cx="12" cy="12" r="9" {...strokeProps} />
          <circle cx="12" cy="12" r="5.5" {...strokeProps} />
          <circle cx="12" cy="12" r="2" {...strokeProps} />
        </>
      )}
      {type === "magic" && (
        <>
          <path d="M12 2L13.5 8.5L20 7L14.5 11L18 17L12 13.5L6 17L9.5 11L4 7L10.5 8.5L12 2Z" {...strokeProps} />
          <path d="M2 12H4M20 12H22M12 20V22" {...strokeProps} strokeWidth={1} />
        </>
      )}
      {type === "money" && (
        <>
          <path d="M2 17L7 12L11 15L17 8L22 4" {...strokeProps} />
          <path d="M17 4H22V9" {...strokeProps} />
          <path d="M2 20H22" {...strokeProps} strokeWidth={1} />
        </>
      )}
    </svg>
  );
}

const values = [
  {
    id: "01",
    title: "Любовь",
    desc: "Всё, что мы делаем, направлено на одно: помочь человеку реализовать свою миссию и прожить жизнь, о которой он мечтает. Это наше призвание.",
    iconType: "love",
    bg: "radial-gradient(ellipse at 20% 50%, #fda4af 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #fb7185 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #f472b6 0%, transparent 45%), linear-gradient(135deg, #be123c 0%, #e11d48 30%, #f43f5e 50%, #e11d48 70%, #9f1239 100%)",
    border: "rgba(244,63,94,0.5)",
    iconBg: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)",
    iconColor: "text-white",
    hoverBorder: "hover:border-rose-400",
    hoverShadow: "hover:shadow-rose-300/50",
  },
  {
    id: "02",
    title: "Глубина",
    desc: "Настоящие ответы живут на уровнях, о которых человек мог даже не задумываться. Именно там находится то, что создает изменения. Это наш инструмент.",
    iconType: "depth",
    bg: "radial-gradient(ellipse at 20% 50%, #a5b4fc 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #818cf8 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #a78bfa 0%, transparent 45%), linear-gradient(135deg, #4338ca 0%, #4f46e5 30%, #6366f1 50%, #4f46e5 70%, #3730a3 100%)",
    border: "rgba(99,102,241,0.5)",
    iconBg: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)",
    iconColor: "text-white",
    hoverBorder: "hover:border-indigo-400",
    hoverShadow: "hover:shadow-indigo-300/50",
  },
  {
    id: "03",
    title: "Магия",
    desc: "Когда душа говорит с душой, случается что-то, что невозможно запланировать. Вдохновляющее и клиента, и коуча. Это наша Магия коучинга.",
    iconType: "magic",
    bg: "radial-gradient(ellipse at 20% 50%, #c4b5fd 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #a78bfa 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #d8b4fe 0%, transparent 45%), linear-gradient(135deg, #6d28d9 0%, #7c3aed 30%, #8b5cf6 50%, #7c3aed 70%, #5b21b6 100%)",
    border: "rgba(139,92,246,0.5)",
    iconBg: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)",
    iconColor: "text-white",
    hoverBorder: "hover:border-violet-400",
    hoverShadow: "hover:shadow-violet-300/50",
  },
  {
    id: "04",
    title: "Деньги",
    desc: "Мы верим, что реализованная миссия должна хорошо оплачиваться. Когда человек живёт в полную силу, мир платит ему соответственно. Это наша награда.",
    iconType: "money",
    bg: "radial-gradient(ellipse at 20% 50%, #6ee7b7 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #34d399 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #a7f3d0 0%, transparent 45%), linear-gradient(135deg, #047857 0%, #059669 30%, #10b981 50%, #059669 70%, #065f46 100%)",
    border: "rgba(16,185,129,0.5)",
    iconBg: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)",
    iconColor: "text-white",
    hoverBorder: "hover:border-emerald-400",
    hoverShadow: "hover:shadow-emerald-300/50",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-600 font-sans selection:bg-indigo-500/20 selection:text-indigo-900 relative overflow-hidden">
      <GlassFilter />

      {/* Navbar */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-7xl">
          <GlassEffect className="rounded-full px-8 py-3 w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold tracking-widest uppercase text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)' }}>Iakuban</span>
              </div>
              <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-slate-600">
                <a href="#specialist" className="hover:text-slate-900 transition-colors">Найти специалиста</a>
                <a href="/about" className="hover:text-slate-900 transition-colors">О нас</a>
                <a href="/academy" className="hover:text-slate-900 transition-colors">Академия</a>
                <a href="/academy#free" className="hover:text-slate-900 transition-colors">Учиться бесплатно</a>
                <a href="#login" className="hover:text-slate-900 transition-colors">Войти</a>
              </div>
              <button className="text-white border border-white/20 px-6 py-2.5 rounded-full text-[13px] font-semibold hover:opacity-90 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)' }} type="button">
                Начать
              </button>
            </div>
          </GlassEffect>
        </div>
      </div>

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

      {/* ─── Hero Quote ─────────────────────────────────────────────────────── */}
      <section className="relative z-10 pt-40 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="relative rounded-[2rem] p-10 md:p-16 overflow-hidden border border-white/10 shadow-2xl shadow-indigo-900/10 text-center"
              style={{
                background: 'radial-gradient(ellipse at 20% 50%, #93c5fd 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #60a5fa 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #818cf8 0%, transparent 45%), linear-gradient(135deg, #1e40af 0%, #2563eb 30%, #3b82f6 50%, #1d4ed8 70%, #1e3a8a 100%)',
              }}
            >
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light italic leading-[1.3] tracking-tight text-white mb-8 max-w-3xl mx-auto">
                «Коучи не решают проблемы; они поддерживают людей, которые готовы
                стать хозяевами своей жизни.»
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-white/30 to-white/60" />
                <cite className="not-italic text-sm text-white/70 font-light">
                  Томас Леонард (Thomas J. Leonard), основатель ICF
                </cite>
                <div className="w-8 h-px bg-gradient-to-r from-white/60 to-white/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── Section 01: Миссия ─────────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div
              className="text-[20px] uppercase tracking-[0.2em] text-transparent bg-clip-text font-semibold mb-6"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)",
              }}
            >
              [ Наша миссия ]
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent mb-10" />

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-[1.2] max-w-3xl mx-auto mb-10">
              Через любовь делать людей<br />смелыми и открытыми к большим деньгам.
            </h2>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent mb-12" />

            <div className="space-y-5 max-w-3xl mx-auto">
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Iakuban Coaching Academy — пространство, где сертифицированные
                коучи ICF встречаются с людьми, готовыми к своему масштабу.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Трансформация перестает быть просто словом и становится опытом.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── Section 02: Ценности ───────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 text-center"
          >
            <div
              className="text-[20px] uppercase tracking-[0.2em] text-transparent bg-clip-text font-semibold mb-6"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)",
              }}
            >
              [ Наши ценности ]
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {values.map((item, i) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group rounded-2xl px-5 py-6 shadow-sm ${item.hoverBorder} hover:shadow-md ${item.hoverShadow} transition-all duration-300 cursor-default text-center`}
                  style={{ background: item.bg, border: `1px solid ${item.border}` }}
                >
                  <div className="flex flex-col items-center">
                    <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-110 transition-all duration-500 mb-4" style={{ background: item.iconBg }}>
                      <div className="absolute inset-[1px] rounded-[14px] bg-white/15 transition-colors duration-500" />
                      <AnimatedIcon type={item.iconType} className={`w-6 h-6 relative z-10 transition-all duration-500 ${item.iconColor}`} />
                    </div>
                    <h3 className="font-semibold text-lg text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── Section 03: Для кого ───────────────────────────────────────────── */}
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
              [ Для кого мы ]
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-[1.2] mb-6 max-w-3xl mx-auto">
              Профессионализм коуча и ответственность клиента создают невероятные результаты.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >

            <div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    label: "Коучи",
                    text: "Реализуют свою миссию и масштабируют практику внутри профессионального сообщества ICF.",
                    avatars: [
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
                      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
                    ],
                  },
                  {
                    label: "Клиенты",
                    text: "Получают доступ к специалистам международного уровня, прошедшим личную трансформацию.",
                    avatars: [
                      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
                      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
                    ],
                  },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="group bg-white rounded-2xl px-5 py-5 border border-black/[0.05] shadow-sm hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-md hover:shadow-blue-100/50 transition-all duration-300 cursor-default"
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <div
                        className="text-xs uppercase tracking-[0.2em] font-semibold text-transparent bg-clip-text"
                        style={{
                          backgroundImage:
                            "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)",
                        }}
                      >
                        {card.label}
                      </div>
                      <div className="flex -space-x-3">
                        {card.avatars.map((src, i) => (
                          <img key={i} src={src} alt="User" className="w-14 h-14 rounded-full ring-2 ring-white object-cover" />
                        ))}
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed font-light group-hover:text-slate-900 transition-colors duration-300">
                        {card.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── Section 04: Замысел ────────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div
              className="text-[20px] uppercase tracking-[0.2em] text-transparent bg-clip-text font-semibold mb-6"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)",
              }}
            >
              [ Наш замысел ]
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-[1.2] mb-8 max-w-3xl mx-auto">
              Трансформация, ставшая сутью.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-light max-w-3xl mx-auto mb-12">
              Каждый коуч платформы прошёл глубокую личную трансформацию сам,
              прежде чем стать профессионалом. Коучинговое мышление стало его
              сутью. Именно поэтому наши коучи крайне эффективно помогают
              клиентам создать удивительные достижения.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid sm:grid-cols-3 gap-4"
          >
            {[
              { num: "2 200+", label: "Часов подтверждённой практики" },
              { num: "700+", label: "Выпускников академии" },
              { num: "3", label: "Программы аккредитованы ICF" },
            ].map((stat) => (
              <div
                key={stat.num}
                className="group rounded-2xl px-5 py-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-default text-center"
                style={{ background: 'radial-gradient(ellipse at 20% 50%, #dbeafe 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #bfdbfe 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #e0f2fe 0%, transparent 45%), linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 30%, #f0f9ff 50%, #dbeafe 70%, #f0f9ff 100%)', border: '1px solid rgba(147,197,253,0.3)' }}
              >
                <div className="text-3xl font-light text-slate-900 mb-2">
                  {stat.num}
                </div>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
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
              className="relative rounded-[2rem] p-10 md:p-16 overflow-hidden border border-white/10 shadow-2xl shadow-indigo-900/10"
              style={{
                background:
                  "radial-gradient(ellipse at 20% 50%, #93c5fd 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #60a5fa 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #818cf8 0%, transparent 45%), linear-gradient(135deg, #1e40af 0%, #2563eb 30%, #3b82f6 50%, #1d4ed8 70%, #1e3a8a 100%)",
              }}
            >
              <div className="flex flex-col text-center items-center">
                <p className="text-white/80 text-sm uppercase tracking-[0.2em] font-medium mb-6">
                  Iakuban Coaching Academy
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.2] tracking-tight mb-4 max-w-2xl mx-auto">
                  Вы находитесь в месте, где жизнь разделится на до и после.
                </h2>
                <p className="text-white/70 text-base font-light mb-10">
                  Добро пожаловать в Iakuban Coaching Academy.
                </p>

                <button
                  className="group relative overflow-hidden rounded-full bg-white text-slate-900 px-10 py-4 text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300 hover:bg-white/90 flex items-center gap-4 shadow-lg shadow-black/20 hover:shadow-xl hover:scale-[1.02] mx-auto"
                  type="button"
                >
                  <span>Выбрать коуча</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 pt-0 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#fafafa]">
        {/* Decorative gradient divider above footer columns */}
        <div
          className="max-w-7xl mx-auto h-px mb-16"
          style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(147,197,253,0.6) 30%, rgba(99,102,241,0.5) 70%, transparent 100%)' }}
          aria-hidden="true"
        />

        {/* Footer columns — subtle card background */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className="rounded-2xl px-8 py-10 mb-10"
            style={{ background: 'linear-gradient(135deg, rgba(219,234,254,0.35) 0%, rgba(238,242,255,0.25) 50%, rgba(219,234,254,0.2) 100%)', border: '1px solid rgba(147,197,253,0.3)' }}
          >
            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
              {/* Company Info */}
              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-slate-900 mb-6">Iakuban</h3>
                <div className="space-y-2 text-xs text-slate-500 font-light leading-relaxed">
                  <p className="font-medium text-slate-700">Iakuban Coaching Academy, S.L.</p>
                  <p>Avda Pau Casals, Num 4, Portal A,<br />08513 Prats de Lluçanès (Barcelona)</p>
                  <p className="pt-2">
                    <a href="mailto:info@iakuban.com" className="hover:text-slate-900 transition-colors">info@iakuban.com</a>
                  </p>
                  <p>
                    <a href="tel:+34641461550" className="hover:text-slate-900 transition-colors">+34 641 461 550</a>
                  </p>
                  <p>NIF B22895676</p>
                </div>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-sm font-medium tracking-widets uppercase text-slate-900 mb-6">Правовая информация</h3>
                <ul className="space-y-3 text-xs text-slate-500 font-light">
                  <li><a href="#" className="hover:text-slate-900 transition-colors">Политика конфиденциальности</a></li>
                  <li><a href="#" className="hover:text-slate-900 transition-colors">Условия использования платформы</a></li>
                  <li><a href="#" className="hover:text-slate-900 transition-colors">Правовая информация (Aviso Legal)</a></li>
                  <li><a href="#" className="hover:text-slate-900 transition-colors">Договор оферты на предоставление услуг платформы</a></li>
                  <li><a href="#" className="hover:text-slate-900 transition-colors">Кодекс поведения для коучей</a></li>
                </ul>
              </div>

              {/* Contacts */}
              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-slate-900 mb-6">Контакты</h3>
                <div className="space-y-4">
                  <div className="text-xs text-slate-500 font-light">
                    <a href="mailto:info@iakuban.com" className="hover:text-slate-900 transition-colors">info@iakuban.com</a>
                  </div>
                  <div className="flex gap-3">
                    {/* Telegram */}
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group"
                      style={{ background: 'rgba(219,234,254,0.25)', border: '1px solid rgba(147,197,253,0.2)' }}
                      aria-label="Telegram"
                    >
                      <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
                    </a>
                    {/* Instagram */}
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group"
                      style={{ background: 'rgba(219,234,254,0.25)', border: '1px solid rgba(147,197,253,0.2)' }}
                      aria-label="Instagram"
                    >
                      <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
                    </a>
                    {/* LinkedIn */}
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group"
                      style={{ background: 'rgba(219,234,254,0.25)', border: '1px solid rgba(147,197,253,0.2)' }}
                      aria-label="LinkedIn"
                    >
                      <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-black/[0.05] pt-8 pb-2 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[10px] tracking-[0.15em] uppercase text-slate-400">&copy; 2026 iakuban. Все права защищены.</p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <button className="font-medium text-slate-900 hover:text-indigo-600 transition-colors" type="button">RU</button>
              <span className="text-slate-300">/</span>
              <button className="text-slate-400 hover:text-indigo-600 transition-colors" type="button">EN</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
