"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 right-6 z-[90] flex justify-center pointer-events-none"
        >
          <div className="pointer-events-auto w-full max-w-2xl rounded-2xl bg-white border border-black/[0.06] shadow-[0_0_60px_-15px_rgba(147,197,253,0.4),0_8px_30px_-10px_rgba(0,0,0,0.08)] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm text-slate-900 font-medium mb-1">Мы используем cookies</p>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Мы используем файлы cookie для улучшения работы сайта.{" "}
                <a href="/legal/cookies" className="text-blue-500 hover:text-blue-600 transition-colors underline">
                  Подробнее
                </a>
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={decline}
                className="rounded-full px-5 py-2.5 text-xs font-medium text-slate-600 border border-black/[0.08] hover:bg-slate-50 transition-all duration-200"
              >
                Отклонить
              </button>
              <button
                onClick={accept}
                className="rounded-full px-5 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
              >
                Принять
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
