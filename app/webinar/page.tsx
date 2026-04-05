"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Globe, Check } from "lucide-react";
import { motion } from "motion/react";
import { GlassFilter, GlassEffect } from "@/components/ui/liquid-glass";

export default function WebinarPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Send to GetCourse via iframe form submission
      const gcUrl = "https://academy.iakuban.com/pl/lite/widget/widget?id=1583627";
      const iframe = document.createElement("iframe");
      iframe.name = "gc_submit_frame";
      iframe.style.display = "none";
      document.body.appendChild(iframe);

      const gcForm = document.createElement("form");
      gcForm.method = "POST";
      gcForm.action = gcUrl;
      gcForm.target = "gc_submit_frame";

      const fields: Record<string, string> = {
        "name": formData.get("name") as string || "",
        "phone": formData.get("phone") as string || "",
        "email": formData.get("email") as string || "",
        "addfields[telegram]": formData.get("telegram") as string || "",
      };

      for (const [key, value] of Object.entries(fields)) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        gcForm.appendChild(input);
      }

      document.body.appendChild(gcForm);
      gcForm.submit();

      // Cleanup after submit
      setTimeout(() => {
        document.body.removeChild(gcForm);
        document.body.removeChild(iframe);
      }, 3000);
    } catch (err) {
      console.warn("GetCourse submit error:", err);
    }

    setIsLoading(false);
    window.location.href = "/webinar/thanks";
  };

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
                <a href="/about" className="hover:text-slate-900 transition-colors">
                  О нас
                </a>
                <a href="/academy" className="hover:text-slate-900 transition-colors">
                  Академия
                </a>
                <a href="/academy#free" className="hover:text-slate-900 transition-colors">
                  Учиться бесплатно
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
                style={{ backgroundImage: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)' }}
              >
                Iakuban Academy
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 leading-[1.1] tracking-tight mb-6">
              х10 в доходе для психолога через коучинг
            </h1>

            <p className="text-base text-slate-500 font-light mb-10">
              Среда, 15 апреля&nbsp;/&nbsp;16:00 Москва&nbsp;/&nbsp;Киев&nbsp;·&nbsp;15:00 Европа
            </p>

            <button
              onClick={() => setShowModal(true)}
              className="group inline-flex items-center gap-4 rounded-full px-10 py-5 text-white text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)' }}
              type="button"
            >
              Зарегистрироваться
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden bg-white border border-black/[0.04] p-2 shadow-[0_0_80px_-15px_rgba(147,197,253,0.5),0_4px_25px_-5px_rgba(0,0,0,0.05)]"
          >
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
              <Image src="/images/hero-webinar.jpeg" alt="Коуч-сессия" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 2. ОФФЕР ────────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 text-center max-w-4xl mx-auto leading-[1.2]">
              За 2 часа разберём, как ваша текущая база клиентов становится источником дохода в{" "}
              <span
                className="font-semibold text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
              >
                5–10 раз выше
              </span>
              . Без привлечения новой аудитории.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 3. ЧТО БУДЕТ НА ВСТРЕЧЕ ─────────────────────────────────────────── */}
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
              [ Что будет на встрече ]
            </div>
            <p className="text-lg text-slate-500 font-light">Вы уйдёте с пониманием:</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              "Почему клиент психолога уходит, как только ему стало «нормально»",
              "В чём разница между психологией и коучингом",
              "Почему один коучинговый контракт перекрывает месячный доход психолога",
              "Как психолог с готовой базой клиентов выходит на новый доход быстрее, чем те, кто начинает с нуля",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white border border-black/[0.05] rounded-[1.5rem] p-6 shadow-[0_0_60px_-15px_rgba(147,197,253,0.4),0_4px_20px_-5px_rgba(0,0,0,0.04)] hover:border-blue-200 transition-all duration-300 text-center"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)' }}>
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-light">{item}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => setShowModal(true)}
              type="button"
              className="group inline-flex items-center gap-3 rounded-full px-10 py-5 text-white text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-lg shadow-blue-500/20"
              style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
            >
              Иду на встречу
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 4. ДЛЯ КОГО ─────────────────────────────────────────────────────── */}
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
              [ Для кого ]
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900 leading-[1.2]">
              Встреча для психологов, которые:
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            {[
              "Годами учатся, а доход не отражает ни опыт, ни уровень",
              "Клиент приходит, когда плохо — уходит, когда полегчало. И так по кругу",
              "Чтобы зарабатывать больше, нужно брать больше клиентов",
              "Устали работать с болью, травмой и кризисами — хочется другой энергии в работе",
              "Есть база клиентов, но она не конвертируется в стабильный высокий доход",
              "Слышали про коучинг, но не понимают, как это вписать в то, что уже есть",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-black/[0.05] rounded-[1.5rem] p-6 shadow-[0_0_60px_-15px_rgba(147,197,253,0.4),0_4px_20px_-5px_rgba(0,0,0,0.04)] hover:border-blue-200 transition-all duration-300 flex items-start gap-4"
              >
                <div
                  className="w-2.5 h-2.5 rounded-full shrink-0 mt-1.5"
                  style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 100%)" }}
                />
                <p className="text-sm text-slate-700 leading-relaxed font-light">{item}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => setShowModal(true)}
              type="button"
              className="group inline-flex items-center gap-3 rounded-full px-10 py-5 text-white text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-lg shadow-blue-500/20"
              style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
            >
              Зарегистрироваться
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 5. КТО ВЕДЁТ ────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div
            className="text-[20px] uppercase tracking-[0.2em] text-transparent bg-clip-text font-semibold"
            style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
          >
            [ Кто ведёт ]
          </div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-16 items-center">
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 rounded-[2rem] overflow-hidden border border-black/[0.05] p-2 bg-white shadow-[0_0_60px_-15px_rgba(147,197,253,0.4),0_4px_20px_-5px_rgba(0,0,0,0.04)]"
          >
            <div className="rounded-[1.5rem] overflow-hidden bg-slate-100">
              <Image src="/images/yakuban.png" alt="Алексей Якубан" width={600} height={800} className="w-full h-auto" />
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 lg:pl-12"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-12 tracking-tight text-slate-900">
              Алексей Якубан
            </h2>

            <div className="space-y-8">
              {[
                "Коуч PCC ICF. 2200 часов практики.",
                "Основатель Iakuban Coaching Academy — три программы аккредитованы ICF.",
                "700+ выпускников, среди которых психологи с опытом от 5 до 15 лет.",
              ].map((text, i) => (
                <div key={text} className="flex items-start gap-6 group">
                  <div className="text-xs font-mono text-slate-400 mt-0.5">0{i + 1}</div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light group-hover:text-slate-900 transition-colors">
                    {text}
                  </p>
                </div>
              ))}

              {/* Quote item */}
              <div className="flex items-start gap-6 group">
              </div>

              <div className="mt-8 bg-white rounded-2xl p-6 border border-black/[0.05] shadow-[0_0_60px_-15px_rgba(147,197,253,0.4),0_4px_20px_-5px_rgba(0,0,0,0.04)]">
                <p className="text-base text-slate-700 leading-relaxed font-light italic text-center">
                  «Сам был 1.5 года в терапии у одного специалиста, потом ещё 1.5 года у него же в коучинге. Знаю разницу не из учебника.»
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-black/[0.05]">
              <span
                className="text-sm font-semibold tracking-[0.15em] uppercase text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
              >
                Iakuban Academy
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      {/* ─── 6. REGISTRATION FORM ────────────────────────────────────────────── */}
      <section
        id="register"
        className="relative z-10 scroll-mt-24 py-24 md:py-32 px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="rounded-[2rem] p-10 md:p-14 border border-white/10 shadow-2xl shadow-indigo-900/10"
              style={{
                background:
                  "radial-gradient(ellipse at 20% 50%, #93c5fd 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #60a5fa 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #818cf8 0%, transparent 45%), linear-gradient(135deg, #1e40af 0%, #2563eb 30%, #3b82f6 50%, #1d4ed8 70%, #1e3a8a 100%)",
              }}
            >
              {submitted ? (
                <div className="text-center space-y-4">
                  <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight">
                    Спасибо за регистрацию
                  </h2>
                  <p className="text-blue-100 font-light text-base">
                    Остался последний шаг.
                  </p>
                  <p className="text-blue-100 font-light text-sm max-w-sm mx-auto leading-relaxed">
                    Подключите Telegram-бота, чтобы забрать подарок и получить напоминание перед встречей.
                  </p>
                  <div className="pt-4">
                    <a
                      href="#"
                      className="inline-flex items-center gap-3 rounded-full px-10 py-4 bg-white text-slate-900 text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                      Перейти в Telegram
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight mb-3">
                      Зарегистрироваться на встречу
                    </h2>
                    <p className="text-blue-100 font-light text-base mb-1">
                      х10 в доходе для психолога через коучинг
                    </p>
                    <p className="text-blue-200 font-light text-sm">
                      Среда, 15 апреля&nbsp;/&nbsp;16:00 Москва
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Ваше имя"
                      required
                      className="w-full rounded-full bg-white/10 border border-white/20 px-6 py-4 text-sm text-white placeholder-white/50 outline-none focus:border-white/40 transition-colors"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Телефон"
                      required
                      className="w-full rounded-full bg-white/10 border border-white/20 px-6 py-4 text-sm text-white placeholder-white/50 outline-none focus:border-white/40 transition-colors"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="w-full rounded-full bg-white/10 border border-white/20 px-6 py-4 text-sm text-white placeholder-white/50 outline-none focus:border-white/40 transition-colors"
                    />
                    <input
                      type="text"
                      name="telegram"
                      placeholder="Telegram (@username)"
                      className="w-full rounded-full bg-white/10 border border-white/20 px-6 py-4 text-sm text-white placeholder-white/50 outline-none focus:border-white/40 transition-colors"
                    />
                    <div className="space-y-3">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" required className="mt-1 w-4 h-4 rounded accent-white shrink-0" />
                        <span className="text-xs text-white/70 font-light leading-relaxed">Я согласен(а) на обработку персональных данных</span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" className="mt-1 w-4 h-4 rounded accent-white shrink-0" />
                        <span className="text-xs text-white/70 font-light leading-relaxed">Я согласен(а) получать информационную и рекламную рассылку</span>
                      </label>
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full rounded-full bg-white text-slate-900 px-6 py-4 text-sm font-semibold hover:bg-white/90 transition-all duration-300 disabled:opacity-70"
                    >
                      {isLoading ? "Отправка..." : "Зарегистрироваться"}
                    </button>
                    <p className="text-[11px] text-white/50 text-center font-light">
                      Регистрация бесплатная, записи не будет
                    </p>
                  </form>
                </>
              )}
            </div>
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

      {/* Registration Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => { setShowModal(false); setSubmitted(false); }} />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
            style={{ background: 'radial-gradient(ellipse at 20% 50%, #93c5fd 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #60a5fa 0%, transparent 40%), radial-gradient(ellipse at 60% 80%, #818cf8 0%, transparent 45%), linear-gradient(135deg, #1e40af 0%, #2563eb 30%, #3b82f6 50%, #1d4ed8 70%, #1e3a8a 100%)' }}
          >
            <button
              onClick={() => { setShowModal(false); setSubmitted(false); }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/25 transition-colors"
              type="button"
            >
              ✕
            </button>

            <div className="p-8 md:p-10">
              {!submitted ? (
                <>
                  <h3 className="text-2xl font-light text-white mb-2 tracking-tight">
                    Зарегистрироваться на встречу
                  </h3>
                  <p className="text-sm text-white/70 font-light mb-2">
                    х10 в доходе для психолога через коучинг
                  </p>
                  <p className="text-xs text-white/50 font-light mb-8">
                    Среда, 15 апреля / 16:00 Москва
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Ваше имя"
                      required
                      className="w-full rounded-full bg-white/10 border border-white/20 px-6 py-4 text-sm text-white placeholder-white/50 outline-none focus:border-white/40 transition-colors"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Телефон"
                      required
                      className="w-full rounded-full bg-white/10 border border-white/20 px-6 py-4 text-sm text-white placeholder-white/50 outline-none focus:border-white/40 transition-colors"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="w-full rounded-full bg-white/10 border border-white/20 px-6 py-4 text-sm text-white placeholder-white/50 outline-none focus:border-white/40 transition-colors"
                    />
                    <input
                      type="text"
                      name="telegram"
                      placeholder="Telegram (@username)"
                      className="w-full rounded-full bg-white/10 border border-white/20 px-6 py-4 text-sm text-white placeholder-white/50 outline-none focus:border-white/40 transition-colors"
                    />
                    <div className="space-y-3">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" required className="mt-1 w-4 h-4 rounded accent-white shrink-0" />
                        <span className="text-xs text-white/70 font-light leading-relaxed">Я согласен(а) на обработку персональных данных</span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" className="mt-1 w-4 h-4 rounded accent-white shrink-0" />
                        <span className="text-xs text-white/70 font-light leading-relaxed">Я согласен(а) получать информационную и рекламную рассылку</span>
                      </label>
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full rounded-full bg-white text-slate-900 px-6 py-4 text-sm font-semibold hover:bg-white/90 transition-all duration-300 disabled:opacity-70"
                    >
                      {isLoading ? "Отправка..." : "Зарегистрироваться"}
                    </button>
                    <p className="text-[11px] text-white/50 text-center font-light">
                      Регистрация бесплатная, записи не будет
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-3 tracking-tight">
                    Спасибо за регистрацию
                  </h3>
                  <p className="text-base text-white font-light mb-2">
                    Остался последний шаг.
                  </p>
                  <p className="text-sm text-white/80 font-light mb-8 max-w-xs mx-auto">
                    Подключите Telegram-бота, чтобы забрать подарок и получить напоминание перед встречей.
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-white text-slate-900 px-8 py-4 text-sm font-semibold hover:bg-white/90 transition-all duration-300"
                  >
                    Перейти в Telegram
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
