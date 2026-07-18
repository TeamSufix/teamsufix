"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

import NavLinks from "./NavLinks";
import NavbarCTA from "./NavbarCTA";
import MobileMenu from "./MobileMenu";

import useScroll from "@/hooks/useScroll";

export default function Navbar() {
  const scrolled = useScroll();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-green-100 bg-white/80 shadow-lg backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <Container className="flex h-20 items-center justify-between">
          <Logo />

          <NavLinks />

          <div className="hidden lg:block">
            <NavbarCTA />
          </div>

          <button
            onClick={() => setOpen(true)}
            className="rounded-xl p-2 transition hover:bg-green-50 lg:hidden"
          >
            <Menu />
          </button>
        </Container>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
