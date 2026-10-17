"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { REVIEWS } from "@/data/storeData";
import { Review } from "@/types";
import { Icons } from "@/components/Icons";

const MORE_REVIEWS: Review[] = [
  ...REVIEWS,
  {
    id: "4",
    name: "Javohir Toshpo'latov",
    role: "Fullstack Web Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    comment: "Dell XPS 14 OLED oldim. Ekrani shunchaki mo''jiza, kod yozish paytida ko'z umuman charchamaydi. Dasturlarni bepul o'rnatib, drayverlarini sozlab berishdi. Xizmat ko'rsatish darajasi a'lo darajada!",
    laptopBought: "Dell XPS 14 9440 OLED"
  },
  {
    id: "5",
    name: "Madinabonu Karimova",
    role: "SMM & Kontent Creator",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    comment: "MacBook Air 15 M3 xarid qildim. Juda yengil, batareyasi bemalol 2 kunga yetadi, kafe va safarlarda video montaj qilishga juda qulay. Toshkent bo'yicha 1.5 soatda yetkazib berishdi!",
    laptopBought: "Apple MacBook Air 15\" (M3)"
  },
  {
    id: "6",
    name: "Bobur Mirzayev",
    role: "Kibersportchi & Streamer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    comment: "ASUS ROG Strix SCAR 18 — eng og'ir o'yinlarda ham FPS 180+ dan tushmayapti. Sovutish tizimi shovqinsiz va samarali. Noutuz jamoasiga kattakon rahmat, kafolat taloni bilan topshirishdi.",
    laptopBought: "ASUS ROG Strix SCAR 18"
  }
];

export default function FikrlarPage() {
  const [reviewsList, setReviewsList] = useState<Review[]>(MORE_REVIEWS);
  const [filterRating, setFilterRating] = useState<number | "all">("all");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    rating: 5,
    laptopBought: "",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const filteredReviews = filterRating === "all"
    ? reviewsList
    : reviewsList.filter((r) => r.rating === filterRating);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: Review = {
      id: Date.now().toString(),
      name: formData.name,
      role: formData.role || "Mijoz",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
      rating: Number(formData.rating),
      comment: formData.comment,
      laptopBought: formData.laptopBought || "Noutbuk xaridi",
    };

    setReviewsList([newReview, ...reviewsList]);
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setFormData({ name: "", role: "", rating: 5, laptopBought: "", comment: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Header Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900/60 to-slate-950 border-b border-slate-800 py-16">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <nav className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-4">
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Bosh sahifa
              </Link>
              <span>/</span>
              <span className="text-amber-400 font-semibold">Mijozlar Fikrlari</span>
            </nav>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Icons.Star className="w-4 h-4" />
              <span>4.9 / 5.0 O&apos;rtacha Baho (5,000+ Xarid)</span>
            </span>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
              Mijozlarimiz Nout.uz Haqida <br />
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Nima Deyishadi?
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Dasturchilar, dizaynerlar, arxitektorlar va geymerlarning haqiqiy fikrlari va tajribasi bilan tanishing.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={() => setShowModal(true)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 text-white font-bold text-sm shadow-xl shadow-cyan-500/20 transition-all flex items-center gap-2"
              >
                <span>O&apos;z fikringizni qoldiring</span>
                <Icons.Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Filters and Stats Strip */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-400">Baholar bo&apos;yicha:</span>
              <button
                onClick={() => setFilterRating("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filterRating === "all" ? "bg-cyan-500 text-slate-950" : "bg-slate-800 text-slate-300"
                }`}
              >
                Barchasi ({reviewsList.length})
              </button>
              <button
                onClick={() => setFilterRating(5)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  filterRating === 5 ? "bg-amber-500 text-slate-950" : "bg-slate-800 text-slate-300"
                }`}
              >
                <Icons.Star className="w-3.5 h-3.5" />
                <span>5 Yulduz</span>
              </button>
            </div>

            <div className="text-xs text-slate-400 flex items-center gap-2">
              <Icons.ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Barcha sharhlar haqiqiy xaridorlar tomonidan qoldirilgan</span>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all shadow-xl relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icons.Star key={i} className="w-4 h-4" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                      Tasdiqlangan xarid
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                <div>
                  <div className="inline-block px-2.5 py-1 rounded-md bg-slate-800/80 text-[11px] font-semibold text-cyan-400 border border-cyan-500/20 mb-4">
                    Xarid: {review.laptopBought}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-11 h-11 rounded-full object-cover border border-cyan-500/40"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white">{review.name}</h4>
                      <p className="text-xs text-slate-400">{review.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {/* Review Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
            >
              <Icons.X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Icons.Check className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white">Fikringiz uchun rahmat!</h3>
                <p className="text-xs text-slate-400">Sharhingiz ro&apos;yxatga muvaffaqiyatli qo&apos;shildi.</p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-2">Fikringizni Qoldiring</h3>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Ism Familiyangiz</label>
                  <input
                    type="text"
                    required
                    placeholder="Masalan: Azizbek"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Kasbingiz / Sohangiz</label>
                    <input
                      type="text"
                      placeholder="Masalan: Frontend Dev"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Baho (Yulduz)</label>
                    <select
                      value={formData.rating}
                      onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                      className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ 5 - A&apos;lo</option>
                      <option value={4}>⭐⭐⭐⭐ 4 - Yaxshi</option>
                      <option value={3}>⭐⭐⭐ 3 - Qoniqarli</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Xarid qilingan noutbuk</label>
                  <input
                    type="text"
                    placeholder="Masalan: MacBook Pro 16 yoki Legion Pro 7"
                    value={formData.laptopBought}
                    onChange={(e) => setFormData({ ...formData, laptopBought: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Izohingiz</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Xizmat ko'rsatish va noutbuk haqida fikringiz..."
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 text-white font-bold text-sm shadow-lg shadow-cyan-500/20"
                >
                  Fikrni chop etish
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
