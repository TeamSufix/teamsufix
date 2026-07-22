// "use client";

// import { useState } from "react";
// import { Menu } from "lucide-react";

// import Container from "@/components/ui/Container";
// import Logo from "@/components/ui/Logo";

// import NavLinks from "./NavLinks";
// import NavbarCTA from "./NavbarCTA";
// import MobileMenu from "./MobileMenu";

// import useScroll from "@/hooks/useScroll";

// export default function Navbar() {
//   const scrolled = useScroll();
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <header
//         className={`
//           fixed
//           inset-x-0
//           top-0
//           z-50
//           transition-all
//           duration-500
//           ${
//             scrolled
//               ? `
//                 border-b
//                 border-[var(--border)]
//                 bg-white/80
//                 backdrop-blur-2xl
//                 shadow-[0_10px_35px_rgba(15,23,42,.08)]
//               `
//               : "bg-transparent"
//           }
//         `}
//       >
//         <Container>
//           <div className="flex h-20 items-center justify-between">
//             <Logo />

//             <NavLinks />

//             <div className="hidden lg:block">
//               <NavbarCTA />
//             </div>

//             <button
//               onClick={() => setOpen(true)}
//               className="
//                 lg:hidden
//                 flex
//                 h-11
//                 w-11
//                 items-center
//                 justify-center
//                 rounded-xl
//                 border
//                 border-[var(--border)]
//                 bg-white/80
//                 backdrop-blur
//                 transition-all
//                 hover:bg-[var(--background-soft)]
//               "
//             >
//               <Menu size={22} />
//             </button>
//           </div>
//         </Container>
//       </header>

//       <MobileMenu open={open} onClose={() => setOpen(false)} />
//     </>
//   );
// }

"use client";

import { useState } from "react";

import { Menu } from "lucide-react";

import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

import useScroll from "@/hooks/useScroll";

import MobileMenu from "./MobileMenu";
import NavbarCTA from "./NavbarCTA";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const scrolled = useScroll();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-50
          transition-all
          duration-500
          ${
            scrolled
              ? "border-b border-slate-200/70 bg-white/80 shadow-[0_10px_35px_rgba(15,23,42,.08)] backdrop-blur-2xl"
              : "bg-transparent"
          }
        `}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Logo />

            <NavLinks />

            <div className="hidden lg:block">
              <NavbarCTA />
            </div>

            <button
              type="button"
              aria-label="Open navigation menu"
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-800 backdrop-blur transition-all hover:border-green-300 hover:bg-green-50 lg:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}