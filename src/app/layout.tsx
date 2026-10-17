import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nout.uz — Toshkent va O'zbekistonda Original Noutbuklar Do'koni",
  description: "Apple, ASUS, Lenovo, Dell, HP noutbuklarining rasmiy kafolatli savdosi. Bepul yetkazib berish, 0% muddatli to'lov va professional servis xizmati.",
  keywords: "noutbuklar, noutbuk narxlari, macbook toshkent, gaming noutbuk, lenovo legion, asus rog, noutuz",
  openGraph: {
    title: "Nout.uz — Zamonaviy Noutbuklar Ekosistemasi",
    description: "Sifatli va kafolatli noutbuklar qulay narxlarda. Toshkentda 2 soatda tez yetkazish.",
    type: "website",
    locale: "uz_UZ"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
