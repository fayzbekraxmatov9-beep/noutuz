"use client";

import React, { useState } from "react";
import { Laptop } from "@/types";
import { Icons } from "./Icons";

export interface CartItem {
  laptop: Laptop;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "form" | "success">("cart");
  const [clientInfo, setClientInfo] = useState({
    name: "",
    phone: "+998 ",
    address: "",
    paymentType: "payme",
  });

  if (!isOpen) return null;

  const totalPrice = items.reduce(
    (sum, item) => sum + item.laptop.price * item.quantity,
    0
  );

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep("success");
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Icons.ShoppingBag className="w-5 h-5 text-cyan-400" />
              <h2 className="text-lg font-bold text-white">Savatcha ({items.length})</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <Icons.X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto py-4">
            {checkoutStep === "success" ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Icons.Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Buyurtmangiz qabul qilindi!</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Operatorimiz tez orada siz bilan bog&apos;lanib, yetkazib berish vaqtini tasdiqlaydi.
                </p>
                <button
                  onClick={() => {
                    setCheckoutStep("cart");
                    onClose();
                  }}
                  className="px-6 py-2.5 bg-cyan-500 text-slate-950 font-bold text-xs rounded-xl"
                >
                  Yopish
                </button>
              </div>
            ) : checkoutStep === "form" ? (
              <form onSubmit={handleOrder} className="space-y-4">
                <h3 className="text-base font-bold text-white">Yetkazib berish ma&apos;lumotlari</h3>
                
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Ismingiz</label>
                  <input
                    type="text"
                    required
                    value={clientInfo.name}
                    onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white"
                    placeholder="Ismingizni kiriting"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Telefon raqam</label>
                  <input
                    type="text"
                    required
                    value={clientInfo.phone}
                    onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Yetkazish manzili (Toshkent / Viloyat)</label>
                  <textarea
                    required
                    rows={2}
                    value={clientInfo.address}
                    onChange={(e) => setClientInfo({ ...clientInfo, address: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white"
                    placeholder="Shahar, tuman, ko'cha, xonadon"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">To&apos;lov usuli</label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setClientInfo({ ...clientInfo, paymentType: "cash" })}
                      className={`p-2 rounded-lg border text-center ${clientInfo.paymentType === "cash" ? "border-cyan-500 bg-cyan-500/10 text-cyan-400 font-bold" : "border-slate-800 text-slate-400"}`}
                    >
                      Yetkazganda naqd / karta
                    </button>
                    <button
                      type="button"
                      onClick={() => setClientInfo({ ...clientInfo, paymentType: "payme" })}
                      className={`p-2 rounded-lg border text-center ${clientInfo.paymentType === "payme" ? "border-cyan-500 bg-cyan-500/10 text-cyan-400 font-bold" : "border-slate-800 text-slate-400"}`}
                    >
                      Payme / Click / Uzum
                    </button>
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setCheckoutStep("cart")}
                    className="w-1/3 py-2.5 rounded-xl bg-slate-800 text-xs font-semibold text-slate-300"
                  >
                    Orqaga
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-2.5 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 font-bold text-xs text-white"
                  >
                    Buyurtmani tasdiqlash
                  </button>
                </div>
              </form>
            ) : items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <Icons.ShoppingBag className="w-12 h-12 text-slate-600 mx-auto" />
                <p className="text-sm text-slate-400">Savatchangiz bo&apos;sh</p>
                <p className="text-xs text-slate-500">Katalogdan o&apos;zingizga yoqqan noutbukni tanlang</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map(({ laptop, quantity }) => (
                  <div
                    key={laptop.id}
                    className="flex gap-3 p-3 bg-slate-950/80 rounded-xl border border-slate-800 items-center"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={laptop.image}
                      alt={laptop.title}
                      className="w-16 h-14 object-cover rounded-lg bg-slate-900"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-white truncate">{laptop.title}</h4>
                      <p className="text-xs text-cyan-400 font-semibold">${laptop.price}</p>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(laptop.id, -1)}
                          className="w-5 h-5 rounded bg-slate-800 text-slate-300 flex items-center justify-center text-xs hover:bg-slate-700"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold text-white">{quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(laptop.id, 1)}
                          className="w-5 h-5 rounded bg-slate-800 text-slate-300 flex items-center justify-center text-xs hover:bg-slate-700"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(laptop.id)}
                      className="p-1.5 text-slate-500 hover:text-rose-400"
                    >
                      <Icons.X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer of Drawer */}
          {checkoutStep === "cart" && items.length > 0 && (
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Jami summa:</span>
                <span className="font-extrabold text-lg text-white">${totalPrice}</span>
              </div>
              <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                <Icons.Truck className="w-3.5 h-3.5" />
                Yetkazib berish bepul!
              </p>
              <button
                onClick={() => setCheckoutStep("form")}
                className="w-full py-3 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 hover:from-cyan-400 transition-all"
              >
                Buyurtma rasmiylashtirish &rarr;
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
