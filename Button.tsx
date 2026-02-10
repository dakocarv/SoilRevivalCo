"use client";

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-block rounded-full px-8 py-3.5 text-lg font-medium transition-all duration-300 cursor-pointer text-center";

  const variants = {
    primary:
      "bg-green-700 text-cream-50 hover:bg-green-600 shadow-md hover:shadow-lg",
    secondary:
      "bg-cream-200 text-green-900 hover:bg-cream-300 shadow-sm hover:shadow-md",
    outline:
      "border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-cream-50",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
