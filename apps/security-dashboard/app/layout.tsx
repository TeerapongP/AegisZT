import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "AegisZT Security Dashboard",
  description:
    "Zero-Trust & Mini-SIEM prototype with Next.js + Tailwind + Chart.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="tw-h-full" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} tw-antialiased tw-min-h-screen tw-bg-gray-100 tw-text-gray-900 dark:tw-bg-slate-900 dark:tw-text-gray-100`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
