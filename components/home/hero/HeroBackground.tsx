// export default function HeroBackground() {
//   return (
//     <>
//       {/* Main Gradient */}
//       <div className="absolute inset-0 -z-30 bg-gradient-to-br from-white via-green-50 to-green-100" />

//       {/* Grid */}
//       <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(22,163,74,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(22,163,74,0.05)_1px,transparent_1px)] bg-[size:44px_44px]" />

//       {/* Left Blob */}
//       <div className="absolute -left-32 top-24 -z-10 h-[420px] w-[420px] rounded-full bg-green-300/30 blur-[120px]" />

//       {/* Right Blob */}
//       <div className="absolute -right-40 bottom-10 -z-10 h-[520px] w-[520px] rounded-full bg-lime-300/25 blur-[140px]" />

//       {/* Top Glow */}
//       <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-green-400/10 blur-[120px]" />

//       {/* Blueprint Lines */}
//       <div className="absolute inset-0 -z-10 opacity-20">
//         <svg
//           className="h-full w-full"
//           preserveAspectRatio="none"
//           viewBox="0 0 1200 800"
//         >
//           <path
//             d="M0 400 H1200"
//             stroke="#22c55e"
//             strokeDasharray="8 8"
//             strokeWidth="1"
//           />

//           <path
//             d="M600 0 V800"
//             stroke="#22c55e"
//             strokeDasharray="8 8"
//             strokeWidth="1"
//           />

//           <circle
//             cx="600"
//             cy="400"
//             r="220"
//             stroke="#16a34a"
//             strokeWidth="1"
//             fill="none"
//             strokeDasharray="10 8"
//           />
//         </svg>
//       </div>
//     </>
//   );
// }

export default function HeroBackground() {
  return (
    <>
      {/* Main Background */}

      <div className="absolute inset-0 -z-30 bg-gradient-to-br from-white via-green-50 to-green-100" />

      {/* Technical Grid */}

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(22,163,74,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(22,163,74,0.045)_1px,transparent_1px)] bg-[size:44px_44px]" />

      {/* Left Glow */}

      <div className="absolute -left-32 top-24 -z-10 h-[420px] w-[420px] rounded-full bg-green-300/30 blur-[120px]" />

      {/* Right Glow */}

      <div className="absolute -right-40 bottom-10 -z-10 h-[520px] w-[520px] rounded-full bg-lime-300/25 blur-[140px]" />

      {/* Top Glow */}

      <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-green-400/10 blur-[120px]" />

      {/* Blueprint Lines */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-20">
        <svg
          className="h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 800"
        >
          <path
            d="M0 400 H1200"
            stroke="#22c55e"
            strokeDasharray="8 8"
            strokeWidth="1"
          />

          <path
            d="M600 0 V800"
            stroke="#22c55e"
            strokeDasharray="8 8"
            strokeWidth="1"
          />

          <circle
            cx="600"
            cy="400"
            r="220"
            fill="none"
            stroke="#16a34a"
            strokeDasharray="10 8"
            strokeWidth="1"
          />
        </svg>
      </div>
    </>
  );
}