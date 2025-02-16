import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/provider/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

const descriptions = {
  en: "A frontend developer who prioritizes user value, adapts to change, and strives for better user experiences.",
  ko: "사용자 가치를 최우선으로 생각하는 프론트엔드 개발자 김아람입니다. 변화에 유연하게 적응하며 더 나은 사용자 경험을 고민합니다.",
};

export const metadata: Metadata = {
  title: "Portfolio | Ahram Kim",
  description: descriptions.ko,
  icons: "/favicon/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body
        className={`relative w-full max-w-full h-full min-h-[100vh] text-dark bg-light dark:text-light dark:bg-dark ${inter.className} antialiased`}
      >
        <ThemeProvider>
          <div className="wrap relative max-w-3xl mx-auto px-7 py-9 md:py-14">
            <Header />
            <main id="main" className="relative">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
