import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import Logo from "@/components/ui/Logo";
import { COMPANY } from "@/lib/constants";
import { navigation } from "@/lib/navigation";

const divisions = [
  {
    name: "TeamSufix Digital",
    href: "/divisions/digital",
  },
  {
    name: "Engineering",
    href: "/divisions/engineering",
  },
  {
    name: "Architecture",
    href: "/divisions/architecture",
  },
  {
    name: "Construction",
    href: "/divisions/construction",
  },
  {
    name: "Consulting",
    href: "/divisions/consulting",
  },
];

const socials = [
  {
    icon: FaFacebookF,
    href: "#",
    label: "Facebook",
  },
  {
    icon: FaLinkedinIn,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: FaXTwitter,
    href: "#",
    label: "X",
  },
];

export default function Footer() {
  return (
    <footer
      className="
      relative
      overflow-hidden
      bg-gradient-to-br
      from-[#020c06]
      via-[#052e16]
      to-[#0f5132]
      text-white
      "
    >
      {/* BACKGROUND GRID */}

      <div
        className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.04]
        bg-[linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)]
        bg-[size:64px_64px]
        "
      />

      {/* BACKGROUND GLOWS */}

      <div
        className="
        pointer-events-none
        absolute
        -right-40
        -top-40
        h-[600px]
        w-[600px]
        rounded-full
        bg-green-400/10
        blur-[140px]
        "
      />

      <div
        className="
        pointer-events-none
        absolute
        -bottom-40
        -left-40
        h-[500px]
        w-[500px]
        rounded-full
        bg-emerald-500/10
        blur-[130px]
        "
      />

      <div
        className="
        relative
        mx-auto
        max-w-7xl
        px-6
        py-20
        lg:px-8
        "
      >
        {/* TOP BRAND STRIP */}

        <div
          className="
          mb-16
          flex
          flex-col
          gap-8
          border-b
          border-white/10
          pb-12
          lg:flex-row
          lg:items-end
          lg:justify-between
          "
        >
          <div className="max-w-xl">
            <Logo />

            <p
              className="
              mt-5
              text-sm
              font-bold
              uppercase
              tracking-[0.25em]
              text-green-300
              "
            >
              Imagine · Design · Develop · Deliver
            </p>
          </div>

          {/* SOCIALS */}

          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="
                group
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.05]
                text-slate-300
                backdrop-blur
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-green-400/50
                hover:bg-green-500
                hover:text-white
                "
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>

        {/* MAIN FOOTER GRID */}

        <div
          className="
          grid
          gap-14
          sm:grid-cols-2
          lg:grid-cols-[1.25fr_0.8fr_1fr_1.25fr]
          "
        >
          {/* COMPANY */}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-green-300">
              Company
            </h3>

            <div className="mt-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                  group
                  flex
                  items-center
                  gap-2
                  text-slate-300
                  transition
                  hover:text-green-300
                  "
                >
                  <span>{item.title}</span>

                  <ArrowUpRight
                    size={14}
                    className="
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:opacity-100
                    "
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* DIVISIONS */}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-green-300">
              Divisions
            </h3>

            <div className="mt-6 space-y-4">
              {divisions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                  group
                  flex
                  items-center
                  gap-2
                  text-slate-300
                  transition
                  hover:text-green-300
                  "
                >
                  <span>{item.name}</span>

                  <ArrowUpRight
                    size={14}
                    className="
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:opacity-100
                    "
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-green-300">
              Get In Touch
            </h3>

            <div className="mt-6 space-y-5">
              {/* EMAIL */}

              <Link
                href={`mailto:${COMPANY.email}`}
                className="
                group
                flex
                items-start
                gap-4
                "
              >
                <div
                  className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  "
                >
                  <Mail size={17} className="text-green-300" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm text-slate-200 transition group-hover:text-green-300">
                    {COMPANY.email}
                  </p>
                </div>
              </Link>

              {/* PHONE */}

              <Link
                href={`tel:${COMPANY.phone}`}
                className="
                group
                flex
                items-start
                gap-4
                "
              >
                <div
                  className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  "
                >
                  <Phone size={17} className="text-green-300" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-slate-200 transition group-hover:text-green-300">
                    {COMPANY.phone}
                  </p>
                </div>
              </Link>

              {/* ADDRESS */}

              <div className="flex items-start gap-4">
                <div
                  className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  "
                >
                  <MapPin size={17} className="text-green-300" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Office
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-200">
                    {COMPANY.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}

          <div
            className="
            rounded-[22px]
            border
            border-green-300/10
            bg-white/[0.05]
            p-7
            backdrop-blur
            "
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-300">
              Have a Project?
            </p>

            <h3 className="mt-4 text-2xl font-bold leading-tight text-white">
              Let's turn your next idea into something real.
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Tell us what you are working on and let's explore how we can help.
            </p>

            <Link
              href="/request-quote"
              className="
              group
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-green-500
              px-5
              py-3
              text-sm
              font-bold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-green-400
              hover:shadow-[0_15px_35px_rgba(34,197,94,.25)]
              "
            >
              Start a Conversation
              <ArrowUpRight
                size={16}
                className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>
        </div>

        {/* DIVIDER */}

        <div className="my-14 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />

        {/* LOWER FOOTER */}

        <div
          className="
          flex
          flex-col
          gap-5
          text-sm
          text-slate-400
          lg:flex-row
          lg:items-center
          lg:justify-between
          "
        >
          <p className="text-center lg:text-left">
            © {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.
          </p>

          <div
            className="
            flex
            flex-wrap
            justify-center
            gap-x-6
            gap-y-3
            "
          >
            <Link href="/privacy-policy" className="hover:text-green-400">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-green-400">
              Terms & Conditions
            </Link>

            <Link href="/cookie-policy" className="hover:text-green-400">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
