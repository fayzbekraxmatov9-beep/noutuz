import React from "react";
import { Icons } from "./Icons";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Logo & About */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg">
                <Icons.Laptop className="w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                NOUT<span className="text-cyan-400">.UZ</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              O&apos;zbekistonda eng ishonchli, rasmiy kafolatli noutbuklar yetkazib beruvchisi. Apple, ASUS ROG, Lenovo Legion, Dell XPS modellarining eng so&apos;nggi avlodlari.
            </p>
            <div className="flex items-center gap-3 pt-2 text-slate-300">
              <a href="https://t.me" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/50 transition-all">
                <Icons.Send className="w-4 h-4" />
              </a>
              <a href="tel:+998972988788" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/50 transition-all">
                <Icons.Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Kategoriyalar
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#katalog" className="hover:text-cyan-400 transition-colors">Gaming Noutbuklar</a></li>
              <li><a href="#katalog" className="hover:text-cyan-400 transition-colors">Ultrabuklar</a></li>
              <li><a href="#katalog" className="hover:text-cyan-400 transition-colors">MacBook modellar</a></li>
              <li><a href="#katalog" className="hover:text-cyan-400 transition-colors">Biznes noutbuklar</a></li>
              <li><a href="#katalog" className="hover:text-cyan-400 transition-colors">Aksessuarlar</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Xizmatlar
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#muddatli-tolov" className="hover:text-cyan-400 transition-colors">0% Muddatli to&apos;lov</a></li>
              <li><a href="#afzalliklar" className="hover:text-cyan-400 transition-colors">Rasmiy kafolat</a></li>
              <li><a href="#afzalliklar" className="hover:text-cyan-400 transition-colors">Yetkazib berish</a></li>
              <li><a href="#aloqa" className="hover:text-cyan-400 transition-colors">Dasturiy xizmatlar</a></li>
              <li><a href="#aloqa" className="hover:text-cyan-400 transition-colors">Trade-in (Eskisini yangilash)</a></li>
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Bog&apos;lanish
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <p className="text-white font-medium">+998 (97) 298-87-88</p>
              <p className="text-white font-medium">+998 (97) 298-87-88</p>
              <p className="text-slate-400">info@nout.uz</p>
              <p className="text-slate-400">Toshkent, Malika A-22</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; 2026 Nout.uz — Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Maxfiylik siyosati</a>
            <a href="#" className="hover:underline">Foydalanish shartlari</a>
            <a href="#" className="hover:underline">Ommaviy oferta</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
