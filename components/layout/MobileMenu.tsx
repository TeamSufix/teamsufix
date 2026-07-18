"use client";

import Link from "next/link";

import { Dialog, DialogPanel } from "@headlessui/react";

import { X, ChevronDown, ChevronRight } from "lucide-react";

import { useState } from "react";

import Logo from "@/components/ui/Logo";

import { navigation } from "@/lib/navigation";

import NavbarCTA from "./NavbarCTA";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: Props) {
  const [expand, setExpand] = useState(false);

  return (
    <Dialog open={open} onClose={onClose} className="relative z-[100]">
      {/* Backdrop */}

      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Panel */}

      <div className="fixed inset-y-0 right-0 flex w-full justify-end">
        <DialogPanel className="h-full w-80 overflow-y-auto bg-white p-6 shadow-2xl">
          <div className="mb-10 flex items-center justify-between">
            <Logo />

            <button
              onClick={onClose}
              className="rounded-xl p-2 hover:bg-gray-100"
            >
              <X />
            </button>
          </div>

          <div className="space-y-4">
            {navigation.map((item) => {
              if (item.children) {
                return (
                  <div key={item.title}>
                    <button
                      onClick={() => setExpand(!expand)}
                      className="flex w-full items-center justify-between rounded-xl py-3 text-left font-semibold"
                    >
                      {item.title}

                      {expand ? <ChevronDown /> : <ChevronRight />}
                    </button>

                    {expand && (
                      <div className="ml-5 mt-3 space-y-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            className="block text-gray-600"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-xl py-3 font-semibold"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          <div className="mt-10">
            <NavbarCTA />
          </div>

          <div className="mt-12 border-t pt-8">
            <p className="text-sm text-gray-500">teamsufix31@gmail.com</p>

            <p className="mt-2 text-sm text-gray-500">
              Imagine. Design. Develop. Deliver.
            </p>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
