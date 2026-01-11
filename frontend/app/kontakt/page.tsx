"use client";

import { useState } from "react";

export default function Kontakt() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "success" | "error" | null
  >(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Web3Forms Access Key - treba da se zameni sa stvarnim ključem
      // Dobija se na https://web3forms.com
      formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <h1 className="mb-12 text-center text-4xl font-bold text-gray-900">
          Kontakt
        </h1>

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          {/* Kontakt informacije */}
          <div className="lg:col-span-1">
            <div className="rounded-lg bg-gray-100 p-8">
              <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                Kontakt informacije
              </h2>
              <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Email</h3>
                    <a
                      href="mailto:info@step-sistem.rs"
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                     step.sistem.valjevo@gmail.com
                    </a>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Telefon</h3>
                    <a
                      href="tel:+381123456789"
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      069 467 5677
                    </a>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Adresa</h3>
                    <p className="leading-relaxed">
                      Valjevo, Srbija
                    </p>
                  </div>
                </div>
            </div>
          </div>

          {/* Kontakt forma */}
          <div className="lg:col-span-2">
            <div className="rounded-lg bg-gray-100 p-8">
              <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                Pošaljite nam poruku
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Ime i prezime *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Predmet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Poruka *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  ></textarea>
                </div>

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <div className="rounded-lg bg-green-50 p-4 text-green-800">
                    Poruka je uspešno poslata! Kontaktiraćemo vas uskoro.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="rounded-lg bg-red-50 p-4 text-red-800">
                    Došlo je do greške prilikom slanja poruke. Molimo pokušajte
                    ponovo.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-gray-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
                >
                  {isSubmitting ? "Šalje se..." : "Pošalji poruku"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
