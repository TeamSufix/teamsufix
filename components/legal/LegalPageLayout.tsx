import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";

import Container from "@/components/ui/Container";

interface LegalPageLayoutProps {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({
  eyebrow,
  title,
  description,
  updated,
  children,
}: LegalPageLayoutProps) {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-green-950 pb-24 pt-36 text-white md:pb-32 md:pt-44">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-green-500/15 blur-[140px]" />

          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-green-800/20 blur-[140px]" />

          {/* Grid */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.04]
              [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
              [background-size:64px_64px]
            "
          />
        </div>

        <Container>
          <div className="relative">
            {/* Breadcrumb */}
            <Link
              href="/"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-green-200/70
                transition
                hover:text-green-300
              "
            >
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />
              Back to Home
            </Link>

            {/* Header */}
            <div className="mt-12 max-w-4xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-green-300 backdrop-blur-md sm:text-sm">
                <ShieldCheck size={16} />
                {eyebrow}
              </div>

              <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                {title}
              </h1>

              <p className="mt-8 max-w-3xl text-base leading-8 text-green-100/70 sm:text-lg">
                {description}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-sm">
                <span className="text-green-100/50">Last updated</span>

                <span className="font-semibold text-green-300">{updated}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="relative overflow-hidden bg-green-50/40 py-20 md:py-28">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-green-200/40 blur-3xl" />

        <Container>
          <div className="relative grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start">
            {/* Sidebar */}
            <aside className="hidden lg:block lg:sticky lg:top-32">
              <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
                  Legal Information
                </p>

                <div className="mt-6 space-y-3 text-sm">
                  <Link
                    href="/privacy-policy"
                    className="block rounded-xl px-3 py-2 font-medium text-slate-500 transition hover:bg-green-50 hover:text-green-700"
                  >
                    Privacy Policy
                  </Link>

                  <Link
                    href="/terms"
                    className="block rounded-xl px-3 py-2 font-medium text-slate-500 transition hover:bg-green-50 hover:text-green-700"
                  >
                    Terms & Conditions
                  </Link>

                  <Link
                    href="/cookie-policy"
                    className="block rounded-xl px-3 py-2 font-medium text-slate-500 transition hover:bg-green-50 hover:text-green-700"
                  >
                    Cookie Policy
                  </Link>
                </div>

                <div className="mt-8 border-t border-slate-100 pt-6">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 text-sm font-bold text-green-700 transition hover:text-green-800"
                  >
                    Contact TeamSufix
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Article */}
            <article
              className="
                rounded-[32px]
                border
                border-green-100
                bg-white
                p-7
                shadow-[0_24px_80px_rgba(22,163,74,0.06)]
                sm:p-10
                md:p-14
                lg:p-16
              "
            >
              <div
                className="
                  space-y-14
                  text-slate-600

                  [&_section]:relative
                  [&_section]:border-b
                  [&_section]:border-slate-100
                  [&_section]:pb-14
                  last:[&_section]:border-0
                  last:[&_section]:pb-0

                  [&_h2]:relative
                  [&_h2]:pl-5
                  [&_h2]:text-2xl
                  [&_h2]:font-extrabold
                  [&_h2]:tracking-tight
                  [&_h2]:text-slate-900

                  [&_h2]:before:absolute
                  [&_h2]:before:left-0
                  [&_h2]:before:top-1
                  [&_h2]:before:h-7
                  [&_h2]:before:w-1
                  [&_h2]:before:rounded-full
                  [&_h2]:before:bg-green-600

                  md:[&_h2]:text-3xl

                  [&_h3]:font-bold
                  [&_h3]:text-slate-900

                  [&_p]:mt-5
                  [&_p]:leading-8

                  [&_ul]:mt-5
                  [&_ul]:list-disc
                  [&_ul]:space-y-3
                  [&_ul]:pl-6

                  [&_li]:leading-7
                  [&_li::marker]:text-green-600

                  [&_a]:font-semibold
                  [&_a]:text-green-700
                  [&_a]:underline-offset-4
                  [&_a]:hover:underline
                "
              >
                {children}
              </div>

              {/* Footer note */}
              <div className="mt-16 rounded-2xl border border-green-100 bg-green-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-700 text-white">
                    <ShieldCheck size={19} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Questions about this policy?
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      If you have questions about this document or how TeamSufix
                      handles information, please get in touch with our team.
                    </p>

                    <Link
                      href="/contact"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-green-700"
                    >
                      Contact Us
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
