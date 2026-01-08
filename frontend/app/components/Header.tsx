import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

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
          <p className="mt-2 text-sm" style={{ color: "#0066CC" }}>
            Industrial automation & PLC solutions
          </p>
        </Link>
      </div>

      {/* Razmak od 20px - bela pozadina */}
      <div className="h-5 bg-white"></div>

      {/* Navigacioni baner - sivi, visina 40px */}
      <nav className="flex h-10 items-center justify-center bg-gray-700">
        <div className="flex gap-8">
          <Link
            href="/o-nama"
            className="text-white transition-colors hover:text-gray-200"
          >
            O nama
          </Link>
          <Link
            href="/proizvodi"
            className="text-white transition-colors hover:text-gray-200"
          >
            Proizvodi
          </Link>
          <Link
            href="/kontakt"
            className="text-white transition-colors hover:text-gray-200"
          >
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  );
}
