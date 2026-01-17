import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politika privatnosti",
  description:
    "Politika privatnosti STEP-SISTEM-a. Informacije o načinu prikupljanja, korišćenja i zaštite ličnih podataka posetilaca i klijenata. Uvažavamo vašu privatnost i poštujemo zakonske odredbe o zaštiti podataka.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Politika privatnosti - STEP-SISTEM",
    description:
      "Politika privatnosti STEP-SISTEM-a. Informacije o načinu prikupljanja, korišćenja i zaštite ličnih podataka posetilaca i klijenata. Uvažavamo vašu privatnost i poštujemo zakonske odredbe o zaštiti podataka.",
    type: "website",
    url: "https://stepsistem.rs/politika-privatnosti",
    siteName: "STEP-SISTEM",
    locale: "sr_RS",
    images: [
      {
        url: "https://stepsistem.rs/logo.png",
        width: 1200,
        height: 630,
        alt: "STEP-SISTEM Politika privatnosti",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Politika privatnosti - STEP-SISTEM",
    description:
      "Politika privatnosti STEP-SISTEM-a. Informacije o načinu prikupljanja, korišćenja i zaštite ličnih podataka posetilaca i klijenata. Uvažavamo vašu privatnost i poštujemo zakonske odredbe o zaštiti podataka.",
    images: ["https://stepsistem.rs/logo.png"],
  },
  alternates: {
    canonical: "https://stepsistem.rs/politika-privatnosti",
  },
};

export default function PolitikaPrivatnosti() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">
            Politika privatnosti
          </h1>
          <div className="prose max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">
              Poslednji put ažurirano: [datum ažuriranja]
            </p>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                1. OPŠTE ODREDBE
              </h2>
              <p>
                Ova Politika privatnosti odnosi se na veb sajt STEP-SISTEM-a
                (u daljem tekstu: "Društvo"), dostupan na adresi [adresa sajta],
                i objašnjava način prikupljanja, korišćenja i zaštite ličnih
                podataka posetilaca i klijenata.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                2. Koje podatke prikupljamo
              </h2>
              <p>
                Prikupljamo samo one podatke koji su neophodni za funkcionisanje
                sajta i pružanje usluga, kao što su:
              </p>
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li>Ime i prezime (ukoliko se unosi pri kontaktu)</li>
                <li>Adresa elektronske pošte</li>
                <li>Broj telefona (ukoliko se dostavi)</li>
                <li>IP adresa</li>
                <li>
                  Informacije koje se automatski prikupljaju putem kolačića
                  (cookies)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                3. Svrha obrade podataka
              </h2>
              <p>
                Prikupljene podatke koristimo isključivo u sledeće svrhe:
              </p>
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li>Omogućavanje komunikacije sa korisnicima</li>
                <li>Pružanje informacija o našim uslugama i projektima</li>
                <li>Slanje obaveštenja o aktivnostima i događajima</li>
                <li>Poboljšanje funkcionisanja sajta</li>
              </ul>
              <p className="mt-2">
                Nećemo koristiti lične podatke u svrhe koje nisu navedene u
                ovoj Politici, niti ćemo ih prodavati ili deliti sa trećim
                licima bez vašeg izričitog pristanka, osim ukoliko je to
                zakonom obavezno.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                4. Kolačići (Cookies)
              </h2>
              <p>
                Sajt koristi kolačiće radi boljeg korisničkog iskustva.
                Korisnici imaju mogućnost da u svom internet pregledaču
                onemoguće korišćenje kolačića, ali to može uticati na
                funkcionalnost sajta.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                5. Bezbednost podataka
              </h2>
              <p>
                Preduzimamo odgovarajuće tehničke i organizacione mere radi
                zaštite ličnih podataka od neovlašćenog pristupa, zloupotrebe,
                gubitka ili uništenja. Ipak, nijedan sistem nije 100% siguran,
                te ne možemo u potpunosti garantovati bezbednost podataka.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                6. Prava korisnika
              </h2>
              <p>
                Kao korisnik, imate sledeća prava u vezi sa vašim ličnim
                podacima:
              </p>
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li>Pravo na pristup podacima</li>
                <li>Pravo na ispravku netačnih podataka</li>
                <li>Pravo na brisanje ("pravo na zaborav")</li>
                <li>Pravo na ograničenje obrade</li>
                <li>Pravo na prigovor</li>
                <li>Pravo na prenosivost podataka</li>
              </ul>
              <p className="mt-2">
                Zahtevi u vezi sa ostvarivanjem ovih prava možete poslati na:{" "}
                [email adresa]
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                7. Zadržavanje podataka
              </h2>
              <p>
                Vaši podaci se čuvaju onoliko dugo koliko je potrebno radi
                ispunjavanja svrha za koje su prikupljeni ili u skladu sa zakonom.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                8. Izmene Politike privatnosti
              </h2>
              <p>
                Zadržavamo pravo da u bilo kom trenutku izmenimo ovu Politiku
                privatnosti. Sve izmene će biti objavljene na ovoj stranici, i
                stupaju na snagu od trenutka objavljivanja.
              </p>
              <p className="mt-2">
                Preporučujemo da povremeno proverite ovu stranicu kako biste
                bili upoznati sa eventualnim izmenama.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                9. Kontakt
              </h2>
              <p>
                Za sva pitanja u vezi sa zaštitom privatnosti i ličnih podataka,
                možete nas kontaktirati na:
              </p>
              <p className="mt-2">
                STEP-SISTEM
                <br />
                [adresa sedišta], [poštanski broj] [grad], Srbija
                <br />
                E-pošta: [email adresa]
                <br />
                Telefon: [broj telefona]
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
