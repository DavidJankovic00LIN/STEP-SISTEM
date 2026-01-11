"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";

interface SmoothScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  anchorId?: string;
}

export default function SmoothScrollLink({
  href,
  children,
  className,
  style,
  anchorId,
}: SmoothScrollLinkProps) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Ako smo na homepage-u i postoji anchor ID, koristi smooth scroll
    if (pathname === "/" && anchorId) {
      e.preventDefault();
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // Inače, Next.js Link će obraditi navigaciju normalno
  };

  return (
    <Link href={href} className={className} style={style} onClick={handleClick}>
      {children}
    </Link>
  );
}
