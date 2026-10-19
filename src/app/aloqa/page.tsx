"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Icons } from "@/components/Icons";

export default function AloqaPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "+998 ",
    subject: "Noutbuk tanlashda yordam",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactError, setContactError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setContactError("");

    try {
      const res = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Xabarni yuborishda xatolik yuz berdi");
      }

      setSubmitted(true);
    } catch (err: any) {
      setContactError(err.message || "Xatolik yuz berdi");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Header Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900/60 to-slate-950 border-b border-slate-800 py-16">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <nav className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-4">
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Bosh sahifa
              </Link>
              <span>/</span>
              <span className="text-cyan-400 font-semibold">Aloqa</span>
            </nav>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Icons.Phone className="w-4 h-4" />
              <span>Biz Har Doim Aloqadamiz (24/7)</span>
            </span>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
              Biz Bilan <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Bog&apos;lanish va Do&apos;konimiz Manzili
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Savollaringiz bormi yoki qaysi noutbukni tanlashda ikkilanyapsizmi? Mutaxassislarimiz har doim yordamga tayyor.
            </p>
          </div>
        </section>

        {/* Contact Cards & Form */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Details Left */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Bog&apos;lanish Ma&apos;lumotlari
                </h3>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 shrink-0 border border-cyan-500/20">
                    <Icons.Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Do&apos;kon telefon raqamlari:</p>
                    <a href="tel:+998712005544" className="text-lg font-bold text-white hover:text-cyan-400 transition-colors block mt-0.5">
                      +998 (71) 200-55-44
                    </a>
                    <a href="tel:+998901234567" className="text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors block">
                      +998 (90) 123-45-67 (Call-center)
                    </a>
                  </div>
                </div>

                {/* Telegram */}
                <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 shrink-0 border border-blue-500/20">
                    <Icons.Send className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Telegram orqali tezkor javob:</p>
                    <a href="https://t.me/noutuz_admin" target="_blank" rel="noreferrer" className="text-base font-bold text-white hover:text-cyan-400 transition-colors block mt-0.5">
                      @noutuz_admin
                    </a>
                    <p className="text-xs text-slate-400 mt-0.5">O&apos;rtacha javob berish vaqti: 5 daqiqa</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 shrink-0 border border-emerald-500/20">
                    <Icons.MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Do&apos;konimiz manzili:</p>
                    <p className="text-sm font-bold text-white mt-0.5">
                      Toshkent shahar, Navoiy ko&apos;chasi, &quot;Malika&quot; savdo majmuasi, A-22 do&apos;kon
                    </p>
                    <p className="text-xs text-slate-400 mt-1">Mo&apos;ljal: Asosiy kirish yo&apos;lagi</p>
                  </div>
                </div>

                {/* Work hours */}
                <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
                  <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 shrink-0 border border-amber-500/20">
                    <Icons.Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Ish tartibi:</p>
                    <p className="text-sm font-bold text-white mt-0.5">
                      Dushanba — Yakshanba: 09:00 dan 21:00 gacha
                    </p>
                    <p className="text-xs text-emerald-400 font-semibold mt-0.5">
                      Dam olish kunlarisiz xizmat ko&apos;rsatamiz
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Right */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <Icons.Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Xabaringiz muvaffaqiyatli yetkazildi!</h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto">
                      Mutaxassisimiz tez orada siz ko&apos;rsatgan telefon raqamga bog&apos;lanadi.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-cyan-400"
                    >
                      Yangi xabar yuborish
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Bizga Xabar Qoldiring
                    </h3>
                    <p className="text-xs text-slate-400 mb-4">
                      Kerakli maydonlarni to&apos;ldiring va mutaxassisimiz sizga qisqa muddatda javob beradi.
                    </p>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Ismingiz
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Masalan: Sardor"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Telefon raqamingiz
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Murojaat mavzusi
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500"
                      >
                        <option>Noutbuk tanlashda yordam</option>
                        <option>Nasiya savdo (Muddatli to&apos;lov) shartlari</option>
                        <option>Kafolat va servis xizmati</option>
                        <option>Trade-in (Eski noutbukni yangilash)</option>
                        <option>Boshqa savol yoki taklif</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Xabaringiz yoki savolingiz
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Sizni qiziqtirgan parametrlar, dasturlar yoki talablaringiz..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    {contactError && (
                      <p className="text-xs text-rose-400 bg-rose-500/10 p-2.5 rounded-lg border border-rose-500/20">
                        {contactError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 text-white font-bold text-sm shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <Icons.Send className="w-4 h-4" />
                      <span>{isSubmitting ? "Yuborilmoqda..." : "Xabarni Yuborish"}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
