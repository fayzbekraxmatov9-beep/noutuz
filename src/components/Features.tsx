import React from "react";
import { FEATURES } from "@/data/storeData";
import { Icons } from "./Icons";

export const Features: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <Icons.ShieldCheck className="w-7 h-7 text-cyan-400" />;
      case "Truck":
        return <Icons.Truck className="w-7 h-7 text-blue-400" />;
      case "CreditCard":
        return <Icons.CreditCard className="w-7 h-7 text-emerald-400" />;
      case "Wrench":
        return <Icons.Wrench className="w-7 h-7 text-amber-400" />;
      default:
        return <Icons.Zap className="w-7 h-7 text-cyan-400" />;
    }
  };

  return (
    <section id="afzalliklar" className="py-16 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">
            Nega aynan Nout.uz?
          </h2>
          <p className="text-3xl font-bold text-white tracking-tight sm:text-4xl">
            Sizga qulay va xavfsiz xarid qilish imkoniyati
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-800/80 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {getIcon(feature.icon)}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
