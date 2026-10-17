import React from "react";
import { REVIEWS } from "@/data/storeData";
import { Icons } from "./Icons";

export const Reviews: React.FC = () => {
  return (
    <section id="fikrlar" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
          Ishonchli Hamkor
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
          Mijozlarimiz Nima Deydi?
        </h2>
        <p className="text-sm text-slate-400 mt-2">
          Dasturchilar, dizaynerlar va geymerlar Nout.uz ni nima sababdan tanlashadi
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {REVIEWS.map((review) => (
          <div
            key={review.id}
            className="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all shadow-xl relative"
          >
            <div>
              {/* Rating stars */}
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Icons.Star key={i} className="w-4 h-4" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                &ldquo;{review.comment}&rdquo;
              </p>
            </div>

            <div>
              {/* Product tag */}
              <div className="inline-block px-2.5 py-1 rounded-md bg-slate-800/80 text-[11px] font-semibold text-cyan-400 border border-cyan-500/20 mb-4">
                Xarid qilingan: {review.laptopBought}
              </div>

              {/* Reviewer info */}
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
  );
};
