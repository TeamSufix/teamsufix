import Container from "@/components/ui/Container";

export default function QuoteHeader() {
  return (
    <section className="relative isolate overflow-hidden bg-green-950 pb-24 pt-36 text-white md:pb-32 md:pt-44">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main glow */}
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-green-500/20 blur-[140px]" />

        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-green-800/30 blur-[140px]" />

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

        {/* Gradient fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-green-950 to-transparent" />
      </div>

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-green-400/30 bg-green-400/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-green-300 shadow-lg shadow-green-950/20 backdrop-blur-md sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_14px_rgba(74,222,128,0.9)]" />
            Start a Conversation
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Have a project
            <span className="block text-green-400">in mind?</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-green-100/70 sm:text-lg">
            Tell us about your project, goals and requirements. We will help you
            explore the right path from idea to execution.
          </p>

          {/* Bottom trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-green-100/50">
            <span>Digital Solutions</span>
            <span className="hidden h-1 w-1 rounded-full bg-green-400/60 sm:block" />
            <span>Engineering</span>
            <span className="hidden h-1 w-1 rounded-full bg-green-400/60 sm:block" />
            <span>Architecture</span>
            <span className="hidden h-1 w-1 rounded-full bg-green-400/60 sm:block" />
            <span>Construction</span>
            <span className="hidden h-1 w-1 rounded-full bg-green-400/60 sm:block" />
            <span>Consulting</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
