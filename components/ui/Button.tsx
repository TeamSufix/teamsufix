"use client";

import { ButtonHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: boolean;
}

export default function Button({
  children,
  className,
  variant = "primary",
  icon = false,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-gradient-to-r from-green-700 to-green-500 text-white shadow-lg hover:shadow-green-300/30",

    secondary: "bg-green-100 text-green-800 hover:bg-green-200",

    outline: "border border-green-600 text-green-700 hover:bg-green-50",

    ghost: "bg-transparent hover:bg-gray-100 text-gray-800",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-1",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}

      {icon && <ArrowRight size={18} />}
    </button>
  );
}
