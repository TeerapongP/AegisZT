import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "AegisZT Security Dashboard",
  description: "Zero-Trust & Mini-SIEM prototype with Next.js + Tailwind + Chart.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable} antialiased bg-gray-100 text-gray-900 dark:bg-slate-900 dark:text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
