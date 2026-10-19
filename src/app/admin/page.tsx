"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Icons } from "@/components/Icons";
import { Order, InstallmentApplication, ConsultationRequest, Laptop } from "@/types";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "orders" | "installments" | "consultations" | "add-laptop">("overview");
  const [stats, setStats] = useState<any>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [installments, setInstallments] = useState<InstallmentApplication[]>([]);
  const [consultations, setConsultations] = useState<ConsultationRequest[]>([]);
  const [loading, setLoading] = useState(true);

  // New Laptop Form State
  const [newLaptop, setNewLaptop] = useState({
    title: "",
    brand: "Apple",
    category: "gaming",
    price: "",
    oldPrice: "",
    badge: "Yangi",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    cpu: "",
    ram: "16 GB",
    storage: "512 GB SSD",
    gpu: "",
    display: "15.6\" FHD",
  });
  const [laptopSubmitSuccess, setLaptopSubmitSuccess] = useState(false);
  const [isSubmittingLaptop, setIsSubmittingLaptop] = useState(false);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const [resStats, resOrders, resInst, resCon] = await Promise.all([
        fetch("/api/stats").then((r) => r.json()),
        fetch("/api/orders").then((r) => r.json()),
        fetch("/api/installments").then((r) => r.json()),
        fetch("/api/consultations").then((r) => r.json()),
      ]);

      if (resStats.success) setStats(resStats.data);
      if (resOrders.success) setOrders(resOrders.data);
      if (resInst.success) setInstallments(resInst.data);
      if (resCon.success) setConsultations(resCon.data);
    } catch (e) {
      console.error("Admin fetch error:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const handleCreateLaptop = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingLaptop(true);
    try {
      const res = await fetch("/api/laptops", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newLaptop.title,
          brand: newLaptop.brand,
          category: newLaptop.category,
          price: Number(newLaptop.price),
          oldPrice: newLaptop.oldPrice ? Number(newLaptop.oldPrice) : undefined,
          badge: newLaptop.badge,
          image: newLaptop.image,
          specs: {
            cpu: newLaptop.cpu,
            ram: newLaptop.ram,
            storage: newLaptop.storage,
            gpu: newLaptop.gpu,
            display: newLaptop.display,
          },
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setLaptopSubmitSuccess(true);
        setNewLaptop({
          title: "",
          brand: "Apple",
          category: "gaming",
          price: "",
          oldPrice: "",
          badge: "Yangi",
          image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
          cpu: "",
          ram: "16 GB",
          storage: "512 GB SSD",
          gpu: "",
          display: "15.6\" FHD",
        });
        setTimeout(() => setLaptopSubmitSuccess(false), 3000);
        fetchAllData();
      }
    } catch (err) {
      console.error("Create laptop error:", err);
    } finally {
      setIsSubmittingLaptop(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      <Navbar showSearch={false} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
              <Link href="/" className="hover:text-cyan-400">Bosh sahifa</Link>
              <span>/</span>
              <span className="text-cyan-400 font-semibold">Admin Panel</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Nout.uz Boshqaruv Markazi (Backend Panel)
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchAllData}
              className="px-4 py-2 bg-slate-900 border border-slate-700 hover:border-cyan-500 text-xs font-semibold rounded-xl text-slate-200 transition-all flex items-center gap-1.5"
            >
              <span>Ma&apos;lumotlarni yangilash</span>
            </button>
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-400 font-bold">API Online</span>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap gap-2 pt-6 pb-8">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "overview"
                ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                : "bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700"
            }`}
          >
            Statistika & Umumiy
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "orders"
                ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                : "bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700"
            }`}
          >
            <span>Buyurtmalar</span>
            <span className="bg-slate-800 text-cyan-400 px-1.5 py-0.5 rounded text-[10px]">
              {orders.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab("installments")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "installments"
                ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                : "bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700"
            }`}
          >
            <span>Nasiya Arizalari</span>
            <span className="bg-slate-800 text-emerald-400 px-1.5 py-0.5 rounded text-[10px]">
              {installments.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab("consultations")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "consultations"
                ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                : "bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700"
            }`}
          >
            <span>Murojaatlar</span>
            <span className="bg-slate-800 text-amber-400 px-1.5 py-0.5 rounded text-[10px]">
              {consultations.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab("add-laptop")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "add-laptop"
                ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                : "bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700"
            }`}
          >
            <span>+ Noutbuk Qo&apos;shish</span>
          </button>
        </div>

        {loading ? (
          <div className="text-center py-20 text-slate-400">
            <p className="text-sm">Server ma&apos;lumotlari yuklanmoqda...</p>
          </div>
        ) : (
          <>
            {/* OVERVIEW TAB */}
            {activeTab === "overview" && stats && (
              <div className="space-y-8">
                {/* Metric cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
                    <p className="text-xs text-slate-400 font-semibold uppercase">Jami Daromad</p>
                    <p className="text-3xl font-black text-cyan-400 mt-2">${stats.totalRevenue}</p>
                    <p className="text-[11px] text-slate-500 mt-1">Muvaffaqiyatli buyurtmalar</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
                    <p className="text-xs text-slate-400 font-semibold uppercase">Buyurtmalar Soni</p>
                    <p className="text-3xl font-black text-white mt-2">{stats.totalOrders}</p>
                    <p className="text-[11px] text-slate-500 mt-1">Savatcha orqali rasmiylashtirilgan</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
                    <p className="text-xs text-slate-400 font-semibold uppercase">Nasiya Arizalari</p>
                    <p className="text-3xl font-black text-emerald-400 mt-2">{stats.totalInstallments}</p>
                    <p className="text-[11px] text-slate-500 mt-1">FinTech hamkorlar orqali</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
                    <p className="text-xs text-slate-400 font-semibold uppercase">Katalogdagi Noutbuklar</p>
                    <p className="text-3xl font-black text-indigo-400 mt-2">{stats.totalLaptops}</p>
                    <p className="text-[11px] text-slate-500 mt-1">Faol sotuvdagi modellar</p>
                  </div>
                </div>

                {/* API Endpoints Info */}
                <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Icons.Zap className="w-5 h-5 text-cyan-400" />
                    <span>Loyiha Ichidagi REST API Endpoints</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                      <span className="font-mono text-cyan-400 font-bold">GET /api/laptops</span>
                      <span className="text-slate-400">Noutbuklarni filtrlash va qidirish</span>
                    </div>
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                      <span className="font-mono text-emerald-400 font-bold">POST /api/orders</span>
                      <span className="text-slate-400">Yangi xarid buyurtmasini qabul qilish</span>
                    </div>
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                      <span className="font-mono text-emerald-400 font-bold">POST /api/installments</span>
                      <span className="text-slate-400">0% Muddatli to&apos;lov arizasini saqlash</span>
                    </div>
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                      <span className="font-mono text-amber-400 font-bold">POST /api/consultations</span>
                      <span className="text-slate-400">Maslahat va aloqa xabarlarini yozish</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ORDERS TAB */}
            {activeTab === "orders" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Xarid Buyurtmalari Ro&apos;yxati</h3>
                {orders.length === 0 ? (
                  <p className="text-sm text-slate-400">Hozircha buyurtmalar yo&apos;q.</p>
                ) : (
                  <div className="overflow-x-auto rounded-2xl border border-slate-800">
                    <table className="w-full text-left text-xs text-slate-300">
                      <thead className="bg-slate-900 uppercase text-slate-400 border-b border-slate-800">
                        <tr>
                          <th className="p-4">ID</th>
                          <th className="p-4">Mijoz</th>
                          <th className="p-4">Telefon</th>
                          <th className="p-4">Manzil</th>
                          <th className="p-4">To&apos;lov</th>
                          <th className="p-4">Jami</th>
                          <th className="p-4">Holat</th>
                          <th className="p-4">Vaqt</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 bg-slate-950/60">
                        {orders.map((ord) => (
                          <tr key={ord.id} className="hover:bg-slate-900/40">
                            <td className="p-4 font-mono font-bold text-cyan-400">{ord.id}</td>
                            <td className="p-4 font-semibold text-white">{ord.customerName}</td>
                            <td className="p-4">{ord.phone}</td>
                            <td className="p-4 max-w-xs truncate">{ord.address}</td>
                            <td className="p-4 uppercase text-slate-400">{ord.paymentType}</td>
                            <td className="p-4 font-bold text-white">${ord.totalPrice}</td>
                            <td className="p-4">
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                {ord.status}
                              </span>
                            </td>
                            <td className="p-4 text-slate-500">
                              {new Date(ord.createdAt).toLocaleDateString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* INSTALLMENTS TAB */}
            {activeTab === "installments" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">0% Nasiya Savdo Arizalari</h3>
                {installments.length === 0 ? (
                  <p className="text-sm text-slate-400">Arizalar mavjud emas.</p>
                ) : (
                  <div className="overflow-x-auto rounded-2xl border border-slate-800">
                    <table className="w-full text-left text-xs text-slate-300">
                      <thead className="bg-slate-900 uppercase text-slate-400 border-b border-slate-800">
                        <tr>
                          <th className="p-4">Ariza ID</th>
                          <th className="p-4">Mijoz</th>
                          <th className="p-4">Telefon</th>
                          <th className="p-4">Tizim</th>
                          <th className="p-4">Qiymat</th>
                          <th className="p-4">Muddat</th>
                          <th className="p-4">Oylik To&apos;lov</th>
                          <th className="p-4">Holat</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 bg-slate-950/60">
                        {installments.map((ins) => (
                          <tr key={ins.id} className="hover:bg-slate-900/40">
                            <td className="p-4 font-mono font-bold text-emerald-400">{ins.id}</td>
                            <td className="p-4 font-semibold text-white">{ins.customerName}</td>
                            <td className="p-4">{ins.phone}</td>
                            <td className="p-4 font-semibold text-cyan-300">{ins.provider}</td>
                            <td className="p-4 font-bold text-white">${ins.amount}</td>
                            <td className="p-4">{ins.months} oy</td>
                            <td className="p-4 font-bold text-emerald-400">${ins.monthlyPayment}/oy</td>
                            <td className="p-4">
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                {ins.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* CONSULTATIONS TAB */}
            {activeTab === "consultations" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Mijoz Murojaatlari va Maslahat So&apos;rovlari</h3>
                {consultations.length === 0 ? (
                  <p className="text-sm text-slate-400">Murojaatlar yo&apos;q.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {consultations.map((con) => (
                      <div key={con.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white text-sm">{con.name}</span>
                          <span className="font-mono text-cyan-400 text-xs font-semibold">{con.phone}</span>
                        </div>
                        <div className="flex gap-2 text-[11px]">
                          {con.category && (
                            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">{con.category}</span>
                          )}
                          {con.budget && (
                            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">{con.budget}</span>
                          )}
                        </div>
                        {con.message && (
                          <p className="text-xs text-slate-300 bg-slate-950 p-3 rounded-xl border border-slate-800/80 italic">
                            &ldquo;{con.message}&rdquo;
                          </p>
                        )}
                        <p className="text-[10px] text-slate-500">
                          {new Date(con.createdAt).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ADD LAPTOP TAB */}
            {activeTab === "add-laptop" && (
              <div className="max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Katalogga Yangi Noutbuk Qo&apos;shish</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Ushbu ma&apos;lumotlar to&apos;g&apos;ridan-to&apos;g&apos;ri backend ma&apos;lumotlar bazasiga (`db.json`) yoziladi.
                  </p>
                </div>

                {laptopSubmitSuccess && (
                  <div className="p-3 bg-emerald-500/20 text-emerald-300 rounded-xl border border-emerald-500/30 text-xs font-bold flex items-center gap-2">
                    <Icons.Check className="w-4 h-4" />
                    <span>Noutbuk muvaffaqiyatli qo&apos;shildi va katalogda ko&apos;rinadi!</span>
                  </div>
                )}

                <form onSubmit={handleCreateLaptop} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Noutbuk to&apos;liq nomi</label>
                    <input
                      type="text"
                      required
                      placeholder="Masalan: ASUS TUF Gaming A15 (2024)"
                      value={newLaptop.title}
                      onChange={(e) => setNewLaptop({ ...newLaptop, title: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Brend</label>
                      <select
                        value={newLaptop.brand}
                        onChange={(e) => setNewLaptop({ ...newLaptop, brand: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
                      >
                        <option>Apple</option>
                        <option>ASUS</option>
                        <option>Lenovo</option>
                        <option>Dell</option>
                        <option>HP</option>
                        <option>Acer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Kategoriya</label>
                      <select
                        value={newLaptop.category}
                        onChange={(e) => setNewLaptop({ ...newLaptop, category: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
                      >
                        <option value="gaming">Gaming (O&apos;yinlar)</option>
                        <option value="ultrabook">Ultrabuk (Ixcham)</option>
                        <option value="creative">Dizayn & 3D</option>
                        <option value="office">Biznes & Ofis</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Narxi ($)</label>
                      <input
                        type="number"
                        required
                        placeholder="1200"
                        value={newLaptop.price}
                        onChange={(e) => setNewLaptop({ ...newLaptop, price: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Eski narxi ($)</label>
                      <input
                        type="number"
                        placeholder="1350"
                        value={newLaptop.oldPrice}
                        onChange={(e) => setNewLaptop({ ...newLaptop, oldPrice: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Protsessor (CPU)</label>
                      <input
                        type="text"
                        required
                        placeholder="Intel Core i7-14700HX"
                        value={newLaptop.cpu}
                        onChange={(e) => setNewLaptop({ ...newLaptop, cpu: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Videokarta (GPU)</label>
                      <input
                        type="text"
                        required
                        placeholder="RTX 4060 8GB"
                        value={newLaptop.gpu}
                        onChange={(e) => setNewLaptop({ ...newLaptop, gpu: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmittingLaptop}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 disabled:opacity-50"
                  >
                    {isSubmittingLaptop ? "Qo'shilmoqda..." : "Noutbukni Saqlash (POST /api/laptops)"}
                  </button>
                </form>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
