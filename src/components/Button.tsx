"use client"

import Link from "next/link";
import { IButton } from "@/types/IButton";

export default function ButtonLink({ link, text, onClick, variant = "primary", size = "md", icon }: IButton) {
  // Variantes de estilo
  const variantClasses = {
    primary: "bg-transparent hover:text-[#6E07F3] text-black",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    tertiary: "bg-transparent hover:text-white hover:bg-[#6E07F3] text-[#6E07F3] border border-[#6E07F3]",
  };

  // Tamaños de botón
  const sizeClasses = {
    sm: "py-1 px-2 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-xl",
  };

  // Combinar clases
  const buttonClasses = `${variantClasses[variant]} ${sizeClasses[size]} font-bold rounded-full flex items-center justify-center gap-2 cursor-pointer`;

  return (
    <Link href={link}>
      <button onClick={onClick} className={buttonClasses}>
        {icon && <span className="icon">{icon}</span>}
        {text}
      </button>
    </Link>
  );
}