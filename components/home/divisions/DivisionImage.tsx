import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function DivisionImage({ division }: any) {
  return (
    <div className="relative">
      {/* Background Glow */}

      <div className="absolute -left-10 top-12 h-72 w-72 rounded-full bg-green-300/25 blur-[90px]" />

      <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-lime-300/20 blur-[100px]" />

      {/* Image Card */}

      <div
        className="
        group
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-green-100
        bg-white
        shadow-[0_30px_90px_rgba(0,0,0,.12)]
        "
      >
        {/* Image */}

        <div className="relative h-[520px]">
          <Image
            src={division.image}
            alt={division.title}
            fill
            className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
            "
          />

          {/* Dark Gradient */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

          {/* Decorative Grid */}

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:34px_34px]" />
        </div>

        {/* Floating Division Badge */}

        {/* <div
          className="
          absolute
          left-8
          top-8
          rounded-2xl
          border
          border-white/20
          bg-white/15
          px-5
          py-3
          backdrop-blur-xl
          "
        >
          <p className="text-xs uppercase tracking-[0.25em] text-white/80">
            Division
          </p>

          <h3 className="mt-1 text-xl font-bold text-white">
            {division.short}
          </h3>
        </div> */}

        {/* Bottom Card */}

        <div
          className="
          absolute
          bottom-8
          left-8
          right-8
          rounded-3xl
          border
          border-white/20
          bg-white/15
          p-6
          backdrop-blur-xl
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/80">Integrated Solutions</p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                {division.title}
              </h3>
            </div>

            <div
              className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-white
              text-green-700
              shadow-xl
              "
            >
              <ArrowUpRight size={22} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
