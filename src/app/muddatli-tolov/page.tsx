"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Icons } from "@/components/Icons";

const PARTNERS = [
  { name: "Uzum Nasiya", logoText: "UZUM", desc: "12 oygacha, hech qanday rasmiy ma'lumotnomasiz", color: "from-purple-600 to-indigo-600" },
  { name: "Iman Pay", logoText: "IMAN", desc: "100% islom moliyasi standartlariga mos, halol muddatli to'lov", color: "from-emerald-600 to-teal-600" },
  { name: "Alif Nasiya", logoText: "ALIF", desc: "3, 6, 9, 12, 24 oylik qulay shartlar", color: "from-green-600 to-emerald-700" },
  { name: "Anorbank", logoText: "ANOR", desc: "Ilova orqali 3 daqiqada tasdiqlash", color: "from-rose-600 to-red-600" },
];

const STEPS = [
  {
    step: "01",
    title: "Noutbukni tanlang",
    desc: "Katalogimizdan o'zingizga yoqqan modelni tanlang yoki mutaxassisimizdan maslahat oling.",
  },
  {
    step: "02",
    title: "Pasport ma'lumotini yuboring",
    desc: "Hech qanday oylik maosh ma'lumotnomasi shart emas. Faqat pasport yoki ID karta fotosurati kifoya.",
  },
  {
    step: "03",
    title: "15 daqiqada tasdiqlash",
    desc: "Skoring tizimi arizangizni bir necha daqiqada ko'rib chiqadi va to'lov grafigini tuzib beradi.",
  },
  {
    step: "04",
    title: "Noutbukni qabul qiling",
    desc: "Toshkentda 2 soat ichida yoki butun O'zbekiston bo'ylab 24 soatda eshigingizgacha bepul yetkazamiz.",
  },
];

const FAQ = [
  {
    q: "Nasiya savdo haqiqatan ham 0% ustamami?",
    a: "Ha, biz hamkor bank va to'lov tashkilotlari bilan maxsus aksiyalar asosida 3 va 6 oylik muddatlarga 0% ortiqcha to'lovsiz shartnoma taqdim etamiz.",
  },
  {
    q: "Kimlar nasiya savdoga noutbuk olishi mumkin?",
    a: "18 yoshdan 65 yoshgacha bo'lgan, O'zbekiston Respublikasi fuqarolari (pasport yoki ID-karta egasi) xarid qilishi mumkin.",
  },
  {
    q: "Rasmiy ish joyim bo'lishi shartmi?",
    a: "Yo'q, rasmiy ish joyi va ma'lumotnoma talab qilinmaydi. Kartangizdagi so'nggi 3 oylik pul aylanmasi kifoya qiladi.",
  },
  {
    q: "Boshlang'ich to'lov qilish majburiymi?",
    a: "Yo'q! Aksariyat modellarni 0 so'm boshlang'ich to'lov bilan ham xarid qilishingiz mumkin.",
  },
];

