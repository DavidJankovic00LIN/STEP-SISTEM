import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import SmoothScrollLink from "./SmoothScrollLink";

export default function Header() {
  return (
    <header className="w-full">
      {/* Logo deo - visina 120px */}
      <div className="flex min-h-[120px] items-center justify-center bg-white">
        <Link href="/" className="flex flex-col items-center justify-center">
          <Image
            src={logo}
            alt="STEP-SISTEM Logo"
            width={200}
            height={80}
            priority
            className="object-contain"
          />
          <h4
            className="mt-2 text-base font-bold"
            style={{ color: "#003866", fontFamily: "var(--font-montserrat)" }}
          >
            Industrial automation & PLC solutions
          </h4>
        </Link>
      </div>

      {/* Razmak od 20px - bela pozadina */}
      <div className="h-5 bg-white"></div>

      {/* Navigacioni baner - sivi, visina 60px */}
      <nav className="flex w-full items-center justify-center bg-gray-700 px-4 py-2 sm:px-8">
        <div className="flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-8 md:gap-x-12">
          <SmoothScrollLink
            href="/#o-nama"
            anchorId="o-nama"
            className="whitespace-nowrap text-sm font-bold text-white transition-colors hover:text-gray-200 sm:text-base md:text-lg"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            O nama
          </SmoothScrollLink>
          <Link
            href="/proizvodi"
            className="whitespace-nowrap text-sm font-bold text-white transition-colors hover:text-gray-200 sm:text-base md:text-lg"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Proizvodi
          </Link>
          <Link
            href="/kontakt"
            className="whitespace-nowrap text-sm font-bold text-white transition-colors hover:text-gray-200 sm:text-base md:text-lg"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  );
}
