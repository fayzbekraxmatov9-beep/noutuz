import React from "react";
import { Icons } from "./Icons";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-32">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-87.5 bg-linear-to-tr from-cyan-600/20 via-blue-600/20 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-400 text-xs sm:text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span>O&apos;zbekistonda 1-raqamli noutbuklar markazi</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Kuchli va Ishonchli <br className="hidden sm:inline" />
              <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Noutbuklar Do&apos;koni
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Dasturlash, 3D modellashtirish, o&apos;yinlar va ofis ishlari uchun eng so&apos;nggi Apple M3, Intel Core Ultra va RTX 40-seriya noutbuklari. Rasmiy kafolat, bepul dasturiy sozlash va muddatli to&apos;lov bilan.
            </p>

            {/* Badges and CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#katalog"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-linear-to-r from-cyan-500 via-blue-600 to-blue-700 hover:from-cyan-400 hover:to-blue-600 text-white font-semibold text-base shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Katalogga O&apos;tish</span>
                <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#muddatli-tolov"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-base transition-all flex items-center justify-center gap-2"
              >
                <Icons.CreditCard className="w-5 h-5 text-emerald-400" />
                <span>Nasiyaga xarid qilish</span>
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">5,000+</p>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Mamnun mijozlar</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-cyan-400">100%</p>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Original mahsulot</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">2 Yil</p>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Servis kafolati</p>
              </div>
            </div>
          </div>

          {/* Right Showcase Laptop Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Floating badge top */}
              <div className="absolute -top-4 -right-2 sm:-right-4 z-20 bg-slate-900/95 border border-cyan-500/40 backdrop-blur-md rounded-2xl p-3 shadow-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Icons.Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Tezkor yetkazish</p>
                  <p className="text-sm font-bold text-white">Toshkentda 2 soatda</p>
                </div>
              </div>

              {/* Main Card */}
              <div className="relative rounded-3xl bg-linear-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl overflow-hidden group">
                <div className="relative aspect-video sm:aspect-4/3 rounded-2xl overflow-hidden bg-slate-800/60 mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
                    alt="MacBook Pro 16"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-cyan-500 text-slate-950 font-bold text-xs px-2.5 py-1 rounded-lg">
                    Hafta Xiti
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-cyan-400 font-bold">Apple M3 Max</span>
                    <div className="flex items-center text-amber-400 text-xs gap-1 font-semibold">
                      <Icons.Star className="w-3.5 h-3.5" />
                      <span>4.9 (42 baho)</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    MacBook Pro 16&quot; Liquid Retina XDR
                  </h3>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                    <div>
                      <p className="text-xs text-slate-400">Maxsus taklif narxi</p>
                      <p className="text-2xl font-black text-cyan-400">$3,499</p>
                    </div>
                    <a
                      href="#katalog"
                      className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm rounded-xl transition-all"
                    >
                      Batafsil
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating badge bottom */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 z-20 bg-slate-900/95 border border-slate-700/80 backdrop-blur-md rounded-2xl p-3 shadow-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Icons.ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Ishonchli xarid</p>
                  <p className="text-sm font-bold text-white">100% Rasmiy Kafolat</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
