"use client";

import React, { useState } from "react";
import { Icons } from "./Icons";

export const InstallmentCalculator: React.FC = () => {
  const [price, setPrice] = useState<number>(1200);
  const [months, setMonths] = useState<number>(12);
  const [initialPaymentPercent, setInitialPaymentPercent] = useState<number>(0);

  const initialPayment = (price * initialPaymentPercent) / 100;
  const remainingAmount = price - initialPayment;
  const monthlyPayment = Math.round(remainingAmount / months);

  return (
    <section id="muddatli-tolov" className="py-20 bg-linear-to-b from-slate-900/60 to-slate-950 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <Icons.ShieldCheck className="w-4 h-4" />
              <span>Halol Nasiya Savdo — 0% Ustama</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              O&apos;zingizga yoqqan noutbukni <br />
              <span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                qulay muddatga bo&apos;lib to&apos;lang!
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Hech qanday boshlang&apos;ich to&apos;lovsiz va yashirin foizlarsiz. Faqatgina pasportingiz kifoya, 15 daqiqada tasdiqlab noutbukingizni olib ketishingiz mumkin.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Icons.Check className="w-3.5 h-3.5" />
                </div>
                <span>Faqat pasport (ID-karta) va telefon raqam kerak</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Icons.Check className="w-3.5 h-3.5" />
                </div>
                <span>Uydan chiqmasdan onlayn ariza topshirish</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Icons.Check className="w-3.5 h-3.5" />
                </div>
                <span>Anorbank, Uzum Nasiya, Iman Pay, Alif hamkorlik tizimlari</span>
              </div>
            </div>
          </div>

          {/* Interactive Calculator Box */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Icons.CreditCard className="w-5 h-5 text-cyan-400" />
                <span>Nasiya Kalkulyatori</span>
              </h3>

              {/* Price slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm text-slate-300 font-medium">Noutbuk qiymati:</label>
                  <span className="text-lg font-bold text-cyan-400">${price}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="4000"
                  step="50"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>$500</span>
                  <span>$2,000</span>
                  <span>$4,000</span>
                </div>
              </div>

              {/* Month selector */}
              <div>
                <label className="block text-sm text-slate-300 font-medium mb-2.5">
                  Muddatni tanlang:
                </label>
                <div className="grid grid-cols-4 gap-2.5">
                  {[3, 6, 9, 12].map((m) => (
                    <button
                      key={m}
                      onClick={() => setMonths(m)}
                      className={`py-2.5 rounded-xl text-sm font-bold transition-all ${
                        months === m
                          ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      {m} oy
                    </button>
                  ))}
                </div>
              </div>

              {/* Initial payment selector */}
              <div>
                <label className="block text-sm text-slate-300 font-medium mb-2.5">
                  Boshlang&apos;ich to&apos;lov:
                </label>
                <div className="grid grid-cols-4 gap-2.5">
                  {[0, 10, 20, 30].map((p) => (
                    <button
                      key={p}
                      onClick={() => setInitialPaymentPercent(p)}
                      className={`py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                        initialPaymentPercent === p
                          ? "bg-slate-700 text-emerald-400 border border-emerald-500/40"
                          : "bg-slate-800 text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {p}% (${(price * p) / 100})
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculation Result */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 uppercase font-semibold">Oylik to&apos;lov miqdori:</span>
                  <div className="text-3xl font-black text-emerald-400 mt-0.5">
                    ${monthlyPayment} <span className="text-sm font-medium text-slate-400">/ oy</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Boshlang&apos;ich to&apos;lov: ${initialPayment} | Qoldiq: ${remainingAmount}
                  </p>
                </div>

                <a
                  href="#aloqa"
                  className="px-6 py-3 rounded-xl bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm text-center shadow-lg shadow-emerald-500/20 transition-all"
                >
                  Ariza qoldirish
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
