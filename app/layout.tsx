import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import PageWrapper from "@/components/layout/PageWrapper";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "TeamSufix | Consulting & Engineering",
  description:
    "TeamSufix.System Consulting & Engineering delivers innovative technology, engineering, architecture, construction, architecture and consulting solutions across Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${inter.variable} min-h-screen bg-white font-body antialiased`}
      >
        <Navbar />

        <PageWrapper>{children}</PageWrapper>

        <Footer />

        <ScrollToTop />
      </body>
    </html>
  );
}
