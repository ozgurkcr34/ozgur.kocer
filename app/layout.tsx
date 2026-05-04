import type { Metadata } from "next";
import { Bebas_Neue, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Özgür KoçER — Berber Hassasiyetine Sahip Yazılımcı",
  description:
    "Yazılım ve berberlik zanaatını bir araya getiren, detaylara takıntılı bir profesyonel. Next.js, TypeScript, ve titiz el işçiliği.",
  keywords: ["Özgür KoçER", "yazılımcı", "berber", "portfolyo", "İstanbul", "frontend"],
  authors: [{ name: "Özgür KoçER" }],
  openGraph: {
    title: "Özgür KoçER — Berber Hassasiyetine Sahip Yazılımcı",
    description: "İki zanaat, tek disiplin. Kod ve kesim.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      data-scroll-behavior="smooth"
      className={`${bebasNeue.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