export default function NasiyaPage() {
  const [price, setPrice] = useState<number>(1200);
  const [months, setMonths] = useState<number>(12);
  const [initialPaymentPercent, setInitialPaymentPercent] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "+998 ",
    selectedPartner: "Uzum Nasiya",
  });

  const initialPayment = (price * initialPaymentPercent) / 100;
  const remainingAmount = price - initialPayment;
  const monthlyPayment = Math.round(remainingAmount / months);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900/60 to-slate-950 border-b border-slate-800 py-16">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <nav className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-4">
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Bosh sahifa
              </Link>
              <span>/</span>
              <span className="text-emerald-400 font-semibold">Nasiya Savdo (0%)</span>
            </nav>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Icons.ShieldCheck className="w-4 h-4" />
              <span>Halol Nasiya — 0% Ustama</span>
            </span>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
              Istalgan Noutbukni <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Muddatli To&apos;lovga Oling!
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Boshlang&apos;ich to&apos;lovsiz, ortiqcha qog&apos;ozbozliksiz va yashirin foizlarsiz. Pasportingiz orqali 15 daqiqada rasmiylashtiring.
            </p>
          </div>
        </section>

        {/* Calculator and Steps */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Calculator Column */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Icons.CreditCard className="w-5 h-5 text-emerald-400" />
                    <span>Onlayn Nasiya Kalkulyatori</span>
                  </h3>
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold px-2.5 py-1 rounded-full">
                    0% Foiz
                  </span>
                </div>

                {/* Price slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm text-slate-300 font-medium">Noutbuk taxminiy qiymati:</label>
                    <span className="text-2xl font-black text-emerald-400">${price}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="4000"
                    step="50"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>$500</span>
                    <span>$2,000</span>
                    <span>$4,000</span>
                  </div>
                </div>

                {/* Months */}
                <div>
                  <label className="block text-sm text-slate-300 font-medium mb-2.5">
                    Muddatni tanlang:
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {[3, 6, 9, 12].map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setMonths(m)}
                        className={`py-3 rounded-xl text-sm font-bold transition-all ${
                          months === m
                            ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                            : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                        }`}
                      >
                        {m} oy
                      </button>
                    ))}
                  </div>
                </div>

                {/* Initial payment */}
                <div>
                  <label className="block text-sm text-slate-300 font-medium mb-2.5">
                    Boshlang&apos;ich to&apos;lov:
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {[0, 10, 20, 30].map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setInitialPaymentPercent(p)}
                        className={`py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                          initialPaymentPercent === p
                            ? "bg-slate-700 text-emerald-400 border border-emerald-500/50"
                            : "bg-slate-800 text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        {p}% (${(price * p) / 100})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Summary calculation */}
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-semibold">Oylik to&apos;lov miqdori:</span>
                    <div className="text-3xl font-black text-emerald-400 mt-1">
                      ${monthlyPayment} <span className="text-sm font-medium text-slate-400">/ oy</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Boshlang&apos;ich: ${initialPayment} • Qoldiq summa: ${remainingAmount}
                    </p>
                  </div>

                  <a
                    href="#ariza-form"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 text-white font-bold text-sm text-center shadow-lg shadow-emerald-500/20 transition-all"
                  >
                    Nasiyaga ariza berish &darr;
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Steps Column */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Qanday rasmiylashtiriladi?
              </h3>
              <div className="space-y-4">
                {STEPS.map((s) => (
                  <div
                    key={s.step}
                    className="flex gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 items-start"
                  >
                    <span className="text-lg font-black text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-xl shrink-0">
                      {s.step}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{s.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Partners */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
              Hamkor Tizimlar
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              O&apos;zbekistonning Eng Ishonchli FinTech Platformalari
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${partner.color} flex items-center justify-center font-black text-white text-sm mb-4`}>
                  {partner.logoText}
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">{partner.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{partner.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section id="ariza-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Icons.Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Nasiya arizangiz yuborildi!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Operatorimiz 10 daqiqa ichida siz bilan bog&apos;lanib, muddatli to&apos;lov shartnomangizni tasdiqlab beradi.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-emerald-400"
                >
                  Boshqa ariza to&apos;ldirish
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-center mb-6">
                  <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Tezkor Ariza</span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    Onlayn Nasiya Uchun Ma&apos;lumot Qoldiring
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      F.I.SH (Ism familiyangiz)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Masalan: Sardor Alimov"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500"
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
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Qaysi tizim orqali to&apos;lash qulay?
                  </label>
                  <select
                    value={formData.selectedPartner}
                    onChange={(e) => setFormData({ ...formData, selectedPartner: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option>Uzum Nasiya (eng tezkor)</option>
                    <option>Iman Pay (Halol muddatli to&apos;lov)</option>
                    <option>Alif Nasiya</option>
                    <option>Anorbank</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 hover:from-emerald-400 text-white font-bold text-sm shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Icons.CreditCard className="w-5 h-5" />
                  <span>Arizani yuborish &rarr;</span>
                </button>
              </form>
            )}
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">Ko&apos;p Beriladigan Savollar</h3>
          </div>

          <div className="space-y-4">
            {FAQ.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <h4 className="text-base font-bold text-white mb-2">{faq.q}</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
