import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import PageWrapper from "@/components/layout/PageWrapper";

import OrganizationSchema from "@/components/seo/OrganizationSchema";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teamsufix.com"),

  title: {
    default: "TeamSufix | Consulting & Engineering",
    template: "%s | TeamSufix",
  },

  description:
    "TeamSufix.System Consulting & Engineering delivers innovative technology, engineering, architecture, construction and consulting solutions across Africa.",

  keywords: [
    "TeamSufix",
    "TeamSufix System",
    "Consulting and Engineering",
    "Software Development Ghana",
    "Engineering Ghana",
    "Architecture Ghana",
    "Construction Ghana",
    "Digital Transformation",
    "Technology Consulting",
  ],

  authors: [
    {
      name: "TeamSufix.System Consulting & Engineering",
    },
  ],

  creator: "TeamSufix.System Consulting & Engineering",

  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://teamsufix.com",
    siteName: "TeamSufix",
    title: "TeamSufix | Consulting & Engineering",
    description:
      "Integrated technology, engineering, architecture, construction and consulting solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TeamSufix.System Consulting & Engineering",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TeamSufix | Consulting & Engineering",
    description:
      "Integrated technology, engineering, architecture, construction and consulting solutions.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${manrope.variable}
          ${inter.variable}
          min-h-screen
          bg-white
          font-body
          antialiased
        `}
      >
        <OrganizationSchema />

        <Navbar />

        <main>
          <PageWrapper>{children}</PageWrapper>
        </main>

        <Footer />

        <ScrollToTop />
      </body>
    </html>
  );
}
