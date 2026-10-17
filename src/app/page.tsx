"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LAPTOPS } from "@/data/storeData";
import { Laptop } from "@/types";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { LaptopCatalog } from "@/components/LaptopCatalog";
import { LaptopDetailModal } from "@/components/LaptopDetailModal";
import { InstallmentCalculator } from "@/components/InstallmentCalculator";
import { Reviews } from "@/components/Reviews";
import { ContactAndConsultation } from "@/components/ContactAndConsultation";
import { Footer } from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Icons } from "@/components/Icons";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLaptop, setSelectedLaptop] = useState<Laptop | null>(null);
  const { addToCart } = useCart();

  // Highlight only top featured laptops on the landing page
  const featuredLaptops = LAPTOPS.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* Header */}
      <Navbar onSearch={setSearchQuery} />

      {/* Main Page Sections */}
      <main className="flex-1">
        <Hero />
        <Features />

        {/* Featured Showcase on Home */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
                Xaridorgir Modellar
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Eng Ko&apos;p Sotilgan Noutbuklar
              </h2>
            </div>
            <Link
              href="/katalog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-sm font-bold transition-all group"
            >
              <span>Barcha Katalogga o&apos;tish</span>
              <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <LaptopCatalog
            laptops={featuredLaptops}
            searchQuery={searchQuery}
            onAddToCart={addToCart}
            onSelectLaptop={setSelectedLaptop}
          />

          <div className="text-center mt-10">
            <Link
              href="/katalog"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 text-white font-bold text-sm shadow-xl shadow-cyan-500/20 transition-all group"
            >
              <span>To&apos;liq Katalog Sahifasini Ochish ({LAPTOPS.length}+ modellar)</span>
              <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        <InstallmentCalculator />
        <Reviews />
        <ContactAndConsultation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Laptop Detail Modal */}
      <LaptopDetailModal
        laptop={selectedLaptop}
        onClose={() => setSelectedLaptop(null)}
        onAddToCart={addToCart}
      />
    </div>
  );
}
