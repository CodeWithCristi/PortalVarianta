"use client";
import { useForm } from "formbold-react";
import z from "zod";

const schema = z.object({
  judet: z.string().min(2, { message: "Județul trebuie să aibă cel puțin 2 caractere" }),
  localitate: z.string().min(2, { message: "Localitatea trebuie să aibă cel puțin 2 caractere" }),
  nume: z.string().min(3, { message: "Numele trebuie să aibă cel puțin 3 caractere" }),
  numeFirma: z.string().min(3, { message: "Numele firmei trebuie să aibă cel puțin 3 caractere" }),
  telefon: z.string().min(10, { message: "Numărul de telefon trebuie să aibă cel puțin 10 caractere" }),
  email: z.string().email({ message: "Vă rugăm să introduceți o adresă de email validă" }),
  descriere: z.string().min(20, { message: "Descrierea firmei trebuie să aibă cel puțin 20 de caractere" }),
});

const InscrieFirma = ({ formId }: { formId: string }) => {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className="mx-auto mt-40 text-center">
        <h1 className="mb-3.5 text-custom-1 font-bold text-dark">Mulțumim!</h1>
        <p>Firma ta a fost înregistrată cu succes. Vei primi detalii suplimentare pe email.</p>
        <button className="mt-10 rounded-lg bg-dark px-6 py-3 font-medium text-white hover:opacity-90">
          Înapoi acasă
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-40 max-w-[800px] rounded-xl">
      <div className="text-center">
        <h1 className="mb-3.5 text-custom-1 font-bold text-dark">
          Înregistrează-ți firma
        </h1>
        <p>Completează formularul de mai jos pentru a-ți înregistra firma.</p>
      </div>

      <div className="my-10 bg-white p-4 shadow-box sm:p-7.5 xl:p-10">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            {/* Județ */}
            <div className="col-span-1">
              <label htmlFor="judet" className="mb-3 block text-custom-sm font-medium text-dark">
                Județ
              </label>
              <input
                type="text"
                placeholder="Introdu județul"
                required
                name="judet"
                className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7 focus:border-transparent focus:ring-2 focus:ring-primary"
              />
            </div>
            {/* Localitate */}
            <div className="col-span-1">
              <label htmlFor="localitate" className="mb-3 block text-custom-sm font-medium text-dark">
                Localitate
              </label>
              <input
                type="text"
                placeholder="Introdu localitatea"
                required
                name="localitate"
                className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7 focus:border-transparent focus:ring-2 focus:ring-primary"
              />
            </div>
            {/* Nume */}
            <div className="col-span-1">
              <label htmlFor="nume" className="mb-3 block text-custom-sm font-medium text-dark">
                Nume
              </label>
              <input
                type="text"
                placeholder="Introdu numele tău"
                required
                name="nume"
                className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7 focus:border-transparent focus:ring-2 focus:ring-primary"
              />
            </div>
            {/* Nume firmă */}
            <div className="col-span-1">
              <label htmlFor="numeFirma" className="mb-3 block text-custom-sm font-medium text-dark">
                Nume firmă
              </label>
              <input
                type="text"
                placeholder="Introdu numele firmei"
                required
                name="numeFirma"
                className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7 focus:border-transparent focus:ring-2 focus:ring-primary"
              />
            </div>
            {/* Telefon */}
            <div className="col-span-1">
              <label htmlFor="telefon" className="mb-3 block text-custom-sm font-medium text-dark">
                Număr de telefon
              </label>
              <input
                type="tel"
                placeholder="Introdu numărul de telefon"
                required
                name="telefon"
                className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7 focus:border-transparent focus:ring-2 focus:ring-primary"
              />
            </div>
            {/* Email */}
            <div className="col-span-1">
              <label htmlFor="email" className="mb-3 block text-custom-sm font-medium text-dark">
                Email
              </label>
              <input
                type="email"
                placeholder="Introdu adresa de email"
                required
                name="email"
                className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7 focus:border-transparent focus:ring-2 focus:ring-primary"
              />
            </div>
            {/* Descriere firmă */}
            <div className="col-span-2">
              <label htmlFor="descriere" className="mb-3 block text-custom-sm font-medium text-dark">
                Descriere firmă
              </label>
              <textarea
                name="descriere"
                placeholder="Introdu descrierea firmei"
                required
                className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7 focus:border-transparent focus:ring-2 focus:ring-primary"
                cols={20}
                rows={7}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 flex w-full justify-center rounded-md bg-dark px-5 py-3.5 font-medium text-white transition-all duration-200 hover:opacity-90"
          >
            Trimite formularul
          </button>
        </form>
      </div>
    </div>
  );
};

export default InscrieFirma;
