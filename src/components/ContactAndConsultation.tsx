"use client";

import React, { useState } from "react";
import { Icons } from "./Icons";

export const ContactAndConsultation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "+998 ",
    category: "Dasturlash / IT",
    budget: "$1000 - $1500",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="aloqa" className="py-20 bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
              Mutaxassis Ko&apos;magi
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Qaysi noutbuk sizga mos kelishini bilmayapsizmi?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              O&apos;z talab va byudjetingizni qoldiring. IT-mutaxassislarimiz 10 daqiqa ichida siz bilan bog&apos;lanib, eng optimal modelni tanlashga yordam beradi.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-slate-800 text-cyan-400 shrink-0">
                  <Icons.Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Do&apos;kon telefoni (24/7)</p>
                  <a href="tel:+998972988788" className="text-base font-bold text-white hover:text-cyan-400 transition-colors">
                    +998 (97) 298-87-88
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-slate-800 text-cyan-400 shrink-0">
                  <Icons.Send className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Telegram orqali murojaat</p>
                  <a href="https://t.me/noutuz_admin" target="_blank" rel="noreferrer" className="text-base font-bold text-white hover:text-cyan-400 transition-colors">
                    @noutuz_admin
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-slate-800 text-cyan-400 shrink-0">
                  <Icons.MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Manzilimiz</p>
                  <p className="text-sm font-semibold text-white">
                    Toshkent sh., Navoiy ko&apos;chasi, &quot;Malika&quot; savdo majmuasi, A-22 do&apos;kon
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-slate-800 text-cyan-400 shrink-0">
                  <Icons.Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Ish vaqti</p>
                  <p className="text-sm font-semibold text-white">
                    Har kuni: 09:00 dan 21:00 gacha (dam olish kunlarisiz)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <Icons.Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Rahmat! Arizangiz qabul qilindi.</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Mutaxassisimiz 10 daqiqa ichida siz ko&apos;rsatgan raqamga bog&apos;lanib, eng maqbul noutbuk bo&apos;yicha maslahat beradi.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-cyan-400"
                  >
                    Yangi so&apos;rov qoldirish
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Bepul Maslahat Olish Uchun Anketa
                  </h3>

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
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
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
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Asosiy maqsad
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3 py-3 bg-slate-950 border border-slate-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500"
                      >
                        <option>Dasturlash / IT</option>
                        <option>3D Dizayn / Grafika</option>
                        <option>Og&apos;ir O&apos;yinlar (Gaming)</option>
                        <option>Ofis va O&apos;qish</option>
                        <option>Kundalik ishlar</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Mo&apos;ljallangan byudjet
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3 py-3 bg-slate-950 border border-slate-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500"
                      >
                        <option>$500 - $800</option>
                        <option>$800 - $1200</option>
                        <option>$1200 - $2000</option>
                        <option>$2000 dan yuqori</option>
                      </select>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 pt-1">
                    Ma&apos;lumotlaringiz xavfsizligi kafolatlanadi va spam yuborilmaydi.
                  </p>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-linear-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Maslahat olish &rarr;</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
