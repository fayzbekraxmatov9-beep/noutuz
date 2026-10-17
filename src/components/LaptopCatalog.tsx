"use client";

import React, { useState, useMemo } from "react";
import { Laptop } from "@/types";
import { Icons } from "./Icons";

interface LaptopCatalogProps {
  laptops: Laptop[];
  searchQuery: string;
  onAddToCart: (laptop: Laptop) => void;
  onSelectLaptop: (laptop: Laptop) => void;
}

const CATEGORIES = [
  { id: "all", label: "Barchasi" },
  { id: "gaming", label: "Gaming (O'yinlar)" },
  { id: "ultrabook", label: "Ultrabuk (Ixcham)" },
  { id: "creative", label: "Dizayn & 3D" },
  { id: "office", label: "Biznes & Ofis" },
];

const BRANDS = ["Barchasi", "Apple", "ASUS", "Lenovo", "Dell", "HP"];

export const LaptopCatalog: React.FC<LaptopCatalogProps> = ({
  laptops,
  searchQuery,
  onAddToCart,
  onSelectLaptop,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("Barchasi");
  const [sortBy, setSortBy] = useState<"popular" | "price-asc" | "price-desc">("popular");

  const filteredLaptops = useMemo(() => {
    return laptops.filter((laptop) => {
      // Search text match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        laptop.title.toLowerCase().includes(query) ||
        laptop.brand.toLowerCase().includes(query) ||
        laptop.specs.cpu.toLowerCase().includes(query) ||
        laptop.specs.gpu.toLowerCase().includes(query);

      // Category match
      const matchesCategory =
        selectedCategory === "all" || laptop.category === selectedCategory;

      // Brand match
      const matchesBrand =
        selectedBrand === "Barchasi" || laptop.brand.toLowerCase() === selectedBrand.toLowerCase();

      return matchesSearch && matchesCategory && matchesBrand;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
    });
  }, [laptops, searchQuery, selectedCategory, selectedBrand, sortBy]);

  return (
    <section id="katalog" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
            Bizning Kolleksiya
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Mavjud Noutbuklar Katalogi
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Top modellar, rasmiy kafolat va arzon narxlar kafolatlangan
          </p>
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <span>Saralash:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-1.5 text-white text-sm focus:outline-none focus:border-cyan-500"
          >
            <option value="popular">Mashhurligi bo&apos;yicha</option>
            <option value="price-asc">Narx: Arzondan qimmatga</option>
            <option value="price-desc">Narx: Qimmatdan arzonga</option>
          </select>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="space-y-4 mb-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Brand Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/60">
          <span className="text-xs text-slate-400 font-medium mr-2">Brendlar:</span>
          {BRANDS.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedBrand === brand
                  ? "bg-slate-700 text-cyan-300 border border-cyan-500/40"
                  : "bg-slate-900/60 text-slate-400 border border-slate-800/80 hover:text-slate-200"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* Results grid */}
      {filteredLaptops.length === 0 ? (
        <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800">
          <Icons.Laptop className="w-12 h-12 text-slate-500 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white">Mos keluvchi noutbuk topilmadi</h3>
          <p className="text-sm text-slate-400 mt-1 max-w-sm mx-auto">
            Qidiruv so&apos;zini o&apos;zgartirib ko&apos;ring yoki filtrlarni tozalang
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSelectedBrand("Barchasi");
            }}
            className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 text-sm font-semibold rounded-xl"
          >
            Filtrlarni bekor qilish
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredLaptops.map((laptop) => (
            <div
              key={laptop.id}
              className="flex flex-col bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 transition-all overflow-hidden group"
            >
              {/* Product Image */}
              <div
                onClick={() => onSelectLaptop(laptop)}
                className="relative aspect-4/3 bg-slate-950 overflow-hidden cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={laptop.image}
                  alt={laptop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                {laptop.badge && (
                  <div className="absolute top-3 left-3 bg-cyan-500/90 text-slate-950 font-bold text-[11px] px-2.5 py-0.5 rounded-full shadow-md">
                    {laptop.badge}
                  </div>
                )}

                {/* Stock Status */}
                <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-emerald-400 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Mavjud</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                    <span className="font-semibold text-slate-300 uppercase">{laptop.brand}</span>
                    <div className="flex items-center text-amber-400 gap-1">
                      <Icons.Star className="w-3.5 h-3.5" />
                      <span>{laptop.rating} ({laptop.reviewsCount})</span>
                    </div>
                  </div>

                  <h3
                    onClick={() => onSelectLaptop(laptop)}
                    className="font-bold text-base text-white hover:text-cyan-400 transition-colors cursor-pointer line-clamp-2 mb-3"
                  >
                    {laptop.title}
                  </h3>

                  {/* Quick specs chips */}
                  <div className="space-y-1.5 mb-4 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Icons.Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{laptop.specs.cpu}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icons.Memory className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{laptop.specs.ram}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icons.HardDrive className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{laptop.specs.storage}</span>
                    </div>
                  </div>
                </div>

                {/* Price and Action */}
                <div className="pt-3 border-t border-slate-800">
                  <div className="flex items-baseline justify-between mb-3">
                    <div>
                      <div className="text-xl font-black text-white">
                        ${laptop.price}
                      </div>
                      {laptop.oldPrice && (
                        <div className="text-xs text-slate-500 line-through">
                          ${laptop.oldPrice}
                        </div>
                      )}
                    </div>
                    <div className="text-[11px] text-right text-emerald-400 font-medium">
                      0% muddatli to&apos;lov <br />
                      <span className="font-bold">${Math.round(laptop.price / 12)}/oy</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectLaptop(laptop)}
                      className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-all text-center"
                    >
                      Batafsil
                    </button>
                    <button
                      onClick={() => onAddToCart(laptop)}
                      className="py-2 px-3 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-xs font-bold text-white transition-all flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/10"
                    >
                      <Icons.ShoppingBag className="w-3.5 h-3.5" />
                      <span>Savatga</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
