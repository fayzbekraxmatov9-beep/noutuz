"use client";

import React, { useState } from "react";
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
import { CartDrawer, CartItem } from "@/components/CartDrawer";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedLaptop, setSelectedLaptop] = useState<Laptop | null>(null);

  const handleAddToCart = (laptop: Laptop) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.laptop.id === laptop.id);
      if (existing) {
        return prev.map((item) =>
          item.laptop.id === laptop.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { laptop, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.laptop.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.laptop.id !== id));
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* Header */}
      <Navbar
        onSearch={setSearchQuery}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        <Hero />
        <Features />
        <LaptopCatalog
          laptops={LAPTOPS}
          searchQuery={searchQuery}
          onAddToCart={handleAddToCart}
          onSelectLaptop={setSelectedLaptop}
        />
        <InstallmentCalculator />
        <Reviews />
        <ContactAndConsultation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <LaptopDetailModal
        laptop={selectedLaptop}
        onClose={() => setSelectedLaptop(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCartItems([])}
      />
    </div>
  );
}
