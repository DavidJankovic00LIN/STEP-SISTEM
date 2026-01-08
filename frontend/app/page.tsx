import Slider from "./components/Slider";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Slider />
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-900">
            Dobrodošli u STEP-SISTEM
          </h1>
          <p className="mb-12 text-xl text-gray-700">
            Profesionalna rešenja za industrijsku automatizaciju i PLC sisteme
          </p>
          <div className="space-y-6 text-left text-gray-700 leading-relaxed">
            <p>
              STEP-SISTEM je firma iz Valjeva specijalizovana za industrijsku
              automatiku i PLC rešenja. Bavimo se projektovanjem, programiranjem
              i puštanjem u rad automatizovanih industrijskih sistema, sa fokusom
              na pouzdan rad, stabilnost procesa i dugoročnu održivost rešenja.
            </p>
            <p>
              Naš cilj je da klijentima obezbedimo funkcionalna, jasna i
              efikasna upravljačka rešenja, prilagođena realnim potrebama
              proizvodnje. Radimo kako na novim projektima, tako i na
              modernizaciji i unapređenju postojećih mašina i proizvodnih linija.
            </p>
            <p>
              Specijalizovani smo za PLC programiranje, izradu HMI i SCADA
              sistema, projektovanje i izradu elektro ormara, kao i servis i
              dijagnostiku industrijskih sistema. Posebnu pažnju posvećujemo
              preglednoj dokumentaciji, lakoj upotrebi sistema i obuci operatera.
            </p>
            <p>
              STEP-SISTEM pristupa svakom projektu individualno, sa jasnom
              komunikacijom, tehničkom preciznošću i pouzdanim rešenjima koja
              smanjuju zastoje i povećavaju produktivnost.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
