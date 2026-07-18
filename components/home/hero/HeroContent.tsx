import Link from "next/link";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";

export default function HeroContent() {
  return (
    <>
      <Badge>Imagine. Design. Develop. Deliver.</Badge>

      <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">
        Engineering
        <br />
        <GradientText>Tomorrow's</GradientText>
        <br />
        Solutions Today.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
        TeamSufix.System Consulting & Engineering delivers world-class software,
        engineering, architecture, construction and consulting services that
        transform ideas into impactful realities.
      </p>

      <div className="mt-10 flex flex-wrap gap-5">
        <Button>Request Quote</Button>

        <Link
          href="/divisions"
          className="rounded-full border border-green-200 px-8 py-4 font-semibold transition hover:border-green-600 hover:bg-green-50"
        >
          Explore Divisions
        </Link>
      </div>

      <div className="mt-12 flex flex-wrap gap-6 text-sm text-gray-500">
        <span>✓ NGOs</span>
        <span>✓ Financial Institutions</span>
        <span>✓ Schools</span>
        <span>✓ Manufacturing</span>
      </div>
    </>
  );
}
