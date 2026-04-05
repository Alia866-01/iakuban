"use client";

import { ArrowRight, Globe } from "lucide-react";
import { motion } from "motion/react";
import { GlassFilter, GlassEffect } from "@/components/ui/liquid-glass";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-600 font-sans selection:bg-indigo-500/20 selection:text-indigo-900 relative overflow-hidden">
      <GlassFilter />

      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAwLCAwLCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" style={{ maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' }}></div>
      </div>

      {/* Navbar */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-7xl">
          <GlassEffect className="rounded-full px-8 py-3 w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <a href="/">
                  <span className="text-sm font-bold tracking-widest uppercase text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)' }}>Iakuban</span>
                </a>
              </div>
              <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-slate-600">
                <a href="#specialist" className="hover:text-slate-900 transition-colors">Найти специалиста</a>
                <a href="/about" className="hover:text-slate-900 transition-colors">О нас</a>
                <a href="/academy" className="hover:text-slate-900 transition-colors">Академия</a>
                <a href="/academy#free" className="hover:text-slate-900 transition-colors">Учиться бесплатно</a>
                <a href="#login" className="hover:text-slate-900 transition-colors">Войти</a>
              </div>
              <button className="text-white border border-white/20 px-6 py-2.5 rounded-full text-[13px] font-semibold hover:opacity-90 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)' }}>
                Начать
              </button>
            </div>
          </GlassEffect>
        </div>
      </div>

      {/* Hero — Placeholder */}
      <section className="relative z-10 pt-40 pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-white border border-black/[0.05] shadow-sm mb-8">
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)' }}>
                Iakuban Coaching Academy
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-[1.1] mb-8 tracking-tight text-slate-900 max-w-4xl mx-auto">
              Пространство для коучей и клиентов
            </h1>

            <p className="text-base md:text-lg text-slate-500 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              Здесь скоро появится основной лендинг платформы. Контент в разработке.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/academy" className="group relative overflow-hidden rounded-full px-10 py-5 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] inline-flex items-center gap-4 text-white" style={{ background: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)' }}>
                <span className="text-sm uppercase tracking-[0.15em] font-semibold">Академия</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="/about" className="group rounded-full px-10 py-5 border border-black/[0.08] bg-white text-sm uppercase tracking-[0.15em] font-semibold text-slate-700 hover:border-blue-200 hover:shadow-md transition-all duration-300 inline-flex items-center gap-4">
                <span>О нас</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent"></div>

      {/* Footer */}
      <footer className="relative z-10 pt-24 pb-12 px-6 md:px-12 lg:px-24 bg-[#fafafa]">
        <div
          className="max-w-7xl mx-auto h-px mb-16"
          style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(147,197,253,0.6) 30%, rgba(99,102,241,0.5) 70%, transparent 100%)' }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className="rounded-2xl px-8 py-10 mb-10"
            style={{ background: 'linear-gradient(135deg, rgba(219,234,254,0.35) 0%, rgba(238,242,255,0.25) 50%, rgba(219,234,254,0.2) 100%)', border: '1px solid rgba(147,197,253,0.3)' }}
          >
            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-slate-900 mb-6">Iakuban</h3>
                <div className="space-y-2 text-xs text-slate-500 font-light leading-relaxed">
                  <p className="font-medium text-slate-700">Iakuban Coaching Academy, S.L.</p>
                  <p>Avda Pau Casals, Num 4, Portal A,<br/>08513 Prats de Lluçanès (Barcelona)</p>
                  <p className="pt-2">
                    <a href="mailto:info@iakuban.com" className="hover:text-slate-900 transition-colors">info@iakuban.com</a>
                  </p>
                  <p>
                    <a href="tel:+34641461550" className="hover:text-slate-900 transition-colors">+34 641 461 550</a>
                  </p>
                  <p>NIF B22895676</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-slate-900 mb-6">Правовая информация</h3>
                <ul className="space-y-3 text-xs text-slate-500 font-light">
                  <li><a href="#" className="hover:text-slate-900 transition-colors">Политика конфиденциальности</a></li>
                  <li><a href="#" className="hover:text-slate-900 transition-colors">Условия использования платформы</a></li>
                  <li><a href="#" className="hover:text-slate-900 transition-colors">Правовая информация (Aviso Legal)</a></li>
                  <li><a href="#" className="hover:text-slate-900 transition-colors">Договор оферты на предоставление услуг платформы</a></li>
                  <li><a href="#" className="hover:text-slate-900 transition-colors">Кодекс поведения для коучей</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-slate-900 mb-6">Контакты</h3>
                <div className="space-y-4">
                  <div className="text-xs text-slate-500 font-light">
                    <a href="mailto:info@iakuban.com" className="hover:text-slate-900 transition-colors">info@iakuban.com</a>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group" style={{ background: 'rgba(219,234,254,0.25)', border: '1px solid rgba(147,197,253,0.2)' }} aria-label="Telegram">
                      <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group" style={{ background: 'rgba(219,234,254,0.25)', border: '1px solid rgba(147,197,253,0.2)' }} aria-label="Instagram">
                      <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group" style={{ background: 'rgba(219,234,254,0.25)', border: '1px solid rgba(147,197,253,0.2)' }} aria-label="LinkedIn">
                      <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
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
