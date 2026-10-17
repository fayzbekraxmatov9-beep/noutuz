"use client";

import React, { useState } from "react";
import { Icons } from "./Icons";

interface NavbarProps {
  onSearch: (q: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearch, cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 transition-all">
      {/* Top Banner */}
      <div className="bg-linear-to-r from-cyan-600 via-blue-600 to-indigo-600 px-4 py-1.5 text-center text-xs sm:text-sm font-medium text-white shadow-inner flex items-center justify-center gap-2">
        <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs uppercase tracking-wide font-bold">Aksiya</span>
        <span>Hamma noutbuklarga 1 yillik rasmiy kafolat va bepul yetkazib berish!</span>
        <a href="#katalog" className="underline font-semibold hover:text-cyan-200 ml-1">Katalogga o&apos;tish &rarr;</a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
              <Icons.Laptop className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight bg-linear-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent">
                NOUT<span className="text-cyan-400">.UZ</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold -mt-1">
                Laptops Store
              </span>
            </div>
          </a>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Icons.Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder="Model, brend (Apple, ASUS ROG, Legion...) qidiring"
                className="w-full pl-10 pr-4 py-2 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all shadow-inner"
              />
              {query && (
                <button
                  onClick={() => {
                    setQuery("");
                    onSearch("");
                  }}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200"
                >
                  <Icons.X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#katalog" className="hover:text-cyan-400 transition-colors">Katalog</a>
            <a href="#afzalliklar" className="hover:text-cyan-400 transition-colors">Afzalliklar</a>
            <a href="#muddatli-tolov" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <span>Nasiya Savdo</span>
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-1.5 py-0.5 rounded">0%</span>
            </a>
            <a href="#fikrlar" className="hover:text-cyan-400 transition-colors">Mijozlar fikri</a>
            <a href="#aloqa" className="hover:text-cyan-400 transition-colors">Aloqa</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Phone contact */}
            <a
              href="tel:+998712005544"
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:bg-slate-800 border border-slate-800 transition-all"
            >
              <Icons.Phone className="w-4 h-4 text-cyan-400" />
              <span>+998 (71) 200-55-44</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-xl text-slate-200 hover:text-white transition-all group"
              aria-label="Savatcha"
            >
              <Icons.ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-full text-xs font-bold flex items-center justify-center shadow-lg">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <Icons.X className="w-6 h-6" /> : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Icons.Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={query}
              onChange={handleSearchChange}
              placeholder="Noutbuklarni qidirish..."
              className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder-slate-400"
            />
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-800 flex flex-col gap-3 text-sm font-medium">
            <a href="#katalog" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 text-slate-300 hover:text-cyan-400">Katalog</a>
            <a href="#afzalliklar" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 text-slate-300 hover:text-cyan-400">Afzalliklarimiz</a>
            <a href="#muddatli-tolov" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 text-slate-300 hover:text-cyan-400">0% Muddatli to&apos;lov</a>
            <a href="#fikrlar" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 text-slate-300 hover:text-cyan-400">Mijozlar fikrlari</a>
            <a href="#aloqa" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 text-slate-300 hover:text-cyan-400">Bog&apos;lanish</a>
            <a href="tel:+998712005544" className="mt-2 text-center py-2.5 rounded-xl bg-cyan-600 text-white font-semibold">
              +998 (71) 200-55-44 qo&apos;ng&apos;iroq qilish
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
