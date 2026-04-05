"use client";

import { ArrowRight, Globe, Check } from "lucide-react";
import { motion } from "motion/react";
import { GlassFilter, GlassEffect } from "@/components/ui/liquid-glass";
import { MobileMenuButton } from "@/components/ui/mobile-menu";

export default function WebinarThanks() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-600 font-sans selection:bg-indigo-500/20 selection:text-indigo-900 relative overflow-hidden">
      <GlassFilter />

      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAwLCAwLCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" style={{ maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' }} />
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
                <a href="/about" className="hover:text-slate-900 transition-colors">О нас</a>
                <a href="/academy" className="hover:text-slate-900 transition-colors">Академия</a>
              </div>
              <a href="/webinar" className="text-white border border-white/20 px-6 py-2.5 rounded-full text-[13px] font-semibold hover:opacity-90 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)' }}>
                Вебинар
              </a>
              <MobileMenuButton />
            </div>
          </GlassEffect>
        </div>
      </div>

      {/* Main content */}
      <section className="relative z-10 pt-40 pb-24 px-6 md:px-12 lg:px-24 min-h-[80vh] flex items-center">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Check icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)' }}
            >
              <Check className="w-10 h-10 text-white" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-4">
              Спасибо за регистрацию
            </h1>

            <p className="text-xl md:text-2xl text-slate-900 font-light mb-3">
              Остался один шаг — забрать подарок
            </p>

            <p className="text-sm text-slate-500 font-light mb-10 max-w-md mx-auto leading-relaxed">
              Подключите Telegram-бота, чтобы получить подарок и напоминание перед встречей
            </p>

            {/* Telegram button */}
            <motion.a
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              href="https://t.me/IakubanCoachingAcademyBot?start=c1774900724528-ds"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full px-10 py-5 text-white text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)' }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              Забрать подарок в Telegram
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* Legal footer */}
      <footer className="relative z-10 py-12 px-6 md:px-12 lg:px-24 bg-[#fafafa]">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 font-light">
            <a href="/legal/privacy" className="hover:text-slate-600 transition-colors">Политика конфиденциальности</a>
            <span className="text-slate-300">·</span>
            <a href="#" className="hover:text-slate-600 transition-colors">Согласие на получение рассылки</a>
            <span className="text-slate-300">·</span>
            <a href="#" className="hover:text-slate-600 transition-colors">Подтверждение регистрации компании</a>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 font-medium tracking-wide uppercase mb-1">
              Iakuban Coaching Academy, S.L.
            </p>
            <p className="text-[10px] text-slate-400 font-light">
              Barcelona · Tax ID (NIF) B22895676
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <button className="font-medium text-slate-900 hover:text-indigo-600 transition-colors">RU</button>
            <span className="text-slate-300">/</span>
            <button className="text-slate-400 hover:text-indigo-600 transition-colors">EN</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
