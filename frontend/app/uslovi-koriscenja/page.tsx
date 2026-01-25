import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uslovi korišćenja",
  description:
    "Uslovi korišćenja sajta STEP-SISTEM. Pravila i odredbe koje regulišu korišćenje našeg sajta, prava intelektualne svojine i odgovornost korisnika.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Uslovi korišćenja - STEP-SISTEM",
    description:
      "Uslovi korišćenja sajta STEP-SISTEM. Pravila i odredbe koje regulišu korišćenje našeg sajta, prava intelektualne svojine i odgovornost korisnika.",
    type: "website",
    url: "https://stepsistem.rs/uslovi-koriscenja",
    siteName: "STEP-SISTEM",
    locale: "sr_RS",
    images: [
      {
        url: "https://stepsistem.rs/logo.png",
        width: 1200,
        height: 630,
        alt: "STEP-SISTEM Uslovi korišćenja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uslovi korišćenja - STEP-SISTEM",
    description:
      "Uslovi korišćenja sajta STEP-SISTEM. Pravila i odredbe koje regulišu korišćenje našeg sajta, prava intelektualne svojine i odgovornost korisnika.",
    images: ["https://stepsistem.rs/logo.png"],
  },
  alternates: {
    canonical: "https://stepsistem.rs/uslovi-koriscenja",
  },
};

export default function UsloviKoriscenja() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">
            Uslovi korišćenja
          </h1>
          <div className="prose max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">
              Poslednji put ažurirano: 25.01.2026.
            </p>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                1. OPŠTE ODREDBE
              </h2>
              <p>
                Ovi Uslovi korišćenja regulišu korišćenje sajta{" "}
                <span className="font-medium">https://stepsistem.rs</span>.
                Vlasnik sajta je STEP-SISTEM, sa sedištem u Valjevu, Srbija.
              </p>
              <p className="mt-2">
                Kontakt:{" "}
                <span className="font-medium">step.sistem.valjevo@gmail.com</span>
                , telefon: <span className="font-medium">069 467 5677</span>.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                2. OPIS USLUGE
              </h2>
              <p>
                Sajt pruža korisnicima informacije o aktivnostima, uslugama i
                projektima STEP-SISTEM-a, kao i mogućnost kontakta. Zadržavamo
                pravo da izmenimo, obustavimo ili ukinemo bilo koji deo sajta
                bez prethodne najave.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                3. PRAVA INTELEKTUALNE SVOJINE
              </h2>
              <p>
                Svi sadržaji na sajtu (tekstovi, slike, grafike, logo, softver)
                su vlasništvo STEP-SISTEM-a ili su korišćeni uz dozvolu i
                zaštićeni su autorskim pravima.
              </p>
              <p className="mt-2">
                Zabranjeno je kopiranje, distribucija, izmena ili korišćenje bez
                dozvole.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                4. KORIŠĆENJE SAJTA
              </h2>
              <p>
                Korisnik se obavezuje da neće koristiti sajt u svrhe koje su
                protivzakonite ili zabranjene ovim Uslovima. Zabranjeno je:
              </p>
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li>
                  Postavljanje sadržaja koji je uvredljiv, nezakonit, spam ili
                  sadrži viruse
                </li>
                <li>Pokušaj neovlašćenog pristupa sistemu sajta</li>
                <li>Lažno predstavljanje</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                5. OGRANIČENJE ODGOVORNOSTI
              </h2>
              <p>
                Ne garantujemo da će sajt uvek biti dostupan i bez grešaka. Ne
                preuzimamo odgovornost za eventualne štete nastale korišćenjem
                sajta ili informacija sa sajta.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                6. POLITIKA PRIVATNOSTI
              </h2>
              <p>
                Prikupljamo samo podatke koji su neophodni za pružanje usluge
                (npr. email adresa, IP adresa, kolačići). Više informacija
                pogledajte u Politici privatnosti.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                7. IZMENE USLOVA
              </h2>
              <p>
                Zadržavamo pravo da u bilo kom trenutku izmenimo ove Uslove
                korišćenja. Promene stupaju na snagu objavljivanjem na sajtu.
                Korišćenjem sajta nakon izmena, korisnik prihvata nove uslove.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                8. VAŽEĆE PRAVO I NADLEŽNOST
              </h2>
              <p>
                Ovi uslovi se tumače u skladu sa zakonima Republike Srbije. Za
                sve sporove nadležan je sud u Valjevu.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
