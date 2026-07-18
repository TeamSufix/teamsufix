import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: number;
}

export default function Logo({ size = 52 }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo/logo.png"
        alt="TeamSufix"
        width={size}
        height={size}
        priority
      />

      <div>
        <h1 className="font-heading text-xl font-bold">TeamSufix</h1>

        <p className="text-xs text-gray-500">Consulting & Engineering</p>
      </div>
    </Link>
  );
}
