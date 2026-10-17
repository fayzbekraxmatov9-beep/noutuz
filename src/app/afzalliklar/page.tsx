import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FEATURES } from "@/data/storeData";
import { Icons } from "@/components/Icons";

export const metadata = {
  title: "Afzalliklarimiz — Nout.uz noutbuklar do'koni",
  description: "Nima uchun 5000 dan ortiq mijozlar Nout.uz ni tanlaydi? Rasmiy kafolat, bepul dasturlar, 0% nasiya va tezkor yetkazib berish.",
};

const DETAILED_BENEFITS = [
  {
    id: "guarantee",
    title: "1-2 Yillik Rasmiy Kafolat va Servis",
    badge: "100% Xavfsiz",
    description:
      "Barcha noutbuklarimiz original zavod qutisida, ochilmagan va sertifikatlangan holda yetkaziladi. Kafolat muddati davomida har qanday texnik nosozliklar bizning professional servis markazimiz tomonidan bepul bartaraf etiladi.",
    points: [
      "Zavod nosozliklariga to'liq almashtirish yoki bepul ta'mirlash",
      "Kafolat taloni va fiskal chek rasmiy taqdim etiladi",
      "Rasmiy servis markazlarida sertifikatlangan ustalar xizmati",
    ],
    icon: "ShieldCheck",
    color: "from-cyan-500/20 to-blue-500/10",
  },
  {
    id: "delivery",
    title: "Tezkor va Butun Respublika Bo'ylab Bepul Yetkazish",
    badge: "Toshkentda 2 Soatda",
    description:
      "Biz sizning vaqtingizni qadrlaymiz. Toshkent shahri bo'yicha buyurtmangiz 2 soat ichida kuryer tomonidan yetkaziladi. Viloyatlarga esa BTS yoki Fargo orqali 24 soat ichida eshigingizgacha xavfsiz qilib topshiriladi.",
    points: [
      "Toshkent shahri ichida tezkor 2 soatlik ekspress yetkazib berish",
      "Viloyat markazlari va tumanlarga 24 soat ichida bepul yetkazish",
      "Mahsulotni qabul qilib olib, tekshirib ko'rgandan so'ng to'lov qilish imkoniyati",
    ],
    icon: "Truck",
    color: "from-blue-500/20 to-indigo-500/10",
  },
  {
    id: "installments",
    title: "Halol Muddatli To'lov — 0% Foiz va Ortiqcha Hujjatsiz",
    badge: "0% Nasiya",
    description:
      "Katta xarajatlarni birdaniga to'lash shart emas. 3 oydan 12 oygacha foizsiz va hech qanday komissiyalarsiz muddatli to'lovga xarid qiling.",
    points: [
      "Faqat bitta pasport (ID karta) va telefon raqam kifoya",
      "15 daqiqa ichida onlayn skoring va tasdiqlash",
      "Uzum Nasiya, Iman Pay, Alif va Anorbank orqali qulay to'lov",
    ],
    icon: "CreditCard",
    color: "from-emerald-500/20 to-teal-500/10",
  },
  {
    id: "software",
    title: "Professional Dasturiy Ta'minot va Sozlash (Bepul)",
    badge: "Bepul Bonus",
    description:
      "Yangi noutbuk xarid qilganingizda uni ishlatishga tayyor holga keltirish vaqt olmasligi uchun barcha dasturlarni bizning IT-mutaxassislar bepul o'rnatib berishadi.",
    points: [
      "Litsenziyali Windows 11 Pro / macOS toza o'rnatish",
      "Microsoft Office, brauzerlar, arxivatorlar va drayverlar to'plami",
      "Dasturchilar va dizaynerlar uchun kerakli muhitni sozlash ko'magi",
    ],
    icon: "Wrench",
    color: "from-amber-500/20 to-orange-500/10",
  },
  {
    id: "tradein",
    title: "Trade-In — Eski Noutbukingizni Yangisiga Almashtiring",
    badge: "Foydali Almashuv",
    description:
      "Eski noutbukingiz chang bosib yotmasin. Uni Nout.uz do'koniga olib keling, mutaxassislarimiz uning bozor narxini baholab, yangi model qiymatidan chegirib berishadi.",
    points: [
      "10 daqiqada xolis va adolatli texnik diagnostika",
      "Qolgan farqni naqd, karta yoki muddatli to'lovga rasmiylashtirish",
      "Ma'lumotlarni eski noutbukdan yangisiga xavfsiz ko'chirish",
    ],
    icon: "Laptop",
    color: "from-purple-500/20 to-pink-500/10",
  },
  {
    id: "support",
    title: "24/7 Doimiy Texnik Maslahat va Qo'llab-quvvatlash",
    badge: "Doimiy Aloqa",
    description:
      "Sotib olgandan keyin ham biz doim siz bilanmiz. Noutbukdan foydalanishda savollar tug'ilsa, istalgan payt Telegram orqali mutaxassislarimizga murojaat qilishingiz mumkin.",
    points: [
      "Do'kon menejerlari emas, haqiqiy IT muhandislardan maslahat",
      "Masofadan AnyDesk / TeamViewer orqali yordam ko'rsatish",
      "Telegram va telefon orqali tezkor javoblar",
    ],
    icon: "Zap",
    color: "from-cyan-500/20 to-emerald-500/10",
  },
];

export default function AfzalliklarPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <Icons.ShieldCheck className="w-8 h-8 text-cyan-400" />;
      case "Truck":
        return <Icons.Truck className="w-8 h-8 text-blue-400" />;
      case "CreditCard":
        return <Icons.CreditCard className="w-8 h-8 text-emerald-400" />;
      case "Wrench":
        return <Icons.Wrench className="w-8 h-8 text-amber-400" />;
      case "Laptop":
        return <Icons.Laptop className="w-8 h-8 text-purple-400" />;
      default:
        return <Icons.Zap className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Header Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900/60 to-slate-950 border-b border-slate-800 py-16">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <nav className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-4">
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Bosh sahifa
              </Link>
              <span>/</span>
              <span className="text-cyan-400 font-semibold">Afzalliklarimiz</span>
            </nav>

            <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
              Nout.uz Standartlari
            </span>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
              Nega Aynan Bizni <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                5,000+ Mijozlar Tanlaydi?
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Biz shunchaki noutbuk sotmaymiz, balki sizning ishingiz, o&apos;qishingiz va ijodingiz uchun eng to&apos;g&apos;ri texnik yechim hamda ishonchli kafolatni taqdim etamiz.
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DETAILED_BENEFITS.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-slate-800/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(item.icon)}
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-800 text-cyan-400 border border-cyan-500/30">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bullets */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                  {item.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Icons.Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to action section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-slate-900 to-blue-950/60 border border-cyan-500/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Sizga mos noutbukni hoziroq tanlang!
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Katalogimizda dasturchilar, dizaynerlar va o&apos;yin ishqibozlari uchun eng sara modellar rasmiy kafolati bilan kutmoqda.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/katalog"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Katalogga O&apos;tish</span>
                <Icons.ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#aloqa"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-sm transition-all"
              >
                Mutaxassisdan maslahat olish
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
