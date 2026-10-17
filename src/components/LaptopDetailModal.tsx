"use client";

import React, { useState } from "react";
import { Laptop } from "@/types";
import { Icons } from "./Icons";

interface LaptopDetailModalProps {
  laptop: Laptop | null;
  onClose: () => void;
  onAddToCart: (laptop: Laptop) => void;
}

export const LaptopDetailModal: React.FC<LaptopDetailModalProps> = ({
  laptop,
  onClose,
  onAddToCart,
}) => {
  const [activeTab, setActiveTab] = useState<"specs" | "guarantee">("specs");

  if (!laptop) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-all"
        >
          <Icons.X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Laptop Image Side */}
          <div className="relative bg-slate-950 p-6 flex flex-col justify-center items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={laptop.image}
              alt={laptop.title}
              className="w-full max-h-72 object-contain rounded-xl"
            />
            {laptop.badge && (
              <span className="mt-4 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold px-3 py-1 rounded-full">
                {laptop.badge}
              </span>
            )}
          </div>

          {/* Laptop Info Side */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-cyan-400 mb-1">
                <span>{laptop.brand}</span>
                <span>•</span>
                <span className="text-slate-400">{laptop.category}</span>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                {laptop.title}
              </h2>

              <div className="flex items-center gap-2 mb-4 text-xs">
                <div className="flex text-amber-400">
                  <Icons.Star className="w-4 h-4" />
                </div>
                <span className="font-semibold text-white">{laptop.rating}</span>
                <span className="text-slate-400">({laptop.reviewsCount} ta sharh)</span>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-slate-800 mb-4 text-sm font-semibold">
                <button
                  onClick={() => setActiveTab("specs")}
                  className={`pb-2 mr-4 border-b-2 transition-all ${
                    activeTab === "specs"
                      ? "border-cyan-400 text-cyan-400"
                      : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Xususiyatlar
                </button>
                <button
                  onClick={() => setActiveTab("guarantee")}
                  className={`pb-2 border-b-2 transition-all ${
                    activeTab === "guarantee"
                      ? "border-cyan-400 text-cyan-400"
                      : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Kafolat va Yetkazish
                </button>
              </div>

              {/* Tab Contents */}
              {activeTab === "specs" ? (
                <div className="space-y-2.5 text-xs text-slate-300 mb-6">
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Protsessor (CPU):</span>
                    <span className="font-semibold text-white">{laptop.specs.cpu}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Tezkor xotira (RAM):</span>
                    <span className="font-semibold text-white">{laptop.specs.ram}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Doimiy xotira (SSD):</span>
                    <span className="font-semibold text-white">{laptop.specs.storage}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Videokarta (GPU):</span>
                    <span className="font-semibold text-white">{laptop.specs.gpu}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Displey:</span>
                    <span className="font-semibold text-white">{laptop.specs.display}</span>
                  </div>
                  {laptop.specs.battery && (
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Batareya quvvati:</span>
                      <span className="font-semibold text-white">{laptop.specs.battery}</span>
                    </div>
                  )}
                  {laptop.specs.weight && (
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Vazni:</span>
                      <span className="font-semibold text-white">{laptop.specs.weight}</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-3 text-xs text-slate-300 mb-6">
                  <div className="p-3 bg-slate-800/60 rounded-xl">
                    <p className="font-bold text-white mb-1 flex items-center gap-1.5">
                      <Icons.ShieldCheck className="w-4 h-4 text-cyan-400" />
                      1 Yillik Rasmiy Kafolat
                    </p>
                    <p className="text-slate-400">
                      Zavod nosozliklariga to&apos;liq servis markazi kafolati beriladi.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-800/60 rounded-xl">
                    <p className="font-bold text-white mb-1 flex items-center gap-1.5">
                      <Icons.Truck className="w-4 h-4 text-blue-400" />
                      Bepul Yetkazib Berish
                    </p>
                    <p className="text-slate-400">
                      Toshkent shahrida buyurtma berilgan kuni, viloyatlarga 1 kunda yetkaziladi.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-800/60 rounded-xl">
                    <p className="font-bold text-white mb-1 flex items-center gap-1.5">
                      <Icons.Wrench className="w-4 h-4 text-amber-400" />
                      Bepul Dasturiy Paket
                    </p>
                    <p className="text-slate-400">
                      Windows 11 Pro, Office va kerakli barcha drayverlar o&apos;rnatib beriladi.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom Action */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400">Narxi:</span>
                <p className="text-2xl font-black text-white">${laptop.price}</p>
              </div>

              <button
                onClick={() => {
                  onAddToCart(laptop);
                  onClose();
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <Icons.ShoppingBag className="w-4 h-4" />
                <span>Savatga qo&apos;shish</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
