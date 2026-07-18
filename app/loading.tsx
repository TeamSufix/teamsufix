import Logo from "@/components/ui/Logo";

export default function Loading() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-300/20 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-green-500/20 blur-3xl" />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(22,163,74,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(22,163,74,0.08)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6">
        {/* Logo */}
        <div className="animate-pulse">
          <Logo size={70} />
        </div>

        {/* Company Name */}
        <h1 className="mt-8 bg-gradient-to-r from-green-800 via-green-600 to-lime-500 bg-clip-text text-4xl font-extrabold text-transparent">
          TeamSufix
        </h1>

        <p className="mt-3 text-center text-gray-600">
          Imagine. Design. Develop. Deliver.
        </p>

        {/* Loading Bar */}
        <div className="mt-12 h-2 w-full overflow-hidden rounded-full bg-green-100">
          <div className="loading-bar h-full rounded-full bg-gradient-to-r from-green-700 via-green-500 to-lime-400" />
        </div>

        <p className="mt-5 text-sm tracking-widest text-gray-500 uppercase">
          Initializing Platform...
        </p>
      </div>
    </main>
  );
}
