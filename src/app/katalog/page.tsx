"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LAPTOPS } from "@/data/storeData";
import { Laptop } from "@/types";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LaptopCatalog } from "@/components/LaptopCatalog";
import { LaptopDetailModal } from "@/components/LaptopDetailModal";
import { useCart } from "@/context/CartContext";
import { Icons } from "@/components/Icons";

export default function KatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLaptop, setSelectedLaptop] = useState<Laptop | null>(null);
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* Navbar with full search support */}
      <Navbar onSearch={setSearchQuery} />

      <main className="flex-1 pb-16">
        {/* Breadcrumb & Header banner */}
        <section className="bg-slate-900/60 border-b border-slate-800 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-slate-400 mb-3">
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Bosh sahifa
              </Link>
              <span>/</span>
              <span className="text-cyan-400 font-semibold">Katalog</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black text-white">
                  Barcha Noutbuklar Katalogi
                </h1>
                <p className="text-sm text-slate-400 mt-1 max-w-xl">
                  Apple MacBook, ASUS ROG, Lenovo Legion, Dell va HP flagmanlari. 100% original, rasmiy kafolat bilan.
                </p>
              </div>

              {/* Quick stats badge */}
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs">
                  <span className="text-slate-400 block">Jami modellar:</span>
                  <span className="text-base font-bold text-white">{LAPTOPS.length} ta mavjud</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs">
                  <span className="text-emerald-400 block font-semibold">Nasiya savdo:</span>
                  <span className="text-base font-bold text-white">0% Ustama</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Catalog Main Component */}
        <LaptopCatalog
          laptops={LAPTOPS}
          searchQuery={searchQuery}
          onAddToCart={addToCart}
          onSelectLaptop={setSelectedLaptop}
        />

        {/* Benefits strip inside catalog */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <Icons.ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>Har bir xaridga 1-2 yillik rasmiy servis kafolati</span>
            </div>
            <div className="flex items-center gap-3">
              <Icons.Truck className="w-5 h-5 text-blue-400 shrink-0" />
              <span>Toshkentda 2 soatda, viloyatlarga 24 soatda bepul yetkazish</span>
            </div>
            <div className="flex items-center gap-3">
              <Icons.Wrench className="w-5 h-5 text-amber-400 shrink-0" />
              <span>Windows 11 va kerakli dasturlar bepul o&apos;rnatiladi</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal detail */}
      <LaptopDetailModal
        laptop={selectedLaptop}
        onClose={() => setSelectedLaptop(null)}
        onAddToCart={addToCart}
      />
    </div>
  );
}
