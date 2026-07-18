import Link from "next/link";

import Logo from "@/components/ui/Logo";

import { navigation } from "@/lib/navigation";
import { COMPANY } from "@/lib/constants";

import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-4">
          <div>
            <Logo />

            <p className="mt-6 text-gray-400">{COMPANY.slogan}</p>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">Company</h3>

            <div className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-400 hover:text-green-400"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">Contact</h3>

            <p className="text-gray-400">{COMPANY.email}</p>

            <p className="mt-3 text-gray-400">{COMPANY.phone}</p>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">Follow Us</h3>

            <div className="flex gap-4 text-2xl">
              <FaFacebook />

              <FaLinkedin />

              <FaInstagram />
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-gray-800 pt-8 text-center text-gray-500">
          © {new Date().getFullYear()} TeamSufix. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
