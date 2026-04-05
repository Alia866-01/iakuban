"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Найти специалиста" },
  { href: "/about", label: "О нас" },
  { href: "/academy", label: "Академия" },
  { href: "/academy#free", label: "Учиться бесплатно" },
];

export function MobileMenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-slate-600 hover:bg-black/5 transition-colors"
        type="button"
        aria-label="Открыть меню"
      >
        <Menu className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100]"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white z-[101] shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-black/[0.05]">
                <a href="/">
                  <span
                    className="text-sm font-bold tracking-widest uppercase text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
                  >
                    Iakuban
                  </span>
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  type="button"
                  aria-label="Закрыть меню"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="p-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="p-6 pt-0">
                <a
                  href="/"
                  className="block w-full text-center rounded-full px-6 py-3 text-sm font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
                >
                  Начать
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
