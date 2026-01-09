import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-semibold">STEP-SISTEM</h3>
            <p className="text-sm text-gray-300">
              Profesionalna rešenja za industrijsku automatizaciju i PLC sisteme.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Brzi linkovi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  O nama
                </Link>
              </li>
              <li>
                <Link
                  href="/proizvodi"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Proizvodi
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Kontakt</h3>
            <p className="text-sm text-gray-300">Valjevo, Srbija</p>
            <p className="mt-2 text-sm text-gray-300">
              Specijalizovani za industrijsku automatiku i PLC rešenja
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-600 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} STEP-SISTEM. Sva prava zadržana.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/uslovi-koriscenja"
                className="text-gray-400 transition-colors hover:text-white"
              >
                Uslovi korišćenja
              </Link>
              <Link
                href="/politika-privatnosti"
                className="text-gray-400 transition-colors hover:text-white"
              >
                Politika privatnosti
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
